import React from "react";
import styles from "./styles.module.scss";
import { details } from "../file";
// import { BlurStar, GoldStar } from "@/assest/icon";
// import Link from "next/link";
import ListingProperties from "@/feature/homepage/listing-card";
import { mobileCard } from "@/feature/homepage/mobile-card";
import TopProperties from "../desktop-componernt-listing";

const HeroPage = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.delete_product_catalogue}>
          <div className={styles.product}>
            {details.map((ftr, index) => (
              <TopProperties
                key={index}
                {...ftr}
                amounts={Number(ftr.amounts)}
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
        </div>
      </div>
    </>
  );
};

export default HeroPage;
