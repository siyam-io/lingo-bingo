import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleForgotPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address!");
      return;
    }

    handleForgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
          navigate("/auth/login");
        }, 3000);
      })
      .catch((error) => {
        toast.error(`Failed to send reset email: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow rounded-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="text-center mt-4">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
