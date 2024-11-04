// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Use Routes instead of Switch
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WelcomeSection />
                <AboutUs />
                <ContactUs />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        </Link>
        <span className="text-1xl font-bold">Ajeng</span>
        <nav className="ml-auto flex items-center">
          <Link to="/" className="mx-4 hover:underline">
            Home
          </Link>
          <Link to="/products" className="mx-4 hover:underline">
            Products
          </Link>
          <Link to="/about" className="mx-4 hover:underline">
            About
          </Link>
          <Link to="/contacts" className="mx-4 hover:underline">
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};

const WelcomeSection = () => {
  return (
    <section className="container mx-auto p-5 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Quality Makeup & Skincare
      </h1>
      <p className="text-lg mb-4 text-gray-600">
        Your one-stop shop for the best makeup and skincare products.
      </p>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <img
          src="/Welcome.jpg"
          alt="Welcome"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default App;
