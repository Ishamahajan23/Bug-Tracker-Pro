import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
     
     <App />

     </Provider>
    </BrowserRouter>
   
  </StrictMode>
);
