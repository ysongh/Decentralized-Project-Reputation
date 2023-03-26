import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SimpleGrid, Box, Heading, Button } from '@chakra-ui/react';

import { getProjectsFromPB } from '../Polybase';

function Projects({ contractDPR }) {
  const navigate = useNavigate(); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
  }, [])
  

  const getProjects = async () => {
    try {
      const projectsData = await getProjectsFromPB();
      console.log(projectsData);
      setProjects(projectsData);
      
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container maxW='1000px'>
      <Heading>Projects</Heading>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
        {projects.map((p, index) => (
          <Box key={index} borderWidth='1px' borderRadius='lg' borderColor='green' overflow='hidden' p='5' width='500px' mt='5'>
            <Heading fontSize="3xl" mb="4">{p.data.name}</Heading>
            <p>{p.data.description}</p>
            <Button mt="4" onClick={() => navigate(`/project-detail/${p.data.id}/${index}`)}>View</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Projects;