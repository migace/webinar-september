import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./App";

export default function Root(props) {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
