import { useEffect, useState } from "react";
import { Container, Center, Box, FormControl, FormLabel, Input, Heading, Button } from '@chakra-ui/react';

function ProjectDetail({ ethAddress, contractDPR }) {
  const [rates, setRates] = useState('');

  useEffect(() => {
    if(contractDPR) getRating()
  }, [contractDPR])
  

  const getRating = async () => {
    try {
      const rates = await contractDPR.getProjectRating(ethAddress);
      setRates(rates.toString());
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <Container maxW='1000px'>
      <Center>
        <Box borderWidth='1px' borderRadius='lg' borderColor='green' overflow='hidden' p='5' width='500px' mt='5'>
          <Heading textAlign="center" fontSize="3xl" mb="4">Project Detail</Heading>
          <p>{rates} rating</p>
        </Box>
      </Center>
    </Container>
  )
}

export default ProjectDetail;