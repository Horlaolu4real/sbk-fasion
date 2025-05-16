import React from "react";
import styles from "./styles.module.scss";
// import { prod } from "@/feature/homepage/folder";
import imgOne from "@/assest/image/detail/cover.jpg";
import { catolouges } from "../../mobile-card";
// import Link from "next/link";
import { mobileCard } from "../../mobile-card";

import Image from "next/image";
// import { BlurStar, GoldStar } from "@/assest/icon";
import Slides from "../slides";
import ListingProperties from "../../listing-card";
import DesktopProperties from "../../desktop-card";

const Midsection = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>A Touch of brillance for every look</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src={imgOne} alt="img1" className={styles.imag} />
            <div className={styles.btns}>
              <button className={styles.btnOne}>
                <p>New Arrivals</p>
              </button>
              <button className={styles.btnTwo}>
                <p>Best Selling</p>
              </button>
              <button className={styles.btnThree}>
                <p>Top Rating</p>
              </button>
            </div>
          </div>
          <div className={styles.product}>
            {catolouges.map((ftr, index) => (
              <DesktopProperties
                key={index}
                {...ftr}
                amount={Number(ftr.amount)}
              />
            ))}
          </div>

          <div className={styles.mobileCard}>
            {mobileCard.map((feat, index) => (
              <ListingProperties
                key={index}
                {...feat}
                naira={Number(feat.naira)}
              />
            ))}
          </div>

          <Slides />
        </div>
      </div>
    </>
  );
};

export default Midsection;
