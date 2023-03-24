import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Center, Box, Heading, Button } from '@chakra-ui/react';

import { getProjectFromPB } from '../Polybase';
import RateModal from "../components/RateModal";

function ProjectDetail({ ethAddress, contractDPR }) {
  const { address, id } = useParams();

  const [project, setProject] = useState({});
  const [moreproject, setMoreProject] = useState({});
  const [showRateModal, setShowRateModal] = useState(false);

  useEffect(() => {
    if(contractDPR) getProject()
  }, [contractDPR])


  const openRateModal = () => {
    setShowRateModal(true);
  }
  
  const closeRateModal = () => {
    setShowRateModal(false);
  }

  const getProject = async () => {
    try {
      const projectData = await contractDPR.projects(id);
      setProject(projectData);

      const moreProjectData = await getProjectFromPB(address);
      setMoreProject(moreProjectData);
      
    } catch(error) {
      console.error(error);
    }
  }

  const rateProject = async (num) => {
    try {
      const transaction = await contractDPR.rateAProject(id, num);
      const tx = await transaction.wait();
      console.log(tx);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container maxW='1000px'>
      <Center>
        <Box borderWidth='1px' borderRadius='lg' borderColor='green' overflow='hidden' p='5' width='500px' mt='5'>
          <Heading textAlign="center" fontSize="3xl" mb="4">Project Detail {project.id?.toString()}</Heading>
          <p>{project.name}</p>
          <p>{moreproject.description}</p>
          <p>{project.owner}</p>
          <Button onClick={openRateModal}>Rate</Button>
        </Box>
      </Center>
      <RateModal
        showRateModal={showRateModal}
        closeRateModal={closeRateModal}
        rateProject={rateProject}  />
    </Container>
  )
}

export default ProjectDetail;