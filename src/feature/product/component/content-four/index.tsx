import React from "react";
import styles from "./styles.module.scss";
import ListingProperties from "@/feature/homepage/listing-card";
import { mobileCard } from "@/feature/homepage/mobile-card";

const ContentFour = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>Similar Product</p>
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
    </>
  );
};

export default ContentFour;
