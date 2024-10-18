// src/App.jsx
import React, { useState } from "react";
import CreateProduct from "./Components/CreateProduct";
import ListProduct from "./Components/ListProduct";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto mt-10 px-4">
      <CreateProduct />
      <ListProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default App;
