import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gne from "../images/gne.png";
import { useLocalStore, useStoreState } from "easy-peasy";

export const Navbar = () => {
  const [user, setUser] = useState("");
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user?.token) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const onLogOut = () => {
    localStorage.removeItem("user");
    setUser("");
    setIsModalOpen(false);
    window.location.href = "/";
  };
  return (
    <header className="text-gray-600 body-font shadow-md mt-12 md:mt-0">
      <div className=" mx-auto flex flex-wrap p-5 items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 "
        >
          <img className="gne-logo" src={gne}></img>

          <span className="md:ml-3 text-md md:text-xl">
            Genco 1969-73 Golden Jubilee
          </span>
        </Link>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden ml-auto p-2 rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isModalOpen && (
          <MobileNav
            onLogOut={onLogOut}
            user={user}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <nav className="hidden md:ml-auto md:flex md:flex-row gap-1 items-center text-base justify-center">
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

const MobileNav = ({ onLogOut, user, setIsModalOpen }) => {
  return (
    <>
      <div className="md:hidden bg-white h-screen w-full absolute top-0 left-0 z-50 flex items-center justify-center">
        <nav className=" text-2xl md:ml-auto flex flex-col gap-1 items-center justify-center">
          <Link
            to={"/"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/" ? "active-link" : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/branches"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/branches" ? "active-link" : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          >
            Branches
          </Link>
          <Link
            to={"/about"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/about" ? "active-link" : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          >
            Contact
          </Link>
          {!user?.token && (
            <Link
              to={"/register"}
              className={` py-2 px-4 hover:text-white hover:bg-indigo-600 rounded ${
                location.pathname === "/register" ? "active-link" : ""
              }`}
              onClick={() => setIsModalOpen(false)}
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
            onClick={() => setIsModalOpen(false)}
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
    </>
  );
};
