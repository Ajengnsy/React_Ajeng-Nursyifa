// src/TipsList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

// URL MockAPI
const apiUrl = "https://67341711a042ab85d118d9fc.mockapi.io/Tips";

const TipsList = ({ isLoggedIn }) => {
  const [tips, setTips] = useState([]);
  const [editingTip, setEditingTip] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [newTipTitle, setNewTipTitle] = useState("");
  const [newTipDescription, setNewTipDescription] = useState("");

  // Fetch data dari MockAPI
  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTips(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTips();
  }, []);

  const handleEdit = (tip) => {
    setEditingTip(tip.id);
    setEditedTitle(tip.title);
    setEditedDescription(tip.description);
  };

  const handleSave = async (id) => {
    const updatedTip = {
      title: editedTitle,
      description: editedDescription,
    };
    try {
      await axios.put(`${apiUrl}/${id}`, updatedTip);
      setTips(
        tips.map((tip) => (tip.id === id ? { ...tip, ...updatedTip } : tip))
      );
      setEditingTip(null);
    } catch (error) {
      console.error("Error updating tip:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTips(tips.filter((tip) => tip.id !== id));
    } catch (error) {
      console.error("Error deleting tip:", error);
    }
  };

  const handleAddTip = async () => {
    const newTip = {
      title: newTipTitle,
      description: newTipDescription,
    };
    try {
      const response = await axios.post(apiUrl, newTip);
      setTips([...tips, response.data]);
      setNewTipTitle("");
      setNewTipDescription("");
    } catch (error) {
      console.error("Error adding tip:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-20 bg-green-50">
      <h2 className="text-3xl font-bold text-green-600 mb-8">
        Green Earth Tips
      </h2>

      {isLoggedIn && (
        <div className="mb-10 w-full max-w-lg">
          <h3 className="text-2xl font-semibold mb-4">Add a New Tips</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newTipTitle}
              onChange={(e) => setNewTipTitle(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newTipDescription}
              onChange={(e) => setNewTipDescription(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleAddTip}
              className="bg-green-500 text-white rounded-md px-6 py-2 hover:bg-green-600"
            >
              Add Tip
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full max-w-6xl items-start">
        {/* Gambar di sisi kiri */}
        <img
          src="/img/tree.png"
          alt="Tree"
          className="h-48 w-1/5 object-cover"
        />

        {/* Tabel Tips */}
        <div className="flex-grow mx-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-green-600 uppercase">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-green-600 uppercase">
                    Description
                  </th>
                  {isLoggedIn && (
                    <th className="px-4 py-3 text-right text-sm font-medium text-green-600 uppercase">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {tips.map((tip) => (
                  <tr
                    key={tip.id}
                    className="odd:bg-white even:bg-green-100 hover:bg-green-200"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-800">
                      {editingTip === tip.id ? (
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="border border-gray-300 rounded-md p-1"
                        />
                      ) : (
                        tip.title
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {editingTip === tip.id ? (
                        <input
                          type="text"
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          className="border border-gray-300 rounded-md p-1"
                        />
                      ) : (
                        tip.description
                      )}
                    </td>
                    {isLoggedIn && (
                      <td className="px-4 py-4 text-right text-sm font-medium space-x-2">
                        {editingTip === tip.id ? (
                          <button
                            onClick={() => handleSave(tip.id)}
                            className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(tip)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(tip.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gambar di sisi kanan */}
        <img
          src="/img/bumi1.jpg"
          alt="Earth"
          className="h-48 w-1/5 object-cover"
        />
      </div>

      <p className="mt-8 text-gray-600 text-center">
        Let's work together to make our planet greener!
      </p>
    </div>
  );
};

export default TipsList;
