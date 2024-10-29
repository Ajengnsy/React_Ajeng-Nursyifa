import React, { useState } from "react";
import CreateProduct from "./CreateProduct";
import ListProduct from "./ListProduct";
import Login from "./Login";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Logout
          </button>
          <CreateProduct addProduct={addProduct} />
          <ListProduct products={products} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
