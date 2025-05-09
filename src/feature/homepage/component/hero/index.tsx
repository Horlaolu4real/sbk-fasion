import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.fullWidth}>
          <div className={styles.text}>
            <p className={styles.header}>
              Your New Favourite Look is Just a Click Away.
            </p>
          </div>

          <div className={styles.para}>
            <p>
              Step into the season hottest trends at unbeatable prices. Don’t
              miss out- Shop your favourites now!
            </p>
            <div className={styles.btnField}>
              <button className={styles.btn}>
                <Link href={'./detail'}>
                  <p>Shop Now</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
