import React from "react";

import { slides } from "@/feature/homepage/folder";
import { slide } from "@/feature/homepage/folder";
import styles from "./styles.module.scss";
import Image from "next/image";

const Slides = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slides}>
          {slides.map((prod, index) => (
            <div key={index} className={styles.wrapper}>
              <div className={styles.imag}>{prod.img}</div>
              <div className={styles.text}>
                <h1>{prod.txt}</h1>
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
                <h1>{prod.txt}</h1>
                <button className={styles.bt}>
                  <p>{prod.btn}</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slides;
