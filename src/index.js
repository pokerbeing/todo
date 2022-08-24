
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
