"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  BlurStar,
  DarkIcon,
  GoldStar,
  LeftGrayIcon,
  MinusIcon,
  PlusIcon,
  RedIcon,
  RightDarkIcon,
} from "@/assest/icon";
import Link from "next/link";
// import image from "@/assest/image/detail/Frame 1686561798.svg";
import Image from "next/image";
import imgOne from "@/assest/image/detail/effectone.jpg";
import imgTwo from "@/assest/image/detail/effectwo.jpg";
import imgThree from "@/assest/image/detail/effecthree.jpg";
import imgFour from "@/assest/image/detail/effectfour.jpg";
import star from "@/assest/image/Frame 1686561846.svg";
import { review } from "../content-two";

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
  // const decrement = () => {
  //   setCurrentIndex((prev) => prev - 1);
  // };

  // const increment = () => {
  //   setCurrentIndex((prev) => prev + 1);
  // };

  const increment = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const decrement = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const [currentIndes, setCurrentIndes] = useState(0);
  const decrements = () => {
    setCurrentIndes((prev) => prev - 1);
  };

  const increments = () => {
    setCurrentIndes((prev) => prev + 1);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.linkPage}>
          <Link href={"./wish"}>
            <DarkIcon />
          </Link>
          <p>Product detail</p>
          <h3>Hoodie details</h3>
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

            <div className={styles.thumbWrapper}>
              <button onClick={decrement} className={styles.arrowLeft}>
                <LeftGrayIcon />
              </button>
              <div className={styles.imagFlx}>
                {images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    width={141}
                    height={127}
                    onClick={() => setCurrentIndex(index)}
                    className={styles.rounded_medium}
                  />
                ))}
              </div>

              <button onClick={increment} className={styles.arrowRight}>
                <RightDarkIcon />
              </button>
            </div>

            <div className={styles.mobileContainer}>
              <div className={styles.mainImgs}>
                <Image
                  src={images[currentIndex]}
                  alt="big"
                  className={styles.rounded_mediums}
                />
              </div>
              <div className={styles.mobileWrapper}>
                <button onClick={decrement} className={styles.arrowLeft}>
                  <LeftGrayIcon />
                </button>

                <div className={styles.mobileFlx}>
                  {images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`img-${i}`}
                      width={141}
                      height={128}
                      onClick={() => setCurrentIndex(i)}
                      className={styles.rounded_medium}
                    />
                  ))}
                </div>

                <button onClick={increment} className={styles.arrowRight}>
                  <RightDarkIcon />
                </button>
              </div>
            </div>

            <div className={styles.content}>
              <h3>Reviews</h3>
              <div className={styles.wrappers}>
                {review.map((task, index) => (
                  <div key={index} className={styles.gap}>
                    <div className={styles.txtSheet}>
                      {task.img}
                      <div className={styles.card}>
                        <div className={styles.first}>
                          <div className={styles.nameTag}>
                            <h3>{task.name}</h3>
                            <p>3 days ago</p>
                          </div>
                          <div>
                            <GoldStar />
                            <GoldStar />
                            <GoldStar />
                            <GoldStar />
                            <BlurStar />
                          </div>
                        </div>
                        <div className={styles.second}>
                          <p>{task.txt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  <p onClick={decrements}>
                    <MinusIcon />
                  </p>
                  <p>{currentIndes}</p>
                  <p onClick={increments}>
                    <PlusIcon />
                  </p>
                </div>
                <h6>
                  Only <span>15 items</span> left, dont miss out.
                </h6>
              </div>
            </div>
            <div className={styles.layerThree}>
              <p>Sizes</p>
              <div className={styles.arrayBtn}>
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
                <Link href={"./calculate"}>
                  <p>Add to Cart</p>
                </Link>
              </button>
            </div>
            <div className={styles.contentTwo}>
              <h3>Ratings</h3>
              <div className={styles.ratingStyle}>
                <div>
                  <Image src={star} alt="star" />
                </div>
                <div className={styles.reviewLine}>
                  <div className={styles.line}>
                    <p>1</p>
                    <RedIcon />
                    <p>45</p>
                  </div>
                  <div className={styles.line}>
                    <p>1</p>
                    <RedIcon />
                    <p>45</p>
                  </div>
                  <div className={styles.line}>
                    <p>1</p>
                    <RedIcon />
                    <p>45</p>
                  </div>
                  <div className={styles.line}>
                    <p>1</p>
                    <RedIcon />
                    <p>45</p>
                  </div>
                  <div className={styles.line}>
                    <p>1</p>
                    <RedIcon />
                    <p>45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOne;
