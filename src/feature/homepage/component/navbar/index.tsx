"use client";

import { CartIcon, LoveIcon, SearchIcon } from "@/assest/icon";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import frames from "@/assest/image/Frame 1686562473.svg";
import navImage from "@/assest/image/Group 1000005944.svg";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.Navbar}>
        <div className={styles.link}>
          <Link href={"/"}>
            <Image src={frames} alt="frame" />
          </Link>
          <Image src={navImage} alt="image" className={styles.img} />
        </div>

        <div className={styles.list}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/featured Products"}>Featured Products</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.input}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="What are you looking for ?"
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
