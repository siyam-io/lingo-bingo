import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  console.log(user);

  const singOut = () =>{
    handleSignOut()
    .then(()=>{
      toast.success('log out successfull.')
    })
  }


  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/lets-learn"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Start Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tutorials"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/aboutUs"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          Lingo Bingo
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ??
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/myProfile"}>
                  <p className="justify-between">Profile</p>
                </Link>
              </li>
              <li>
                <Link to={"/update-profile"}>
                  <p>Settings</p>
                </Link>
              </li>
              <li>
                <button onClick={()=>singOut()}>
                  <p>Logout</p>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
