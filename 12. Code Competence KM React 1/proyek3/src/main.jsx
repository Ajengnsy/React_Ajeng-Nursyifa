import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Import the Tailwind CSS file
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
