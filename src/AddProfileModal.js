// AddProfileModal.js
import React, { useState } from "react";
import Modal from "react-modal";

const AddProfileModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState(false);

  const handleSave = async () => {
    if (!name || !url || !position || !location) {
      setValidationError("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch(
        "https://65b052f02f26c3f2139caf7a.mockapi.io/api/profile",
        {
          method: "POST",
          body: JSON.stringify({ name, url, position, location }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        setValidationError("Something went wrong. Please try again.");
        return;
      }
      setName("");
      setUrl("");
      setPosition("");
      setLocation("");
      onSave();
      onClose();
    } catch (err) {
      setValidationError("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Profile Modal"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Add Your Profile</h2>
        {validationError && (
          <h2 className="text-red-500 mb-4">{validationError}</h2>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            URL:
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Position:
          </label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location:
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="flex justify-center mt-20">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded w-1/2 md:w-1/6 mr-10"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="ml-2 text-gray-700 px-4 py-2 rounded bg-red-500 text-white w-1/2 md:w-1/6"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddProfileModal;
