import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
      <Link to="/home">Home</Link>
    </li>

      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/recipe">Recipe</Link>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">Rasavilas</a> */}
        <ul>
          <li className="btn btn-ghost text-xl">
            <Link to="/home">Rasavilas</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      {/* <div className="navbar-end -z-1">
        <ul className="flex gap-4">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden"
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
        </label>
        <div className="">
          <ul className="flex gap-4">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
