import React, { useState } from "react";

const Login = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: "ajeng", password: "123" };
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      onSuccess();
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      onSuccess();
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96" // Set a fixed width for the form
        onSubmit={handleLogin}
      >
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-800 w-full"
        >
          Login
        </button>

        {errorMessage && (
          <p className="text-red-500 mt-6 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
