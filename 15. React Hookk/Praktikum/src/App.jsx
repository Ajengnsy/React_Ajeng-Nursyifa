// src/App.jsx
import React, { useState } from "react";
import CreateProduct from "./CreateProduct";
const App = () => {
  const [activeButton, setActiveButton] = useState("Home");

  return (
    <div className="font-sans">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <h1 className="text-xl font-bold">Simple Header</h1>
          <div className="flex space-x-0">
            <button
              className={`py-2 px-4 rounded ${
                activeButton === "Home"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveButton("Home")}
            >
              Home
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeButton === "Features"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveButton("Features")}
            >
              Features
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeButton === "Pricing"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveButton("Pricing")}
            >
              Pricing
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeButton === "FAQs"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveButton("FAQs")}
            >
              FAQs
            </button>
            <button
              className={`py-2 px-4 rounded ${
                activeButton === "About"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveButton("About")}
            >
              About
            </button>
          </div>
        </div>
      </nav>
      <CreateProduct />
    </div>
  );
};

export default App;
