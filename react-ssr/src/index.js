import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");

hydrate(
 <React.StrictMode>
  <Router>
   <App />
  </Router>
 </React.StrictMode>,
 root
);
