import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const NavbarCom = () => {
  return (
    <div className="container flex justify-around">
      <div>
        <img src="./icons/logoh.png" alt="Wezion" className=" h-32" />
      </div>
      <div className="lg:flex gap-10 hidden py-16 uppercase text-gray-400">
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
        <Link to="/login">
          <Button btnTitle="LogIn" />
        </Link>
        <Link to="/signup">
          <Button btnTitle="SignUp" />
        </Link>
      </div>
    </div>
  );
};

export default NavbarCom;
