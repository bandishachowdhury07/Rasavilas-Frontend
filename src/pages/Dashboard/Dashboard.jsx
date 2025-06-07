import React from "react";
import { Link, Outlet } from "react-router-dom";
import sidebannar from "../../assets/images/sidebannar.jpeg";
import image1 from "../../assets/images/image1.png";
import Recipe from "./Recipe/Recipe";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col  ">
        {/* Page content here */}
        <div className=" rounded-md ml-3 mt-5 bg-orange-500">
          <div className=" ">
            <div className="">
              <h1 className="text-3xl font-bold text-center py-6">
                Welcome to your Dashboard
              </h1>
              <div className="flex justify-between items-center text-center ml-3 ">
                <div>
                  <h2 className="text-white text-2xl">Total Recipe Found</h2>
                  <h4 className="text-white text-4xl font-bold py-3">09</h4>
                </div>
                <div>
                  <h2 className="text-white text-2xl">Ingredients Submitted</h2>
                  <h4 className="text-white text-4xl font-bold py-3">142</h4>
                </div>
                <div>
                  <img className="w-64	" src={image1} alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Recipe></Recipe>
        </div>
        <Outlet></Outlet>
        {/* button place  */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          style={{
            background: `url(${sidebannar})`,
            backgroundPosition: "button",
            backgroundRepeat: "no-repeat",
          }}
          className="menu p-4 w-80 min-h-full  text-base-content"
        >
          {/* Sidebar content here */}
          <li>
            <Link className="text-white text-xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl" to="/dashboard/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl" to="/dashboard/history">
              History
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl" to="/dashboard/gethelp">
              Get Help
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl" to="/dashboard/setting">
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
