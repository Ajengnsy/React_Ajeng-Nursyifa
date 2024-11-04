// src/ContactUs.jsx

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        Need to get in touch with us? Either fill out the form with your inquiry
        or find the department email you'd like to contact below.
      </p>
      <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="join-button py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div
          id="submittedData"
          className="mt-6 p-4 border border-gray-300 rounded-md"
        >
          <h3 className="font-bold">Submitted Data:</h3>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
