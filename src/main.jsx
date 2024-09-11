import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Index from "./Index";
import { ThemeProvider } from "./Context/Context";
ReactDOM.createRoot(document.getElementById("root")).render( 
  <>
   <ThemeProvider>
   <Index/>
   </ThemeProvider>
  </>
);