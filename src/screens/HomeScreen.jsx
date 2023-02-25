import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners.jsx";
import PreFooter from "./PreFooter.jsx";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";
const HomeScreen = () => {
  return (
    <div>
      <Hero />
      {/* <Partners />
      <Gallery />
      <Videos /> */}
      <PreFooter />
    </div>
  );
};

export default HomeScreen;
