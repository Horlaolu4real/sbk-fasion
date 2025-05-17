import React from "react";
import styles from "./styles.module.scss";
import { catolouges } from "@/feature/homepage/mobile-card";
import DesktopProperties from "@/feature/homepage/desktop-card";
// import { catolouges } from "@/feature/prod/component/file";
// import { prod } from "@/feature/homepage/folder";
import ListingProperties from "@/feature/homepage/listing-card";
import { mobileCard } from "@/feature/homepage/mobile-card";

const ContentThree = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <p>Similar Product</p>
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
      </div>
    </div>
  );
};

export default ContentThree;
