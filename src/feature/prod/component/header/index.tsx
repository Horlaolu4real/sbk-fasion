import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
// import FirstImage from "@/assest/productImage/Frame 1686562475.svg";
import head from "@/assest/productImage/bags.jpg";

import {
  CheckBackIcon,
  DropDownIcon,
  FilterIcon,
  // RightArrowIcon,
  WhiteDropdownIcon,
} from "@/assest/icon";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.content}>
        {/* <Image src={FirstImage} alt="first" /> */}
        <div className={styles.header}>
          <Image src={head} alt="header" className={styles.image} />
          <div className={styles.alignCenter}>
            <h1>Shopping Page</h1>
            <p>Discover our curated favourites, handpicked just for you</p>
          </div>
        </div>
        <div className={styles.topFilter}>
          <div className={styles.firstFilter}>
            <div className={styles.contentOne}>
              <Link href={"./"} className={styles.link}>
                <CheckBackIcon className={styles.check_icon} />
              </Link>
              <div className={styles.all}>
                <p>All</p>
                <DropDownIcon className={styles.drop_down} />
              </div>
            </div>
            <ul className={styles.listTwo}>
              <li>
                <p>New Arrivals</p>
              </li>
              <li>
                <p>Best Sellings</p>
              </li>
              <li>
                <p>Top Rating</p>
              </li>
            </ul>
          </div>
          <Link href={"./wish"}>
            <div className={styles.secondFilter}>
              <FilterIcon />
              <p>Filter</p>
              <WhiteDropdownIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
