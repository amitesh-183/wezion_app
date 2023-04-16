import React from "react";
const Hero = () => {
  return (
    <>
      <div className=" container flex justify-around lg:flex-row flex-col-reverse lg:px-20 px-6">
        <div className="max-w-lg lg:mt-36 mt-8">
          <h1 className="font-black lg:text-5xl lg:text-left text-3xl text-center">
            Let's Explore <br /> The Un-Explored{" "}
          </h1>
          <p className="lg:pt-8 py-4 lg:text-xl text-lg text-gray-500">
            Welcome to our travel vlog website, where we take you on exciting
            journeys to exotic destinations around the world. Experience the
            beauty of nature, discover new cultures, taste delicious cuisine,
            and indulge in thrilling adventures. Join us on our travels and let
            us inspire you to explore the world with us!
          </p>
          <div className="lg:mt-10 flex justify-center lg:justify-start">
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
          {/* Socials */}
          <div className="py-8 flex justify-center lg:gap-6 gap-2 lg:justify-start">
            <a href="/">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
            <a href="/">
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
          </div>
        </div>
        <div>
          <img
            src="./icons/hero.png"
            alt="hero_image"
            className="lg:w-[640px] lg:h-[558px] h-[350px] w-[500px]"
          />
        </div>
      </div>
      <img
        src="./icons/travel.jpg"
        alt="tavel"
        className="lg:px-32 px-4 lg:my-32 rounded-xl"
      />
    </>
  );
};

export default Hero;
