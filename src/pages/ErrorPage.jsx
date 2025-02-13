import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Illustration */}
        <div className="mt-8">
          <img 
            src="https://i.ibb.co.com/L1fx5X3/1.webp" 
            alt="Error Illustration" 
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Button to Redirect */}
        <div className="my-8">
          <button 
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
