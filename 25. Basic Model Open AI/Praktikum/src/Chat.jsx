// src/Chat.jsx

import React, { useState } from "react";
import generateContent from "./GoogleGenerativeAi";
import { data } from "./DataHarga"; // Adjust the path as necessary

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "ai",
      text: "Hello! kamu dapat menanyakan kepada saya tentang harga pasar yaa!!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Store the prices in memory
  const pricesMemory = data.hargaPasar;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const newChatHistory = [
      ...chatHistory,
      { sender: "user", text: userInput },
    ];
    setChatHistory(newChatHistory);

    // Normalize user input to lower case for easier matching
    const normalizedInput = userInput.toLowerCase();

    // Check if the user input is asking for the price of an item
    let aiResponse;

    if (normalizedInput.includes("berapa harga cabai")) {
      aiResponse = `Harga Cabai adalah ${pricesMemory.cabai.harga} ${pricesMemory.cabai.satuan}.`;
    } else if (normalizedInput.includes("berapa harga seblak")) {
      aiResponse = `Harga Seblak adalah ${pricesMemory.seblak.harga} ${pricesMemory.seblak.satuan}.`;
    } else if (normalizedInput.includes("berapa harga geprek")) {
      aiResponse = `Harga Geprek adalah ${pricesMemory.geprek.harga} ${pricesMemory.geprek.satuan}.`;
    } else if (normalizedInput.includes("berapa harga telur")) {
      aiResponse = `Harga Telur adalah ${pricesMemory.telur.harga} ${pricesMemory.telur.satuan}.`;
    } else if (normalizedInput.includes("berapa harga beras")) {
      aiResponse = `Harga Beras adalah ${pricesMemory.beras.harga} ${pricesMemory.beras.satuan}.`;
    } else {
      aiResponse = await generateContent(userInput);
    }

    if (aiResponse) {
      setChatHistory([...newChatHistory, { sender: "ai", text: aiResponse }]);
    } else {
      setChatHistory([
        ...newChatHistory,
        { sender: "ai", text: "Error: Unable to get response." },
      ]);
    }

    setUserInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Chat with AI</h1>
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`font-semibold ${
                message.sender === "user" ? "text-blue-600" : "text-green-600"
              }`}
            >
              {message.sender === "user" ? "You" : "AI"}:
            </span>
            <span className="ml-2">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here..."
          required
          className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
