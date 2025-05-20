// import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { MobileRatingIcon } from "@/assest/icon";
import Link from "next/link";

interface Props {
  img: StaticImageData |string;
  name: string;
  oldPrice: number;
  newPrice: number;
}

const Card: React.FC<Props> = ({
  img,
  name,
  newPrice,
  oldPrice,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href={"./detail"}>
          <Image src={img} alt="mobile-Images" className={styles.image} />
        </Link>
        <div className={styles.content}>
          <div className={styles.newAmount}>
            <div className={styles.flxTxt}>
              <p>{name}</p>
              <div className={styles.Price}>
                <p className={styles.newPrice}>N{oldPrice.toLocaleString()}</p>
                <p className={styles.oldPrice}>N{newPrice.toLocaleString()}</p>
              </div>
              <div className={styles.btn_row}>
                <MobileRatingIcon className={styles.icon} />
                <button className={styles.btn}>
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
