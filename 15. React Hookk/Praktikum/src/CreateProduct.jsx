import React, { useState, useEffect } from "react";
import "./index.css";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [image, setImage] = useState(null);
  const [freshness, setFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [products, setProducts] = useState([]); // State to hold the list of products

  // useEffect untuk alert "Welcome"
  useEffect(() => {
    alert("Welcome");
  }, []);

  const handleProductNameChange = (e) => {
    const value = e.target.value;

    //  panjang karakter
    if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else if (value.length > 10) {
      setProductNameError("Product Name should not exceed 10 characters.");
    } else {
      setProductNameError("");
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

    // Create a new product object
    const newProduct = {
      id: products.length + 1,
      productName,
      productCategory,
      freshness,
      productPrice,
    };

    // Add the new product to the products list
    setProducts([...products, newProduct]);

    // Clear the form fields
    setProductName("");
    setProductCategory("");
    setImage(null);
    setFreshness("");
    setProductPrice("");
  };

  const handleDelete = (id) => {
    // Confirm deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      // Filter out the product to be deleted
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-1">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
          {productNameError && (
            <p className="text-red-500 text-sm mt-1">{productNameError}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-gray-700">
            Product Category
          </label>
          <select
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              type="radio"
              id="fresh"
              name="freshness"
              value="Fresh"
              checked={freshness === "Fresh"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label htmlFor="fresh" className="ml-2">
              Fresh
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="medium"
              name="freshness"
              value="Medium"
              checked={freshness === "Medium"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label htmlFor="medium" className="ml-2">
              Medium
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="old"
              name="freshness"
              value="Old"
              checked={freshness === "Old"}
              onChange={(e) => setFreshness(e.target.value)}
            />
            <label htmlFor="old" className="ml-2">
              Old
            </label>
          </div>
        </fieldset>

        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600"
        >
          Add Product
        </button>
      </form>

      {/* Table to display products */}
      <h2 className="text-2xl font-bold mt-6 text-center">Product List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full mt-4 border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-bold">No</th>
              <th className="border border-gray-300 px-4 py-2 font-bold">
                Product Name
              </th>
              <th className="border border-gray-300 px-4 py-2 font-bold">
                Product Category
              </th>
              <th className="border border-gray-300 px-4 py-2 font-bold">
                Product Freshness
              </th>
              <th className="border border-gray-300 px-4 py-2 font-bold">
                Product Price
              </th>
              <th className="border border-gray-300 px-4 py-2 font-bold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {product.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.productName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.productCategory}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.freshness}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.productPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateProduct;
