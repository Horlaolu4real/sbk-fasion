import React from "react";
import Navbar from "../prod/component/navbar";
import ContentOne from "./component/content-one";
import ContentTwo from "./component/content-two";
import ContentThree from "./component/content-three";
import Footer from "../homepage/component/footer";
const File = () => {
  return (
    <>
      <Navbar />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <Footer />
    </>
  );
};

export default File;
