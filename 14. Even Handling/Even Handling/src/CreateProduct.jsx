import React, { useState } from "react";
import "./index.css";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [image, setImage] = useState(null);
  const [freshness, setFreshness] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");

  const handleProductNameChange = (e) => {
    const value = e.target.value;

    //  panjang karakter
    if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else if (value.length > 10) {
      setProductNameError("Product Name should not exceed 10 characters.");
    } else {
      setProductNameError(""); // Clear error if validation passes
    }

    setProductName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi saat submit
    if (productName === "") {
      alert("Please enter a valid product name.");
      return;
    }

    console.log({
      productName,
      productCategory,
      image,
      freshness,
      additionalDescription,
      productPrice,
    });

    // Reset form fields after submit
    setProductName("");
    setProductCategory("");
    setImage(null);
    setFreshness("");
    setAdditionalDescription("");
    setProductPrice("");
  };

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // angka random 0-99
    console.log("Random Number:", randomNumber);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-1">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
          {/* Display error message if there's any */}
          {productNameError && (
            <p className="text-red-500 text-sm mt-1">{productNameError}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-gray-700">
            Product Category
          </label>
          <select
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image of Product
          </label>
          <input
            type="file"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="mt-2">
            {image ? <span>{image.name}</span> : <span>No file chosen</span>}
          </div>
        </div>

        <fieldset className="mb-4">
          <legend className="block text-gray-700">Product Freshness</legend>
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="radio"
              name="freshness"
              id="brandNew"
              value="brandNew"
              checked={freshness === "brandNew"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label className="text-gray-700" htmlFor="brandNew">
              Brand New
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="radio"
              name="freshness"
              id="secondHand"
              value="secondHand"
              checked={freshness === "secondHand"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label className="text-gray-700" htmlFor="secondHand">
              Second Hand
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="radio"
              name="freshness"
              id="refurbished"
              value="refurbished"
              checked={freshness === "refurbished"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label className="text-gray-700" htmlFor="refurbished">
              Refurbished
            </label>
          </div>
        </fieldset>

        <div className="mb-4">
          <label
            htmlFor="additionalDescription"
            className="block text-gray-700"
          >
            Additional Description
          </label>
          <textarea
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="additionalDescription"
            value={additionalDescription}
            onChange={(e) => setAdditionalDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleRandomNumber} // Pastikan nama fungsi tidak typo
          className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Generate Random Number
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
