import React from "react";
import TableRow from "./component";
import Navbar from "../prod/component/navbar";
import styles from "./styles.module.scss"

const File = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <TableRow />
    </div>
  );
};

export default File;
