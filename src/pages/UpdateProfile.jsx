import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    
    const form= e.target
    const name = form.name.value 
    const photoURL = form.photoURL.value 
    console.log(name,photoURL)
    handleUpdateProfile(name, photoURL)
    navigate('/myProfile')
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-semibold text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
            //   value={photoURL}
            //   onChange={(e) => setPhotoURL(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Update Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Update Information
            </button>
          </div>
          <div className="flex items-end justify-end">
            <Link to={'/myProfile'}><button className="btn block bg-black text-white">Back</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
