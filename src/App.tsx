import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme"

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Button colorScheme='teal'>ボタン</Button>
        <p>あああああ</p>
      </ChakraProvider>
    </div>
  );
};

export default App;