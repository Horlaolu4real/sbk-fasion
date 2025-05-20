import React from "react";
import HeroPage from "./component/hero";
import Header from "./component/header";
import styles from "./styles.module.scss"

const File = () => {
  return (
    <div className={styles.width}>
      <Header />
      <HeroPage />
    </div>
  );
};

export default File;
