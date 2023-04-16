import React from "react";
// import { Link } from "react-router-dom";
import data from "../data/data.json";
import Button from "../components/Button";

const VlogsScreen = () => {
  return (
    <div className="flex justify-around lg:flex-row flex-col lg:px-28 px-16">
      {data.videos.map((item, index) => (
        <div
          key={index}
          className="pb-4 my-8 hover:shadow-md hover:shadow-black rounded-2xl duration-500"
        >
          <img
            className="h-64 w-96 border-4 rounded-xl"
            src={item.image}
            alt=""
          />
          <h3 className="text-center font-bold text-lg py-2">{item.title}</h3>
          <a href={item.link}>
            <Button
              className="flex mx-auto justify-center"
              btnTitle="Watch Now"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default VlogsScreen;
