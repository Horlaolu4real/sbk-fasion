"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import imgOne from "@/assest/image/image1.jpg";
import imgTwo from "@/assest/image/image2.jpg";
import imgThree from "@/assest/image/image3.jpg";
import imgFour from "@/assest/image/image4.jpg";
import imgFive from "@/assest/image/image5.jpg";
import imgSix from "@/assest/image/image6.jpg";
import rotateImg from "@/assest/image/Group 1000005945.svg";

import styles from "./styles.module.scss";
// import ImageCarousel from "./ImageCarousel";

const images = [imgOne, imgTwo, imgFive, imgSix, imgFour, imgThree];

const ImageCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <ImageCarousel />
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

export default ImageCarousel;
