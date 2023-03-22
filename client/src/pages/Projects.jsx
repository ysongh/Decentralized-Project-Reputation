import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SimpleGrid, Box, Heading, Button } from '@chakra-ui/react';

function Projects({ contractDPR }) {
  const navigate = useNavigate(); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if(contractDPR) getProjects()
  }, [contractDPR])
  

  const getProjects = async () => {
    try {
      const projectsData = await contractDPR.getProjects();
      console.log(projectsData)
      setProjects(projectsData);
      
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container maxW='1000px'>
      <Heading>Projects</Heading>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
        {projects.map(p => (
          <Box borderWidth='1px' borderRadius='lg' borderColor='green' overflow='hidden' p='5' width='500px' mt='5'>
            <Heading textAlign="center" fontSize="3xl" mb="4">Project Detail</Heading>
            <p>{p.name}</p>
            <p>{p.owner}</p>
            <Button mt="4" onClick={() => navigate(`/project-detail/${p.id.toString()}`)}>View</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Projects;