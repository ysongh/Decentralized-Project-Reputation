import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Navbar from './components/layout/Navbar';
import PolybaseTest from './pages/PolybaseTest';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
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
