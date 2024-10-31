import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://67204f1ae7a5792f05310cd2.mockapi.io/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdate = async (product) => {
    try {
      const response = await axios.put(
        `https://67204f1ae7a5792f05310cd2.mockapi.io/products/${product.id}`,
        product
      );
      setMessage("Product updated successfully!");
      setEditProduct(null);
      const updatedProducts = products.map((p) =>
        p.id === product.id ? response.data : p
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Failed to update product.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://67204f1ae7a5792f05310cd2.mockapi.io/products/${id}`
      );
      setMessage("Product deleted successfully!");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      setMessage("Failed to delete product.");
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">List Product</h2>
      {message && <p>{message}</p>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Product Category</th>
            <th className="border px-4 py-2">Product Freshness</th>
            <th className="border px-4 py-2">Product Price</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.freshness}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 ml-2"
                  onClick={() => setEditProduct(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProduct && (
        <div>
          <h3>Edit Product</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editProduct);
            }}
          >
            <input
              type="text"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editProduct.freshness}
              onChange={(e) =>
                setEditProduct({ ...editProduct, freshness: e.target.value })
              }
              required
            />
            <input
              type="number"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
              required
            />
            <button type="submit">Update Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
