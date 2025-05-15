"use client";

import {
  CartIcon,
  DarkSearchIcon,
  HamburgerIcon,
  LoveIcon,
  SearchIcon,
} from "@/assest/icon";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import frames from "@/assest/image/Frame 1686562473.svg";
import { FaTimes } from "react-icons/fa";

import styles from "./styles.module.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={styles.content}>
      <div className={styles.Navbar}>
        <div className={styles.hamburg} onClick={() => setShowMenu(true)}>
          <HamburgerIcon />
        </div>
        <div className={styles.link}>
          <Link href={"/"}>
            <Image src={frames} alt="frame" className={styles.frame} />
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
            <DarkSearchIcon className={styles.icons} />
            <LoveIcon />
            <CartIcon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={() => setShowMenu(false)}>
            <FaTimes />
          </div>

          <ul className={styles.mobileList}>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/featured Products"}>Featured Products</Link>
            </li>
            <li>
              <Link href={"/billing"}>Contact Us</Link>
            </li>
          </ul>

          <div className={styles.mobileInputField}>
            <input
              type="text"
              placeholder="What are you looking for ?"
              className={styles.field}
            />
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
