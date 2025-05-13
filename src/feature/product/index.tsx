import React from "react";
import Navbar from "../prod/component/navbar";
import ContentOne from "./component/content-one";
// import ContentTwo from "./component/content-two";
import ContentThree from "./component/content-three";
import ContentFour from "./component/content-four";
const File = () => {
  return (
    <>
      <Navbar />
      <ContentOne />
      {/* <ContentTwo /> */}
      <ContentThree />
      <ContentFour />
    </>
  );
};

export default File;
