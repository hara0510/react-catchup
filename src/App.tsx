import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom"

import theme from "./theme/theme"
import { Router } from './router/Router';

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
};

export default App;