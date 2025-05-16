import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgOne from "@/assest/image/img/Frame 1686562430 (20).svg";
import imgTwo from "@/assest/image/img/Frame 1686562430 (21).svg";
import imgThree from "@/assest/image/img/Frame 1686562430 (22).svg";
import imgFour from "@/assest/image/img/Frame 1686562430 (23).svg";
import { catolouges } from "@/feature/homepage/mobile-card";
import DesktopProperties from "@/feature/homepage/desktop-card";
// import { catolouges } from "@/feature/prod/component/file";
// import { prod } from "@/feature/homepage/folder";

export const file = [
  {
    img: <Image src={imgOne} alt="one" width={316} height={320} />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgTwo} alt="one" width={316} height={320} />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgThree} alt="one" width={316} height={320} />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgFour} alt="one" width={316} height={320} />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgOne} alt="one" />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgTwo} alt="one" />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgThree} alt="one" />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },

  {
    img: <Image src={imgFour} alt="one" />,
    cont: "Bvlgari Hedge Slide",
    note: "N48,750",
  },
];

const ContentThree = () => {
  return (
    <div className={styles.content}>
      <p>Similar Product</p>
      <div className={styles.product}>
        {catolouges.map((ftr, index) => (
          <DesktopProperties key={index} {...ftr} amount={Number(ftr.amount)} />
        ))}
      </div>
    </div>
  );
};

export default ContentThree;
