import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import head from "@/assest/productImage/bags.jpg";
import { catolouge } from "@/feature/prod/component/file";
import Link from "next/link";

import {
  // RightArrowIcon,
  GoldStar,
  BlurStar,
  CheckBackIcon,
  SmallStarsIcon,
  DropDownIcon,
  // FilterIcon,
  // WhiteDropdownIcon,
} from "@/assest/icon";

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
          <CheckBackIcon />
        </div>
        <div className={styles.contentOne}>
          <Link href={"./"} className={styles.link}>
            <CheckBackIcon className={styles.check_icon} />
          </Link>
          <div className={styles.all}>
            <p>All</p>
            <DropDownIcon className={styles.drop_down} />
          </div>
          {/* <div className={styles.secondFilter}>
            <FilterIcon />
            <p>Filter</p>
            <WhiteDropdownIcon />
          </div> */}
        </div>

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
                      <Link href={"./calculate"}>
                        <p>Add to Cart</p>
                      </Link>
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
                        <Link href={"./detail"}>
                          <p>View more</p>
                        </Link>
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

export default Hero;

