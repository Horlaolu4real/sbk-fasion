// import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { MobileRatingIcon } from "@/assest/icon";
import Link from "next/link";

interface Props {
  img: StaticImageData;
  txt: string;
  naira: number;
  leftbtn: string;
}

const ListingProperties: React.FC<Props> = ({
  img,
  txt,
  naira,

  leftbtn,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href={"./shopping"}>
          <Image src={img} alt="mobile-Images" className={styles.image} />
        </Link>

        <div className={styles.content}>
          <div className={styles.newAmount}>
            <div className={styles.flxTxt}>
              <h6>{txt}</h6>
              <div className={styles.Price}>
                <p className={styles.newPrice}>N{naira.toLocaleString()}</p>
                <p className={styles.oldPrice}>N48,750</p>
              </div>
              <div className={styles.btn_row}>
                <MobileRatingIcon />
                <button className={styles.btn}>
                  <p>{leftbtn}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingProperties;
