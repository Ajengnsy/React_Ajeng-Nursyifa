import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import article from "./artikel/article.jsx"; // Adjust the path as necessary

console.log(article.title.id); // Outputs: "Buat Akun"
console.log(article.description.en); // Outputs: "Below is an example form built entirely with Bootstrap’s form controls..."

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
