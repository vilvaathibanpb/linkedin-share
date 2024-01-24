// App.js
import React, { useEffect, useState } from "react";
import AddProfileModal from "./AddProfileModal";
import ProfileList from "./ProfileList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    refreshProfiles();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const refreshProfiles = async () => {
    const response = await fetch("https://65b052f02f26c3f2139caf7a.mockapi.io/api/profile");
    const profiles = await response.json();
    setProfiles(profiles);
  }

  return (
    <div className="bg-purple-900 min-h-screen min-w-screen w-full h-full">
      <div className="container mx-auto p-8 flex justify-around items-center flex-col md:flex-row">
        <h1 className="text-4xl font-bold text-white">
          Young Talents Summit - Kinnevik
        </h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-10 md:mt-0"
        >
          Add Your Profile
        </button>
      </div>
      <div className="text-white md:p-32 p-8">
      <ProfileList profiles={profiles} />
      </div>
      <AddProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={refreshProfiles}
      />
    </div>
  );
};

export default App;
