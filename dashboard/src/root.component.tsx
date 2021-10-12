import { ChakraProvider } from "@chakra-ui/react";

import { Dashboard } from "./components/Dashboard";

export default function Root(props) {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}
