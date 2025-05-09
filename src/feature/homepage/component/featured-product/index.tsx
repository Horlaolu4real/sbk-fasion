

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import imgOne from "@/assest/image/Rectangle 22.svg";
import imgTwo from "@/assest/image/Rectangle 23.svg";
import imgThree from "@/assest/image/Rectangle 28.svg";
import imgFour from "@/assest/image/Rectangle 29.svg";
import imgFive from "@/assest/image/Rectangle 30.svg";
import imgSix from "@/assest/image/Rectangle 31.svg";
import rotateImg from "@/assest/image/Group 1000005945.svg";

import styles from "./styles.module.scss";

const images = [imgOne, imgTwo, imgFive, imgSix, imgFour, imgThree];

const FeaturedProduct = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.content} ${isVisible ? styles.slideIn : ""}`}>
      <Image src={rotateImg} alt="rotate" className={styles.rotate} />
      <div className={styles.carousel}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className={styles.card}>
            <Image src={img} alt={`product-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

