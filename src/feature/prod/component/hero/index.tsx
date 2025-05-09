import React from "react";
import styles from "./styles.module.scss";
import { catolouge } from "../file";
import { BlurStar, GoldStar, SmallStarsIcon } from "@/assest/icon";

const HeroPage = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.delete_product_catalogue}>
          <div className={styles.product_design}>
            {catolouge.map((prod, index) => (
              <div key={index} className={styles.product}>
                <div className={styles.imgHandle}>{prod.img}</div>
                <div className={styles.downDesign}>
                  <div className={styles.firstContent}>
                    <p>{prod.txt}</p>
                    <h3> {prod.amount}</h3>
                  </div>
                  <div className={styles.last}>
                    <div className={styles.flx}>
                      <GoldStar />
                      <GoldStar />
                      <GoldStar />
                      <GoldStar />
                      <BlurStar />
                    </div>
                    <button className={styles.btn}>
                      <p>Add to Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {catolouge.map((prod, index) => (
              <div key={index} className={styles.mobileProduct}>
                <div className={styles.imgHandle}>{prod.img}</div>
                <div className={styles.downDesign}>
                  <div className={styles.MobileContent}>
                    <p className={styles.prod}>Bvlgari Hedge S..</p>
                    <h3 className={styles.currency}> {prod.amount}</h3>
                  </div>
                  <div className={styles.last}>
                    <SmallStarsIcon />
                    <div className={styles.btnSpace}>
                      <button className={styles.btn}>
                        <p>View more</p>
                      </button>

                      <button className={styles.btnRed}>
                        <p>Add to Cart</p>
                      </button>
                    </div>
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

export default HeroPage;
