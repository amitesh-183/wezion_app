import React from "react";
import Hero from "../components/Hero";
// import Partners from "../components/Partners.jsx";
import PreFooter from "./PreFooter.jsx";
import Heading from "../components/Heading";
// import GalleryScreen from "./GalleryScreen";
import VlogsScreen from "./VlogsScreen";
// import Gallery from "../components/Gallery";
// import Videos from "../components/Videos";
const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Heading title="Videos" />
      <VlogsScreen />
      {/* <Partners /> */}
      {/* <GalleryScreen /> */}
      {/* <Videos /> */}
      <PreFooter />
    </div>
  );
};

export default HomeScreen;
