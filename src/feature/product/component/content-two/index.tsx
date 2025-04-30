import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import frameOne from "@/assest/image/Ellipse 1148.svg";
import frameTwo from "@/assest/image/Ellipse 1149.svg";
import star from "@/assest/image/Frame 1686561846.svg";
import { BlurStar, GoldStar, RedIcon } from "@/assest/icon";

export const review = [
  {
    img: <Image src={frameOne} alt="alt" />,
    name: "Olu jacobs",
    txt: "Add a description of the product down here Add a description of the product down here",
  },
  {
    img: <Image src={frameTwo} alt="alt" />,
    name: "Olu jacobs",
    txt: "Add a description of the product down here Add a description of the product down here",
  },
  {
    img: <Image src={frameOne} alt="alt" />,
    name: "Olu jacobs",
    txt: "Add a description of the product down here Add a description of the product down here",
  },
  {
    img: <Image src={frameTwo} alt="alt" />,
    name: "Olu jacobs",
    txt: "Add a description of the product down here Add a description of the product down here",
  },
];
const contentTwo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3>Reviews</h3>
            <div className={styles.wrappers}>
              {review.map((task, index) => (
                <div key={index} className={styles.gap}>
                  <div className={styles.txtSheet}>
                    {task.img}
                    <div className={styles.card}>
                      <div className={styles.first}>
                        <div className={styles.nameTag}>
                          <h3>{task.name}</h3>
                          <p>3 days ago</p>
                        </div>
                        <div>
                          <GoldStar />
                          <GoldStar />
                          <GoldStar />
                          <GoldStar />
                          <BlurStar />
                        </div>
                      </div>
                      <div className={styles.second}>
                        <p>{task.txt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contentTwo}>
            <h3>Ratings</h3>
            <div className={styles.ratingStyle}>
              <div>
                <Image src={star} alt="star" />
              </div>
              <div className={styles.reviewLine}>
                <div className={styles.line}>
                  <p>1</p>
                  <RedIcon />
                  <p>45</p>
                </div>
                <div className={styles.line}>
                  <p>1</p>
                  <RedIcon />
                  <p>45</p>
                </div>
                <div className={styles.line}>
                  <p>1</p>
                  <RedIcon />
                  <p>45</p>
                </div>
                <div className={styles.line}>
                  <p>1</p>
                  <RedIcon />
                  <p>45</p>
                </div>
                <div className={styles.line}>
                  <p>1</p>
                  <RedIcon />
                  <p>45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contentTwo;
