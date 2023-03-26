import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

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
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((p, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{p.data.name}</Td>
                <Td>{p.data.description}</Td>
                <Td>
                  <Button bgColor='#ff99fe' onClick={() => navigate(`/project-detail/${p.data.id}/${index}`)}>
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Projects;