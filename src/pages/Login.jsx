import React, { useContext, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import LoginLottie from "../components/lootie/LoginLottie";

const Login = () => {
  const { handleLogIn, handleGoogleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);


  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must contain at least 6 characters, including an uppercase and a lowercase letter."
      );
      return;
    }

    setLoading(true);

    handleLogIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Login failed: ${errorMessage}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const googleLogIn = () => {
    setLoading(true);
    handleGoogleLogin()
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-100 py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <LoginLottie />
      </div>
      <div className="container mx-auto px-6 max-w-sm">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Login to Your Account
        </h2>

        <form onSubmit={handleLoginForm} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
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

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
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

          <div className="text-right">
            <Link to="/auth/forgotPassword" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4">
          <button
            onClick={googleLogIn}
            className="w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 flex items-center justify-center"
          >
            Login with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <NavLink to="/auth/register" className="text-blue-600 hover:underline">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
