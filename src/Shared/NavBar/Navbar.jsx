import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
      <Link to="/home">Home</Link>
    </li>

      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/recipe">Recipe</Link>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <ul>
          <li className="btn btn-ghost text-xl">
            <Link to="/home">Rasavilas</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-secondary drawer-button">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 left-auto"
          >
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
