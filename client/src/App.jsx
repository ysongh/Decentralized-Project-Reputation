import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Navbar from './components/layout/Navbar';
import AddProject from './pages/AddProject';
import ProjectDetail from './pages/ProjectDetail';
import PolybaseTest from './pages/PolybaseTest';

function App() {
  const [ethAddress, setETHAddress] = useState('');
  const [contractDPR, setContractDPR] = useState(null);

  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar
          ethAddress={ethAddress}
          setETHAddress={setETHAddress}
          setContractDPR={setContractDPR} />
        <Routes>
          <Route
            path="/test"
            element={
              <PolybaseTest />} />
          <Route
            path="/project-detail"
            element={
              <ProjectDetail
                ethAddress={ethAddress}
                contractDPR={contractDPR} />} />
          <Route
            path="/add-project"
            element={
              <AddProject contractDPR={contractDPR} />} />
          <Route
            path="/"
            element={
              <h1>Home</h1>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
