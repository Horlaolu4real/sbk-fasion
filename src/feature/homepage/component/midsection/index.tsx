import React from "react";
import styles from "./styles.module.scss";
import { product } from "@/feature/homepage/folder/index";
import { slides } from "@/feature/homepage/folder";
import { slide } from "@/feature/homepage/folder";
import { prod } from "@/feature/homepage/folder";
// import imgOne from "@/assest/image/Frame 1686562443.svg";
import imgOne from "@/assest/image/detail/cover.jpg";
import Link from "next/link";

import Image from "next/image";
import { BlurStar, GoldStar, SmallStarsIcon } from "@/assest/icon";

const Midsection = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>A touch of brillance for every look</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.img}>
            <Image src={imgOne} alt="img1" className={styles.imag} />
            <div className={styles.btns}>
              <button className={styles.btnOne}>
                <p>New Arrivals</p>
              </button>
              <button className={styles.btnTwo}>
                <p>Best Selling</p>
              </button>
              <button className={styles.btnThree}>
                <p>Top Rating</p>
              </button>
            </div>
          </div>
          <div className={styles.product}>
            {product.map((prod, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.imag}>{prod.img}</div>
                <div className={styles.downwardDesign}>
                  <div className={styles.text}>
                    <p>{prod.txt}</p>
                    <h1 className={styles.naira}>{prod.amount}</h1>
                  </div>

                  <div className={styles.flx}>
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <GoldStar />
                    <BlurStar />
                  </div>
                  <div className={styles.btnSpace}>
                    <Link href={"./shopping"}>
                      <button className={styles.btn}>
                        <p>View More</p>
                      </button>
                    </Link>

                    <button className={styles.btnRed}>
                      <p>Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mobileProduct}>
            {prod.map((ftr, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.wrapper}>{ftr.img}</div>
                <div className={styles.txtContent}>
                  <div className={styles.upTxt}>
                    <h6>{ftr.txt}</h6>
                    <p>{ftr.amount}</p>
                  </div>
                  <div className={styles.button}>
                    <SmallStarsIcon />
                    <div className={styles.btnView}>
                      <button className={styles.btn}>
                        <Link href={"./detail"}>
                          <p>View More</p>
                        </Link>
                      </button>

                      <button className={styles.btnAdd}>
                        <Link href={'./calculate'}>
                        <p>Add to cart</p>
                        </Link>
                      
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.slides}>
            {slides.map((prod, index) => (
              <div key={index} className={styles.wrapper}>
                <div className={styles.imag}>{prod.img}</div>
                <div className={styles.text}>
                  <h1>{prod.txt}</h1>
                  <button className={styles.btn}>
                    <p>{prod.btn}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mobileSlides}>
            {slide.map((prod, index) => (
              <div key={index} className={styles.wrapper}>
                <div className={styles.imag}>{prod.img}</div>
                <div className={styles.texts}>
                  <h1>{prod.txt}</h1>
                  <button className={styles.bt}>
                    <p>{prod.btn}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Midsection;
