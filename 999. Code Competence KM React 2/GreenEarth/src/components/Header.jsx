// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showLogin, setShowLogin] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Logout action
      setIsLoggedIn(false);
    } else {
      // Show login form
      setShowLogin(true);
    }
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-50">
      <img src="/img/logo.png" alt="Logo" className="h-12 w-auto" />

      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6">
          <Link
            to="/"
            className={`text-lg ${
              activeLink === "Home" ? "text-green-500" : "text-gray-800"
            }`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-lg ${
              activeLink === "About" ? "text-green-500" : "text-gray-800"
            }`}
            onClick={() => handleLinkClick("About")}
          >
            About
          </Link>

          <Link
            to="/tips"
            className={`text-lg ${
              activeLink === "Tips" ? "text-green-500" : "text-gray-800"
            }`}
            onClick={() => handleLinkClick("Tips")}
          >
            Tips
          </Link>

          <Link
            to="/chat-bot"
            className={`text-lg ${
              activeLink === "Chat Bot" ? "text-green-500" : "text-gray-800"
            }`}
            onClick={() => handleLinkClick("Chat Bot")}
          >
            Chat Bot
          </Link>
        </nav>

        <button
          onClick={handleLoginClick}
          className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {showLogin && !isLoggedIn && <Login onSuccess={handleSuccessfulLogin} />}
    </header>
  );
};

export default Header;
