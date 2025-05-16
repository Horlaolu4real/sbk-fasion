import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import head from "@/assest/productImage/bags.jpg";
import { details } from "@/feature/prod/component/file";
import { mobileCard } from "@/feature/homepage/mobile-card";
import Link from "next/link";

import {
  // RightArrowIcon,
  CheckBackIcon,
  DropDownIcon,
  // FilterIcon,
  // WhiteDropdownIcon,
} from "@/assest/icon";
import ListingProperties from "@/feature/homepage/listing-card";
import TopProperties from "@/feature/prod/component/desktop-componernt-listing";

const Hero = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image src={head} alt="header" className={styles.image} />
          <div className={styles.alignCenter}>
            <h1>Wishlist</h1>
            <p>Explore your handpicked wishlists, saved just for you.</p>
          </div>
        </div>
        <div className={styles.icon}>
          <Link href={"./shopping"}>
            <CheckBackIcon />
          </Link>
        </div>
        <div className={styles.contentOne}>
          <Link href={"./"} className={styles.link}>
            <CheckBackIcon className={styles.check_icon} />
          </Link>
          <div className={styles.all}>
            <p>All</p>
            <DropDownIcon className={styles.drop_down} />
          </div>
        </div>

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

export default Hero;
