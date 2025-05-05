import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgOne from "@/assest/image/img/Frame 1686562430 (20).svg";
import imgTwo from "@/assest/image/img/Frame 1686562430 (21).svg";
import imgThree from "@/assest/image/img/Frame 1686562430 (22).svg";
import imgFour from "@/assest/image/img/Frame 1686562430 (23).svg";
import { catolouges } from "@/feature/prod/component/file";
// import { prod } from "@/feature/homepage/folder";
import Link from "next/link";
import { BlurStar, GoldStar, SmallStarsIcon } from "@/assest/icon";

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
        {catolouges.map((prod, index) => (
          <div key={index} className={styles.mobileProduct}>
            <div className={styles.imgHandle}>{prod.img}</div>
            <div className={styles.downDesign}>
              <div className={styles.MobileContent}>
                <p className={styles.prod}>Bvlgari Hedge S..</p>
                <h3 className={styles.currency}> {prod.amount}</h3>
              </div>
              <div className={styles.last}>
                <SmallStarsIcon />
                <div className={styles.btnSpace}>
                  <button className={styles.btn}>
                    <Link href={"./calculate"}>
                      <p>View more</p>
                    </Link>
                  </button>

                  <button className={styles.btnRed}>
                    <p>Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentThree;
