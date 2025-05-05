"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import {
  BinIcon,
  CheckBackIcon,
  DarkDropIcon,
  LeftAIcon,
  MinusIcon,
  PlusIcon,
  RedBinIcon,
} from "@/assest/icon";
import Image from "next/image";
import imgOne from "@/assest/image/detail/Frame 1686561798 (1).svg";
import imgTwo from "@/assest/image/detail/Frame 1686561799 (1).svg";
import imgThree from "@/assest/image/detail/Frame 1686561799 (2).svg";
import Link from "next/link";

export const table = [
  {
    id: 1,
    product: <Image src={imgOne} alt="one" />,
    name: "Bvlgari Hedge Sneakers",
    size: "Size 45",
    price: "N390.00",
  },

  {
    id: 2,
    product: <Image src={imgTwo} alt="one" />,
    name: "Channel Bag",
    size: "Size 45",
    price: "N390.00",
  },

  {
    id: 3,
    product: <Image src={imgThree} alt="one" />,
    name: "Louis Vuitton Slide",
    size: "Size 45",
    price: "N390.00",
  },
];

export const mobileTable = [
  {
    id: 1,
    product: <Image src={imgOne} alt="one" />,
    name: "Bvlgari Hedge Slide",
    size: "Size 45",
    price: "N390.00",
    bin: <RedBinIcon />,
  },

  {
    id: 2,
    product: <Image src={imgOne} alt="one" />,
    name: "Bvlgari Hedge Slide",
    size: "Size 45",
    price: "N390.00",
    bin: <RedBinIcon />,
  },

  {
    id: 3,
    product: <Image src={imgOne} alt="one" />,
    name: "Bvlgari Hedge Slide",
    size: "Size 45",
    price: "N390.00",
    bin: <RedBinIcon />,
  },
];

const TableRow = () => {
  const [index, setIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const increase = () => {
    setMobileIndex((prev) => prev + 1);
  };

  const decrease = () => {
    setMobileIndex((prev) => prev - 1);
  };

  const increment = () => {
    setIndex((prev) => prev + 1);
  };

  const decrement = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.checkOut}>
          <Link href={"./detail"}>
            <CheckBackIcon />
          </Link>

          <p>CheckBack</p>
        </div>
        <div className={styles.tableGrid}>
          <div className={`${styles.row} ${styles.header}`}>
            <div className={styles.product}>
              {" "}
              <p>Product</p>
            </div>
            <div className={styles.size}>
              {" "}
              <p>Size</p>
            </div>
            <div className={styles.quantity}>
              <p>Quantity</p>
            </div>
            <div className={styles.price}>
              <p>price</p>
            </div>
            <div className={styles.empty}></div>
          </div>
          <div className={styles.mapClass}>
            {table.map((src, indexs) => (
              <div key={indexs} className={`${styles.row} ${styles.map_row}`}>
                <div className={styles.flx}>
                  {src.product}
                  <p>{src.name}</p>
                </div>
                <div className={styles.size}>
                  <h3>{src.size}</h3>
                  <DarkDropIcon />
                </div>
                <div className={styles.btns}>
                  <p onClick={decrement} className={styles.minus}>
                    <MinusIcon />
                  </p>
                  {index}
                  <p onClick={increment} className={styles.plus}>
                    <PlusIcon />
                  </p>
                </div>
                <div className={styles.price}>{src.price}</div>
                <div>
                  <BinIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.headers}>
            <LeftAIcon />
            <p>Continue Shopping</p>
          </div>
          <div className={styles.modal}>
            <div className={styles.space}>
              <p>Sub total</p>
              <p className={styles.dark}>N203,000</p>
            </div>
            <div className={styles.space}>
              <p>Shipping fee</p>
              <p className={styles.dark}>N2000</p>
            </div>
            <div className={styles.space}>
              <p>Total</p>
              <p className={styles.dark}>N205,000</p>
            </div>

            <button className={styles.btn}>
              <Link href={"./billing"}>
                <p>Proceed to checkout</p>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.mobileProd}>
          {mobileTable.map((txt, index) => (
            <div key={index} className={styles.cover}>
              <div className={styles.imgContent}>
                <div className={styles.imgwidth}>{txt.product}</div>
                <div className={styles.para}>
                  <div className={styles.txt}>
                    <h1 className={styles.name}>{txt.name}</h1>
                    <p className={styles.price}>{txt.price}</p>
                  </div>
                </div>
                <div className={styles.bin}>{txt.bin}</div>
              </div>
              <div className={styles.btnAmount}>
                <div className={styles.size}>
                  <p>{txt.size}</p>
                  <DarkDropIcon />
                </div>
                <div className={styles.sizeChange}>
                  <p onClick={decrease}>{/* <MinusIcon /> */}-</p>
                  {mobileIndex}
                  <p onClick={increase}>{/* <PlusIcon /> */}+</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.calculationBtn}>
          <div className={styles.amt}>
            <h3>Sub total</h3>
            <p>N203,000</p>
          </div>
          <div className={styles.amt}>
            <h3>Shipping fee</h3>
            <p>Free</p>
          </div>
          <div className={styles.amt}>
            <h3>Total</h3>
            <p>N203,000</p>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnSubmit}>
              <Link href={'./billing'}>
                <p>Proceed to checkout</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableRow;
