import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-50 rounded-t-lg shadow-lg p-8 w-full">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Green Earth</h2>
          <p className="mb-4">
            Explore tips and solutions to help protect our planet.🌿
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 transition duration-200">
              Sign me up
            </button>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100008788781685"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ajengnsyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Green Earth Initiatives</h3>
          <h4 className="text-md font-semibold">
            Preserve Our Planet for Future Generations
          </h4>
          <p className="mt-2">
            We provide a wide range of eco-friendly tips and sustainable
            solutions to help you make a positive impact on the environment.
            Join us in creating a greener, cleaner Earth today! 🌍
          </p>
          <a
            href="#"
            className="text-green-500 mt-2 inline-block hover:underline"
          >
            Learn About Me
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/6">
          <h3 className="text-lg font-bold">Green Earth Hub</h3>
          <p>Bandar Lampung, Kedaton Next to Mall Boemi Kedaton</p>
          <p className="mt-2">
            Contact us via WhatsApp or call: 089523088851 📞
          </p>
          <button className="bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600 transition duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
