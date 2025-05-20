import React from "react";

import { slides } from "@/feature/homepage/folder";
import { slide } from "@/feature/homepage/folder";
import styles from "./styles.module.scss";
import Image from "next/image";

const Slides = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.slides}>
          {slides.map((prod, index) => (
            <div key={index} className={styles.wrapper}>
              <div className={styles.imag}>{prod.img}</div>
              <div className={styles.text}>
                <p>{prod.txt}</p>
                <button className={styles.btn}>
                  <p>{prod.btn}</p>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileSlides}>
          {slide.map((prod, index) => (
            <div key={index} className={styles.wrapper}>
              <Image src={prod.img} alt="alt" className={styles.imag} />
              <div className={styles.texts}>
                <p>{prod.txt}</p>
                <div className={styles.bt}>
                  <button>{prod.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Slides;
