import React from "react";
import Hero from "./component/hero";
import ImageCarousel from "./component/featured-product";
import Midsection from "./component/midsection";
import Slides from "./component/slides";

const File = () => {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <Midsection />
      <Slides/>
    </>
  );
};

export default File;
