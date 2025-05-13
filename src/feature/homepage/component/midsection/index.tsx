import React from "react";
import styles from "./styles.module.scss";
// import { prod } from "@/feature/homepage/folder";
import imgOne from "@/assest/image/detail/cover.jpg";
import { catolouges } from "@/feature/prod/component/file";
import Link from "next/link";
import { mobileCard } from "../../mobile-card";

import Image from "next/image";
import { BlurStar, GoldStar } from "@/assest/icon";
import Slides from "../slides";
import ListingProperties from "../../listing-card";

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
            {catolouges.map((prod, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.imag}>{prod.img}</div>
                <div className={styles.downwardDesign}>
                  <div className={styles.text}>
                    <p>{prod.txt}</p>
                    <h1 className={styles.naira}>{prod.amount}</h1>
                  </div>

                  <div className={styles.flx}>
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <BlurStar />
                  </div>
                  <div className={styles.btnSpace}>
                    <Link href={"./shopping"}>
                      <button className={styles.btn}>
                        <p>View More</p>
                      </button>
                    </Link>

                    <button className={styles.btnRed}>
                      <p>Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
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
