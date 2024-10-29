import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [message, setMessage] = useState("");

  const showModal = () => {
    alert("Product created!");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      price: productPrice,
    };

    try {
      const response = await axios.post(
        "https://67204f1ae7a5792f05310cd2.mockapi.io/products",
        newProduct
      );
      setMessage("Product created successfully!");
      showModal();

      // Reset form fields
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to create product.");
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex justify-center items-center">
        <i className="fa-brands fa-bootstrap text-purple-500 text-4xl"></i>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Create Product
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Isi formulir di bawah untuk membuat produk baru.
      </p>

      <form
        id="createProductForm"
        className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-8 col-span-1">
          <label
            htmlFor="productName"
            className="block text-gray-700 font-medium mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm focus:border-blue-500"
            minLength="6"
            maxLength="50"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="mb-8 col-span-2">
          <label
            htmlFor="productCategory"
            className="block text-gray-700 font-medium mb-2"
          >
            Product Category
          </label>
          <select
            id="productCategory"
            className="form-select mt-1 block w-1/2 border border-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500"
            required
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option value="category1">Pilihan 1</option>
            <option value="category2">Pilihan 2</option>
            <option value="category3">Pilihan 3</option>
          </select>
        </div>

        <div className="mb-8 col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Product Freshness
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="freshness"
              id="brandNew"
              value="brand-new"
              className="form-radio text-blue-500"
              required
              onChange={(e) => setProductFreshness(e.target.value)}
            />
            <label htmlFor="brandNew" className="ml-2 text-gray-700">
              Brand New
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="freshness"
              id="secondHand"
              value="second-hand"
              className="form-radio text-blue-500"
              required
              onChange={(e) => setProductFreshness(e.target.value)}
            />
            <label htmlFor="secondHand" className="ml-2 text-gray-700">
              Second Hand
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="freshness"
              id="refurbished"
              value="refurbished"
              className="form-radio text-blue-500"
              required
              onChange={(e) => setProductFreshness(e.target.value)}
            />
            <label htmlFor="refurbished" className="ml-2 text-gray-700">
              Refurbished
            </label>
          </div>
        </div>

        <div className="mb-6 col-span-1">
          <label
            htmlFor="productPrice"
            className="block text-gray-700 font-medium mb-2"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            className="form-input mt-1 block w-full border border-1 border-gray-500 rounded-md shadow-sm focus:border-blue-500"
            required
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {message && <p className="text-center text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default CreateProduct;
