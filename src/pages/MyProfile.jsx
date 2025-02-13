import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const MyProfile = () => {
  const { user } = useContext(AuthContext); 
  const [currentUser, setCurrentUser] = useState(user);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(user);
  }, [user]); 
  const handleUpdateProfile = () => {
    navigate("/update-profile"); 
  };

  if (!currentUser) {
    return <Loading/>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          Welcome, {currentUser?.displayName || "User"}!
        </h2>
        <div className="text-center">
          <img
            src={currentUser?.photoURL || "/default-avatar.png"} 
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2"
          />
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {currentUser?.email || "No email available"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Name:</strong> {currentUser?.displayName || "No name available"}
          </p>

          <button 
            onClick={handleUpdateProfile} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
