import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" container flex justify-around px-20">
        <div className="max-w-lg mt-36">
          <h1 className="font-black text-5xl">
            Let's Explore <br /> The Un-Explored{" "}
          </h1>
          <p className="pt-8 text-xl text-gray-500">
            Welcome to our travel vlog website, where we take you on exciting
            journeys to exotic destinations around the world. Experience the
            beauty of nature, discover new cultures, taste delicious cuisine,
            and indulge in thrilling adventures. Join us on our travels and let
            us inspire you to explore the world with us!
          </p>
          <div className="mt-10">
            <a
              href="https://youtu.be/xWUT6zA7ZGU"
              className="text-lgfont-bold bg-violet-600 px-6 py-2  text-yellow-300 rounded-md hover:bg-violet-800 duration-300 hover:shadow-violet-400 hover:shadow-md"
            >
              Watch
              <i class="fa-regular fa-face-grin-hearts pl-2"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCz4xwsaV9dCbkC3CJO0xR4g"
              className="text-lg ml-6 font-bold bg-red-600 px-6 py-2 text-white-300 rounded-md duration-300 hover:shadow-black hover:shadow-md"
            >
              Subscribe
              <i class="fa-brands fa-youtube pl-2"></i>
            </a>
          </div>
        </div>
        <div>
          <img
            src="./icons/hero.png"
            alt="hero_image"
            className="w-[640px] h-[558px]"
          />
        </div>
      </div>
      <img
        src="./icons/travel.jpg"
        alt="tavel"
        className="px-32 my-36 rounded-xl"
      />
    </>
  );
};

export default Hero;
