import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgOne from "@/assest/image/img/Frame 1686562430 (20).svg";
import imgTwo from "@/assest/image/img/Frame 1686562430 (21).svg";
import imgThree from "@/assest/image/img/Frame 1686562430 (22).svg";
import imgFour from "@/assest/image/img/Frame 1686562430 (23).svg";
import Link from "next/link";
import { BlurStar, GoldStar } from "@/assest/icon";

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
      <div className={styles.wrapper}>
        {file.map((feat, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageContent}>{feat.img}</div>
            <div className={styles.page}>
              <div className={styles.txt}>
                <p>{feat.cont}</p>
                <h3>{feat.note}</h3>
              </div>
              <div className={styles.rating}>
                <div className={styles.star}>
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <BlurStar />
                </div>
                <button>
                  <Link href={"./calculate"}>
                    <p>Add to Cart</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentThree;
