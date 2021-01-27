import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import customTheme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);
