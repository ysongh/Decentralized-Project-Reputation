import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Navbar from './components/layout/Navbar';
import PolybaseTest from './pages/PolybaseTest';

function App() {
  const [ethAddress, setETHAddress] = useState('');

  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar
          ethAddress={ethAddress}
          setETHAddress={setETHAddress} />
        <Routes>
          <Route
            path="/test"
            element={
              <PolybaseTest />} />
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
