import React from "react";
import imgOne from "@/assest/image/Rectangle 22.svg";
import imgTwo from "@/assest/image/Rectangle 23.svg";
import imgThree from "@/assest/image/Rectangle 28.svg";
import imgFour from "@/assest/image/Rectangle 29.svg";
import imgFive from "@/assest/image/Rectangle 30.svg";
import imgSix from "@/assest/image/Rectangle 31.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

export const featuredProducts = [
  {
    img: <Image src={imgOne} alt="ProductOne" />,
  },
  {
    img: <Image src={imgTwo} alt="ProductTwo" />,
  },
  {
    img: <Image src={imgFive} alt="ProductThree" />,
  },
  {
    img: <Image src={imgSix} alt="ProductFour" />,
  },
  {
    img: <Image src={imgFour} alt="ProductFive" />,
  },
  {
    img: <Image src={imgThree} alt="ProductSix" />,
  },
];

const FeaturedProduct = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.flx}>
          {featuredProducts.map((prod, index) => (
            <div key={index}>
              <div className={styles.image}>{prod.img}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
