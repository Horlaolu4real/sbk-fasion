"use client";

import { CartIcon, HamburgerIcon, LoveIcon, SearchIcon } from "@/assest/icon";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import frames from "@/assest/image/Frame 1686562473.svg";
import navImage from "@/assest/image/Group 1000005944.svg";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.content}>
      <Image src={navImage} alt="image" className={styles.img} />

      <div className={styles.Navbar}>
        <div className={styles.hamburg}>
          <HamburgerIcon />
        </div>

        <div className={styles.link}>
          <Link href={"/"}>
            <Image src={frames} alt="frame" className={styles.headerImg} />
          </Link>
        </div>

        <div className={styles.list}>
          <ul>
            <li className={styles.home}>
              <Link href={"/"}>
                <p>Home</p>
              </Link>
            </li>
            <li className={styles.categories}>
              <Link href={"/categories"}>
                <p>Categories</p>
              </Link>
            </li>
            <li className={styles.product}>
              <Link href={"/featured Products"}>
                <p>Featured Products</p>
              </Link>
            </li>
            <li className={styles.contact}>
              <Link href={"/contact"}>
                <p>Contact us</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.input}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="What are you looking for ? "
              className={styles.field}
            />
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={styles.icon}>
            <LoveIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
