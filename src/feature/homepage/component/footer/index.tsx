"use client";
import React from "react";
// import footer from "@/assest/image/footerImage.jpg"
import font from "@/assest/image/Frame 1686562473 (1).svg";

import styles from "./styles.module.scss";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdenIcon,
  TwitterIcon,
} from "@/assest/icon";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={styles.contentOne}>
          <div className={styles.center_align}>
            <p>Limited Offers</p>
            <div className={styles.txt}>
              <h1>Join our style squad- Get 10% off your first order!</h1>
            </div>
            <button>
              <Link href={"/detail"}>
                <p>Shop Our Products</p>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.contentTwo}>
          <div className={styles.firstPara}>
            <div className={styles.flx}>
              <Link href={"/"}>
                <Image src={font} alt="fnt" />
              </Link>
              <div className={styles.icons}>
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
                <LinkdenIcon />
              </div>

              <div className={styles.input}>
                <input type="text" placeholder="Enter your email" />
                <button className={styles.btn}>
                  <p>Subscribe</p>
                </button>
              </div>
              <div className={styles.mobileInput}>
                <input type="text" placeholder="Enter your email" />
                <br />
                <button className={styles.mobileBtn}>
                  <h3>Subscribe</h3>
                </button>
              </div>
            </div>
            <div className={styles.icon}>
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
              <LinkdenIcon />
            </div>
          </div>
          <p>
            <span> © Copyright SBK Fashion 2025, All Rights Reserved.</span> |
            FAQ | Terms & Condition | Privacy Policy
          </p>
          <h6>
            <span>© Copyright SBK Fashion 2025, All Rights Reserved. </span>|
            FAQ | Terms & Condition | Privacy Policy
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
