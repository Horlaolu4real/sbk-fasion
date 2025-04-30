"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { DarkIcon, MinusIcon, PlusIcon } from "@/assest/icon";
import Link from "next/link";
// import image from "@/assest/image/detail/Frame 1686561798.svg";
import Image from "next/image";
import imgOne from "@/assest/image/detail/effectone.jpg";
import imgTwo from "@/assest/image/detail/effectwo.jpg";
import imgThree from "@/assest/image/detail/effecthree.jpg";
import imgFour from "@/assest/image/detail/effectfour.jpg";

export const number = [
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
  { txt: 45 },
];

const ContentOne = () => {
  const images = [imgOne, imgTwo, imgThree, imgFour];

  const [currentIndex, setCurrentIndex] = useState(0);
  const decrement = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const increment = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.linkPage}>
          <Link href={"./wish"}>
            <DarkIcon />
          </Link>
          <p>Product detail</p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.container}>
            <div className={styles.mainImg}>
              <Image
                src={images[currentIndex]}
                alt="big"
                width={607}
                height={512}
                className={styles.rounded_medium}
              />
            </div>
            <div className={styles.imagFlx}>
              <Image
                src={images[0]}
                alt="one"
                width={141}
                height={128}
                onClick={() => setCurrentIndex(0)}
                className={styles.rounded_medium}
              />
              <Image
                src={images[1]}
                alt="two"
                width={141}
                height={128}
                onClick={() => setCurrentIndex(1)}
                className={styles.rounded_medium}
              />
              <Image
                src={images[2]}
                alt="three"
                width={141}
                height={128}
                onClick={() => setCurrentIndex(2)}
                className={styles.rounded_medium}
              />
              <Image
                src={images[3]}
                alt="four"
                width={141}
                height={128}
                onClick={() => setCurrentIndex(3)}
                className={styles.rounded_medium}
              />
            </div>
          </div>

          <div className={styles.containerTwo}>
            <div className={styles.layerOne}>
              <h3>Tee’sLuxe cotton hoodie</h3>
              <p className={styles.text}>
                Add a description of the product down here Add a description of
                the product down here
              </p>

              <p className={styles.reviews}>45 reviews</p>
              <p className={styles.price}>$39.00</p>
            </div>
            <div className={styles.layerTwo}>
              <p>Quantity</p>
              <div className={styles.btnSurplus}>
                <div className={styles.indexBtn}>
                  <p onClick={decrement}>
                    <MinusIcon />
                  </p>
                  <p>{currentIndex}</p>
                  <p onClick={increment}>
                    <PlusIcon />
                  </p>
                </div>
                <h6>
                  Only<span>15 items</span>left, dont miss out.
                </h6>
              </div>
            </div>
            <div className={styles.layerThree}>
              <p>Sizes</p>
              <div className={styles.arra}>
                {number.map((btn, index) => (
                  <div key={index}>
                    <div className={styles.but}>
                      <button className={styles.btns}>{btn.txt}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.layerFour}>
              <button>
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOne;
