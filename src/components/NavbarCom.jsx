import React from "react";
import { Link } from "react-router-dom";

const NavbarCom = () => {
  return (
    <div className="container flex justify-around">
      <div>
        <img src="./icons/logoh.png" alt="Wezion" className=" h-32" />
      </div>
      <div className="flex gap-10 py-16 uppercase text-gray-400">
        <Link className="hover:text-yellow-300 duration-300 font-bold text-lg">
          Home
        </Link>
        <Link className="hover:text-yellow-300 duration-300 font-bold text-lg">
          Blogs
        </Link>
        <Link className="hover:text-yellow-300 duration-300 font-bold text-lg">
          Travel
        </Link>
        <Link className="hover:text-yellow-300 duration-300 font-bold text-lg">
          About
        </Link>
        <Link className="hover:text-yellow-300 duration-300 font-bold text-lg">
          Contact
        </Link>
      </div>
      <div className="py-16 flex gap-2">
        <button className="text-lg font-bold bg-violet-600 px-6  text-yellow-300 rounded-md hover:bg-violet-800 duration-300 hover:shadow-violet-400 hover:shadow-md">
          LogIn
        </button>
        <button className="text-lg font-semibold bg-violet-500 px-6 text-yellow-300 rounded-md hover:bg-violet-600 duration-300 hover:shadow-violet-400 hover:shadow-md">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default NavbarCom;
