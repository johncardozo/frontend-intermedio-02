import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

const root = document.getElementById("root");

createRoot(root).render(
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
