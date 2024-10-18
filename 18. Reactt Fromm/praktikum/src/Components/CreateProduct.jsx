import React, { useState } from "react";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [fileName, setFileName] = useState("Tidak ada file");
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const showModal = () => {
    alert("Product created!");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "Tidak ada file");
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z0-9\s]{6,50}$/;
    const priceRegex = /^\d+(\.\d{1,2})?$/;

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
      id: products.length + 1,
      name: productName,
      category: productCategory,
      freshness: productFreshness,
      price: productPrice,
      image: fileName, // Add image name to the product
    };
    setProducts([...products, newProduct]);
    showModal();

    // Reset form fields
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setFileName("Tidak ada file");
    setErrors({});
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-semibold">Simple header</div>
          <div className="space-x-8">
            <a
              href="#"
              className="text-white bg-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              Features
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              About
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-10 px-4">
        <div className="flex justify-center items-center">
          <i className="fa-brands fa-bootstrap text-purple-500 text-4xl"></i>
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Detail Product
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
              className={`form-input mt-1 block w-full border ${
                errors.productName ? "border-red-500" : "border-gray-500"
              } rounded-md shadow-sm focus:border-blue-500`}
              minLength="6"
              maxLength="50"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            {errors.productName && (
              <div className="text-red-500 text-sm">{errors.productName}</div>
            )}
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
              className={`form-select mt-1 block w-1/2 border ${
                errors.productCategory ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:border-blue-500`}
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="category1">pilihan 1</option>
              <option value="category2">pilihan 2</option>
              <option value="category3">pilihan 3</option>
            </select>
            {errors.productCategory && (
              <div className="text-red-500 text-sm">
                {errors.productCategory}
              </div>
            )}
          </div>

          {/* Image of Product Section */}
          <div className="mb-6 col-span-2">
            <label
              htmlFor="productImage"
              className="block text-gray-700 font-medium mb-2"
            >
              Image of Product
            </label>
            <div className="relative w-full">
              <input
                type="file"
                id="productImage"
                className="absolute top-0 left-0 opacity-0 w-full h-full z-50 cursor-pointer"
                onChange={handleFileChange}
                required
              />
              <div className="flex">
                <label
                  htmlFor="productImage"
                  className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-l-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Choose File
                </label>
                <span
                  id="fileName"
                  className="bg-white border border-gray-300 px-4 py-2 text-gray-700 rounded-r-md flex-grow"
                >
                  {fileName}
                </span>
              </div>
            </div>
            {errors.fileName && (
              <div className="text-red-500 text-sm">{errors.fileName}</div>
            )}
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
                onChange={(e) => setProductFreshness(e.target.value)}
                required
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
                onChange={(e) => setProductFreshness(e.target.value)}
                required
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
                onChange={(e) => setProductFreshness(e.target.value)}
                required
              />
              <label htmlFor="refurbished" className="ml-2 text-gray-700">
                Refurbished
              </label>
            </div>
            {errors.productFreshness && (
              <div className="text-red-500 text-sm">
                {errors.productFreshness}
              </div>
            )}
          </div>

          <div className="mb-6 col-span-2">
            <label
              htmlFor="additionalDescription"
              className="block text-gray-700 font-medium mb-2"
            >
              Additional Description
            </label>
            <textarea
              id="additionalDescription"
              rows="4"
              className="form-textarea mt-1 block w-full border border-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
            {errors.additionalDescription && (
              <div className="text-red-500 text-sm">
                {errors.additionalDescription}
              </div>
            )}
          </div>

          <div className="mb-6 col-span-1">
            <label
              htmlFor="productPrice"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Price
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 text-gray-500 bg-gray-200 border-r border-gray-300 rounded-l-md">
                $
              </span>
              <input
                type="number"
                id="productPrice"
                defaultValue="1"
                min="1"
                className={`form-input flex-1 block border-1 rounded-r-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.productPrice ? "border-red-500" : "border-gray-300"
                }`}
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            {errors.productPrice && (
              <div className="text-red-500 text-sm">{errors.productPrice}</div>
            )}
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Product List Table */}
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
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Product Category</th>
                <th className="py-2 px-4 border-b">Image of Product</th>
                <th className="py-2 px-4 border-b">Product Freshness</th>
                <th className="py-2 px-4 border-b">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                    <td className="py-2 px-4 border-b">{product.image}</td>
                    <td className="py-2 px-4 border-b">{product.freshness}</td>
                    <td className="py-2 px-4 border-b">{product.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 border-b text-center">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
