import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="shadow">

    <div className="navbar bg-base-100 max-w-300 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
         
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
          </ul>
        </div>
        
        <h2 className="text-xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a className="text-[#101727] font-semibold">Products</a>
          </li>
          <li>
            <a href="" className="text-[#101727] font-semibold">Features</a>
          </li>
          <li>
            <a className="text-[#101727] font-semibold">Pricing</a>
          </li>
          <li>
            <a className="text-[#101727] font-semibold">Testimonials</a>
          </li>
          <li>
            <a className="text-[#101727] font-semibold">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className=" flex justify-center items-center">
            <span className="text-2xl"><IoCartOutline /></span>
            <span className="mr-2 ml-3 font-semibold">Login</span>
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
