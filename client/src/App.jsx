import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import PolybaseTest from './pages/PolybaseTest';

function App() {
  return (
    <ChakraProvider>
      <PolybaseTest />
    </ChakraProvider>
  )
}

export default App;
