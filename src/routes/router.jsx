

import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../components/Home";
import LetsLearn from "../components/LetsLearn";
import LessionDetails from "../pages/LessionDetails";
import Login from "../pages/Login";
import register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import Tutorials from "../pages/Tutorials";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";
import About from "../components/AboutUs";
import Register from "../pages/Register";
import AuthLayout from "../pages/AuthLayout";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";
import AboutUs from "../components/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home></Home>, 
      },
      {
        path: "/lets-learn",
        element: <LetsLearn></LetsLearn>, 
      },
      {
        path: "/lesson/:id",
        element: (
          <ProtectedRoute>
            <LessionDetails />
          </ProtectedRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data.filter((item) => item.lesson_no == params.id);
        },
      },
      {
        path: "/tutorials",
        element: (
          <ProtectedRoute>
            <Tutorials />
          </ProtectedRoute>
        ),
      },
      {
        path: '/aboutUs',
        element: <AboutUs/>
      },
      {
        path: "/myProfile",
        element: (
          <MyProfile/>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
      {
        path: '/auth/forgotPassword',
        element: <ForgotPassword></ForgotPassword>
      }

    ],
  },
 
  
 
  
]);
