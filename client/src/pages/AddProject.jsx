import { useState } from "react";
import { Container, Center, Box, FormControl, FormLabel, Input, Textarea, Heading, Button } from '@chakra-ui/react';

import { addProjectToPB } from '../Polybase';

function AddProject({ contractDPR }) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitProject = async () => {
    try {
      addProjectToPB(address, name, description);
      const transaction = await contractDPR.addProject(name);
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
          <Heading textAlign="center" fontSize="3xl" mb="4">Add Project</Heading>
          <FormControl mb='3'>
            <FormLabel htmlFor='contractAddress'>Contract Address</FormLabel>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <FormControl mb='3'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl mb='3'>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>

          <Button mt="4" onClick={submitProject}>Add</Button>
        </Box>
      </Center>
    </Container>
  )
}

export default AddProject;