"use client";
import {
  CheckBackIcon,
  ChineseIcon,
  DeliveryIcon,
  LayerIcon,
} from "@/assest/icon";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgOne from "@/assest/image/detail/Frame 1686561798 (1).svg";
import imgTwo from "@/assest/image/detail/Frame 1686561799 (1).svg";
import imgThree from "@/assest/image/detail/Frame 1686561799 (2).svg";
import imag from "@/assest/image/icon/image 30 (1).svg";
import imagOne from "@/assest/image/icon/image 31.svg";
import imagTwo from "@/assest/image/icon/image 32 (1).svg";
import imagThree from "@/assest/image/icon/image 33.svg";
import Link from "next/link";

const ContentOne = () => {
  const [input, setInput] = useState({
    frName: "",
    lsName: "",
    phNumber: "",
    emNumber: "",
  });

  const [inputs, setInputs] = useState({
    country: "",
    address: "",
    apartment: "",
  });

  const [resident, setReident] = useState({
    city: "",
    state: "",
    psCard: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  // const [isClick, setIsClick] = useState(false);
  const completed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setReident((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bill}>
          <Link href={"./calculate"}>
            <CheckBackIcon />
          </Link>
          <p>Billing details</p>
        </div>
        <div className={styles.wrappers}>
          <div className={styles.forms}>
            <form onSubmit={submit}>
              <p>Contact Information</p>
              <div className={styles.submit}>
                <div className={styles.Tag}>
                  <div className={styles.nameTag}>
                    <p>First Name</p>
                    <ChineseIcon />
                  </div>
                  <input
                    type="text"
                    onChange={handle}
                    name="frName"
                    value={input.frName}
                    className={styles.inputs}
                  />
                </div>

                <div className={styles.Tag}>
                  <div className={styles.nameTag}>
                    <p>Last Name</p>
                    <ChineseIcon />
                  </div>

                  <input
                    type="text"
                    onChange={handle}
                    name="lsName"
                    value={input.lsName}
                    className={styles.inputs}
                  />
                </div>
                <div className={styles.Tag}>
                  <div className={styles.nameTag}>
                    <p>Phone Number</p>
                    <ChineseIcon />
                  </div>

                  <input
                    type="text"
                    onChange={handle}
                    name="phNumber"
                    value={input.phNumber}
                    className={styles.inputs}
                  />
                </div>
                <div className={styles.Tag}>
                  <div className={styles.nameTag}>
                    <p>Email Address</p>
                    <ChineseIcon />
                  </div>

                  <input
                    type="text"
                    onChange={handle}
                    name="emNumber"
                    value={input.emNumber}
                    className={styles.inputs}
                  />
                </div>
              </div>
            </form>
            <div className={styles.detailPage}>
              <h3>Delivery details</h3>
              <div className={styles.flx}>
                <div className={styles.ship}>
                  <p>Ship</p>
                  <DeliveryIcon />
                </div>
                <div className={styles.ships}>
                  <p>Pick up</p>
                  <LayerIcon />
                </div>
              </div>
            </div>
            <div className={styles.secondRow}>
              <form onSubmit={submit}>
                <div className={styles.tag}>
                  <div className={styles.nameTag}>
                    <p>Country/Region</p>
                    <ChineseIcon />
                  </div>
                  <input
                    type="text"
                    name="country"
                    value={inputs.country}
                    onChange={handled}
                  />
                </div>

                <div className={styles.tag}>
                  <div className={styles.nameTag}>
                    <p>Address</p>
                    <ChineseIcon />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={inputs.address}
                    onChange={handled}
                  />
                </div>

                <div className={styles.tag}>
                  <div className={styles.nameTag}>
                    <p>Apartment/Suite</p>
                    <ChineseIcon />
                  </div>
                  <input
                    type="text"
                    name="apartment"
                    value={inputs.apartment}
                    onChange={handled}
                  />
                </div>
              </form>
            </div>
            <div className={styles.thirdRow}>
              <form onSubmit={submit}>
                <div className={styles.submits}>
                  <div className={styles.tag}>
                    <div className={styles.nameTag}>
                      <p>City</p>
                      <ChineseIcon />
                    </div>
                    <input
                      type="text"
                      value={resident.city}
                      onChange={completed}
                      name="city"
                    />
                  </div>

                  <div className={styles.tag}>
                    <div className={styles.nameTag}>
                      <p>State</p>
                      <ChineseIcon />
                    </div>
                    <input
                      type="text"
                      value={resident.state}
                      onChange={completed}
                      name="state"
                    />
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className={styles.nameTag}>
                    <p>PostCard (optional)</p>
                    <ChineseIcon />
                  </div>
                  <input
                    type="text"
                    value={resident.psCard}
                    onChange={completed}
                    name="psCard"
                  />
                </div>
              </form>
            </div>
            <div className={styles.forthRow}>
              <div className={styles.contained}>
                <input type="checkbox" />
                <p>Save this information for next time</p>
              </div>
            </div>
          </div>
          <div className={styles.contentTwo}>
            <div className={styles.first}>
              <div className={styles.flx}>
                <div className={styles.content}>
                  <Image src={imgOne} alt="one" />
                  <p className={styles.contentName}>Bvlgari Hedge Sneakers</p>
                </div>
                <p className={styles.price}>N390.00 </p>
              </div>
              <div className={styles.flx}>
                <div className={styles.content}>
                  <Image src={imgTwo} alt="one" />
                  <p className={styles.contentName}>Channel Bag</p>
                </div>
                <p className={styles.price}>N390.00 </p>
              </div>
              <div className={styles.flx}>
                <div className={styles.content}>
                  <Image src={imgThree} alt="one" />
                  <p className={styles.contentName}>Channel Bag</p>
                </div>
                <p className={styles.price}>N390.00 </p>
              </div>
            </div>
            <div className={styles.second}>
              <div className={styles.content}>
                <p className={styles.txt}>Subtotals:</p>
                <p className={styles.digit}>N203,00</p>
              </div>
              <div className={styles.content}>
                <p className={styles.txt}>Shipping fee</p>
                <p className={styles.digit}>N2000</p>
              </div>
              <div className={styles.content}>
                <p className={styles.txt}>Sub total</p>
                <p className={styles.digit}>$1750</p>
              </div>
            </div>
            <div className={styles.thirdRow}>
              <div className={styles.bankRow}>
                <div className={styles.bankCard}>
                  <div
                    onClick={() => setIsClicked(true)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid #000",
                      backgroundColor: isClicked ? "black" : "#fff",
                      cursor: "pointer",
                    }}
                  ></div>
                  <p className={styles.bank}>Bank</p>
                </div>
                <div className={styles.brandImg}>
                  <Image src={imag} alt="one" />
                  <Image src={imagOne} alt="one" />
                  <Image src={imagTwo} alt="one" />
                  <Image src={imagThree} alt="" />
                </div>
              </div>
              <div className={styles.cashRow}>
                <div className={styles.dotPages}>
                  <div
                    onClick={() => setIsClicked(true)}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid #000",
                      backgroundColor: isClicked ? "black" : "#fff",
                      cursor: "pointer",
                    }}
                  ></div>
                  <p className={styles.delivery}>Cash On dilivery</p>
                </div>
              </div>
            </div>
            <div className={styles.btnSpace}>
              <div className={styles.space}>
                <div className={styles.code}>
                  <p>Coupon Code</p>
                </div>
                <button className={styles.apply}>
                  <p>Apply Coupon</p>
                </button>
              </div>
              <button className={styles.btn}>
                <p>Place Order</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOne;
