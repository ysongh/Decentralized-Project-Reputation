import { useState } from "react";
import { Container, Center, Box, FormControl, FormLabel, Input, Textarea, Heading, Text, Button } from '@chakra-ui/react';

import { addProjectToPB } from '../Polybase';

function AddProject({ contractDPR }) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState("");

  const submitProject = async () => {
    try {
      setLoading(true);
      
      const transaction = await contractDPR.addProject(address);
      const tx = await transaction.wait();
      console.log(tx);

      const count = await contractDPR.projectCount();

      addProjectToPB(count.toString(), address, name, description);
      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
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

          {contractDPR
            ? <Button mt="4" bgColor='#ff99fe' onClick={submitProject} isLoading={loading} loadingText='Submitting'>
                Add
              </Button>
            : <Text color="red" fontSize="xl">Please connect to your wallet</Text>
          }
        </Box>
      </Center>
    </Container>
  )
}

export default AddProject;