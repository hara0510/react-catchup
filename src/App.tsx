import { Button, ChakraProvider } from '@chakra-ui/react';
import "./styles.css";

const App = () => {
  return (
    <div>
      <ChakraProvider>
        <Button colorScheme='teal'>ボタン</Button>
      </ChakraProvider>
    </div>
  );
};

export default App;