import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegLottie from "../components/lootie/RegLottie";

const Register = () => {
  const { handleSignUp, handleSignOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password validation regex
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Validate password
    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must contain at least 6 characters, including an uppercase and a lowercase letter."
      );
      return;
    }

    // Call the signup method
    handleSignUp(email, password)
      .then((userCredential) => {
        setError("");
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <section className="bg-gray-100 py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="container mx-auto px-6 max-w-sm">
        {/* Register Title */}
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Create an Account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
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
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-semibold text-gray-700"
            >
              Photo URL (Optional)
            </label>
            <input
              type="url"
              name="photoURL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Please log in
          </Link>
        </p>
      </div>

      <div>
        <RegLottie />
      </div>
    </section>
  );
};

export default Register;
