import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from './pages/Root.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './components/Home.jsx'
import LetsLearn from './components/LetsLearn.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Tutorials from './pages/Tutorials.jsx'
import AboutUs from './components/AboutUs.jsx'
import MyProfile from './pages/MyProfile.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import LessonDetails from './pages/LessionDetails.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
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
            <LessonDetails/>
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
          <ProtectedRoute>
            <MyProfile/>
          </ProtectedRoute>
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer/>
   </AuthProvider>
   
  </StrictMode>,
)
