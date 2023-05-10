import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, FormControl, FormLabel, Textarea, Flex, Box, Avatar, Heading, Button } from '@chakra-ui/react';

import { getProjectFromPB, addCommentToPB } from '../Polybase';
import RateModal from "../components/RateModal";

function ProjectDetail({ ethAddress, contractDPR }) {
  const { address, id } = useParams();

  const [ratings, setRatings] = useState("");
  const [moreproject, setMoreProject] = useState({});
  const [showRateModal, setShowRateModal] = useState(false);
  const [comment, setComment] = useState("");
  const [loadComment, setLoadComment] = useState(false);

  useEffect(() => {
    if(contractDPR) getProject()
  }, [contractDPR])

  useEffect(() => {
    getMoreProject()
  }, [])

  const openRateModal = () => {
    setShowRateModal(true);
  }
  
  const closeRateModal = () => {
    setShowRateModal(false);
  }

  const getProject = async () => {
    try {
      const projectData = await contractDPR.getRatingsByProject(id - 1);
     
      const scores = projectData.toString().split(",");
      let total = 0;
      for(let i = 0; i < scores.length; i++){
        total += +scores[i];
      }
      setRatings(total / scores.length);
    } catch(error) {
      console.error(error);
    }
  }

  const getMoreProject = async () => {
    try {
      const moreProjectData = await getProjectFromPB(address);
      console.log(moreProjectData)
      setMoreProject(moreProjectData);
    } catch(error) {
      console.error(error);
    }
  }

  const rateProject = async (num) => {
    try {
      const transaction = await contractDPR.rateAProject(id - 1, num);
      const tx = await transaction.wait();
      console.log(tx);
    } catch(error) {
      console.error(error);
    }
  }

  const addComment = async (id, comment) => {
    try {
      setLoadComment(true);
      const data = await addCommentToPB(id, comment);
      setComment("");
      setMoreProject(data);
      setLoadComment(false);
    } catch(error) {
      console.error(error);
      setLoadComment(false);
    }
  }
  return (
    <Container maxW='1000px'>
      <Box borderWidth='1px' borderRadius='lg' borderColor='green' overflow='hidden' p='5' width='500px' mt='5'>
        <Heading fontSize="3xl" mb="4">{moreproject.name}</Heading>
        <p>{moreproject.description}</p>
        <p>{address}</p>
        <p>Rating: {ratings} / 5</p>
        <Button bgColor="#ba52ed" mt='2' onClick={openRateModal}>
          Rate
        </Button>
      </Box>
      <FormControl mt='3' mb='6'>
        <FormLabel htmlFor='description'>Comment</FormLabel>
        <Textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        {comment
          ? <Button bgColor='#ff99fe' mt='1' onClick={() => addComment(moreproject.id, comment)} isLoading={loadComment} loadingText='Adding'>
              Add
            </Button>
          :  <Button mt='1' cursor="not-allowed">
              Add
            </Button>
        }
        
      </FormControl>
      {moreproject?.comments?.map((comment, index) => (
        <Flex mb='3'>
          <Avatar size='sm' name='user' mr='3' />
          <p key={index}>{comment}</p>
        </Flex>
      ))}
      <RateModal
        showRateModal={showRateModal}
        closeRateModal={closeRateModal}
        rateProject={rateProject}  />
    </Container>
  )
}

export default ProjectDetail;