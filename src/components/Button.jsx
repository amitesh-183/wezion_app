import React from "react";

const Button = ({ btnTitle }) => {
  return (
    <div className="flex justify-center">
      <button className="text-lg font-bold bg-violet-600 px-6  text-yellow-300 rounded-md hover:bg-violet-800 duration-300 hover:shadow-violet-400 hover:shadow-md">
        {btnTitle}
      </button>
    </div>
  );
};

export default Button;
