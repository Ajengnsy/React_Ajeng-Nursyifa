import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import LandingPage from "./Components/LandingPage";
import CreateProduct from "./Components/CreateProduct";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="mx-auto px-4 py-2 flex justify-between items-center">
            <div className="text-lg font-semibold">Simple Header</div>
            <div className="space-x-8">
              <Link
                to="/"
                className="text-white bg-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-800"
              >
                Home
              </Link>
              <Link
                to="/create-product"
                className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                Create Product
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <CreateProduct />
              </>
            }
          />
          <Route
            path="/create-product"
            element={
              <>
                <CreateProduct />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
