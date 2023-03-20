import { Link as ReactLink } from 'react-router-dom';
import { Container, Box, Flex, Heading, Spacer, Button, Link } from '@chakra-ui/react';
import { ethers } from 'ethers';

import ProjectReputation from "../../artifacts/contracts/ProjectReputation.sol/ProjectReputation.json";

const SCROLL_CONTRACT_ADDRESS = "0xFda2FCAB7c8c2FDB3Ef69C37Ee94f1e7A94f0eD3";

function Navbar({ ethAddress, setETHAddress, setContractDPR }) {
  const connectMetamask = async () => {
    try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setETHAddress(accounts[0]);
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(SCROLL_CONTRACT_ADDRESS, ProjectReputation.abi, signer);
      console.log(contract);
      setContractDPR(contract);

    } catch(error) {
      console.error(error);
    }
   
  }
  
  return (
    <Box p={2}>
      <Container maxW='1000px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box mr="4">
            <Link as={ReactLink} to="/">
              <Heading color="green" mt="3" mb="5">Project Reputation</Heading>
            </Link>
          </Box>
          <Link as={ReactLink} to="/">Home</Link>
          <Link as={ReactLink} to="/add-project">Add Project</Link>
          <Link as={ReactLink} to="/test">Test</Link>
          <Spacer />
          <Button onClick={connectMetamask}>
            {ethAddress ? ethAddress.slice(0, 5) + "..." + ethAddress.slice(37, 42) : 'Connect Wallet'}
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;