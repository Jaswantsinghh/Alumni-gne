import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gne from "../images/gne.png";
import { useLocalStore, useStoreState } from "easy-peasy";

export const Navbar = () => {
  const [user, setUser] = useState("");
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!user?.token) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const onLogOut = () => {
    localStorage.removeItem("user");
    setUser("");
    window.location.href = "/";
  };
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
        >
          <img className="gne-logo" src={gne}></img>

          <span className="ml-3 text-xl">Genco 1969-73 Golden Jubilee</span>
        </Link>
        <nav className="md:ml-auto flex gap-1 items-center text-base justify-center">
          <Link
            to={"/"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/" ? "active-link" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to={"/branches"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/branches" ? "active-link" : ""
            }`}
          >
            Branches
          </Link>
          <Link
            to={"/about"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/about" ? "active-link" : ""
            }`}
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
          >
            Contact
          </Link>
          {!user?.token && (
            <Link
              to={"/register"}
              className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
                location.pathname === "/register" ? "active-link" : ""
              }`}
            >
              Register
            </Link>
          )}
          <Link
            to={user?.token ? "/profile" : "/login"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/profile"
                ? "active-link"
                : location.pathname === "/login"
                ? "active-link"
                : ""
            }`}
          >
            {user?.token ? "Profile" : "Login"}
          </Link>

          {user?.token && (
            <button
              onClick={onLogOut}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              ></svg>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
