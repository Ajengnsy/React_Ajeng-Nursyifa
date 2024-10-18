// src/Components/ListProduct.jsx
import React, { useState } from "react";
import useStore from "../store";

const ListProduct = () => {
  const { products, addProduct, editProduct, deleteProduct } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [productToEdit, setProductToEdit] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [fileName, setFileName] = useState("Tidak ada file");
  const [errors, setErrors] = useState({});

  const handleEdit = (product) => {
    setProductToEdit(product);
    setProductName(product.productName);
    setProductCategory(product.productCategory);
    setProductFreshness(product.productFreshness);
    setProductPrice(product.productPrice);
    setFileName(product.image);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setProductToEdit(null);
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setFileName("Tidak ada file");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z0-9\s]{6,50}$/; // Alphanumeric and spaces, 6-50 characters
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Positive numbers with optional decimal

    if (!nameRegex.test(productName)) {
      newErrors.productName =
        "Product name must be 6-50 characters long and can only contain letters, numbers, and spaces.";
    }

    if (!productCategory) {
      newErrors.productCategory = "Product category is required.";
    }

    if (!fileName || fileName === "Tidak ada file") {
      newErrors.fileName = "Image is required.";
    }

    if (!productFreshness) {
      newErrors.productFreshness = "Product freshness is required.";
    }

    if (!productPrice || !priceRegex.test(productPrice)) {
      newErrors.productPrice = "Product price must be a positive number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const newProduct = {
      id: productToEdit ? productToEdit.id : Date.now().toString(), // Use existing ID for editing
      productName,
      productCategory,
      productFreshness,
      productPrice,
      image: fileName,
      additionalDescription: "", // Add additional description if needed
    };

    if (productToEdit) {
      editProduct(newProduct); // Call the edit function from the store
    } else {
      addProduct(newProduct); // Call the add function from the store
    }

    resetForm();
    handleCloseForm(); // Close the form after submission
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">List Product</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Product Name"
          className="border border-gray-300 rounded-md p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsFormOpen(true)}
        >
          Add Product
        </button>
      </div>

      {isFormOpen && (
        <form
          id="createProductForm"
          className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Product Category"
            required
          />
          <input
            type="text"
            value={productFreshness}
            onChange={(e) => setProductFreshness(e.target.value)}
            placeholder="Product Freshness"
            required
          />
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Product Price"
            required
          />
          <input
            type="file"
            onChange={(e) =>
              setFileName(e.target.files[0]?.name || "Tidak ada file")
            }
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            {productToEdit ? "Update Product" : "Add Product"}
          </button>
          <button
            type="button"
            onClick={handleCloseForm}
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Close
          </button>
        </form>
      )}

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Product Category</th>
            <th className="py-2 px-4 border-b">Image of Product</th>
            <th className="py-2 px-4 border-b">Product Freshness</th>
            <th className="py-2 px-4 border-b">Product Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{product.productName}</td>
                <td className="py-2 px-4 border-b">
                  {product.productCategory}
                </td>
                <td className="py-2 px-4 border-b">{product.image}</td>
                <td className="py-2 px-4 border-b">
                  {product.productFreshness}
                </td>
                <td className="py-2 px-4 border-b">{product.productPrice}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-2 px-4 border-b text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
