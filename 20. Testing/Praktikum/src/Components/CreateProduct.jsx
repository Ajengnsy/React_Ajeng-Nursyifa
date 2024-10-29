import React, { useState } from "react";

const CreateProduct = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName) {
      setError("All fields are required");
      return;
    }
    if (productName.length > 25) {
      setError("Product Name cannot exceed 25 characters");
      return;
    }
    if (/[^a-zA-Z0-9 ]/.test(productName)) {
      setError("Product Name cannot contain special characters");
      return;
    }
    setError("");
    addProduct(productName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productName">Product Name</label>
      <input
        id="productName"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProduct;
