// import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { MobileRatingIcon } from "@/assest/icon";
import Link from "next/link";

interface Props {
  img: StaticImageData;
  txt: string;
  naira: number;
  btn: string;
  leftbtn: string;
}

const ListingProperties: React.FC<Props> = ({
  img,
  txt,
  naira,
  btn,
  leftbtn,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.mobile_card_container}>
          <Image src={img} alt="mobile-Images" className={styles.image} />
        </div>
        <div className={styles.txtContent}>
          <div className={styles.first_slides}>
            <p>{txt}</p>
            <h1>N{naira.toLocaleString()}</h1>
          </div>
          <div className={styles.second_slides}>
            <MobileRatingIcon />
            <div className={styles.btn}>
              <button className={styles.viewBtn}>
                <Link href={"./shopping"}>
                  <p>{btn}</p>
                </Link>
              </button>
              <button className={styles.addBtn}>
                <Link href={"./detail"}>
                  <p>{leftbtn}</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingProperties;
