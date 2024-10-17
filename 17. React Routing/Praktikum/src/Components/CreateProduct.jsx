import React, { useState } from "react";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const showModal = () => {
    alert("Product created!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      price: productPrice,
    };
    setProducts([...products, newProduct]);
    showModal();
    // Reset form fields
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
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
        isi formulir di bawah untuk membuat produk baru.
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
            <option value="category1">pilihan 1</option>
            <option value="category2">pilihan 2</option>
            <option value="category3">pilihan 3</option>
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

      {/* Product List */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">List Product</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Product Category
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Product Freshness
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Product Price
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {product.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.freshness}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                    Delete
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded-md">
                    Edit
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
