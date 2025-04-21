import productOne from "@/assest/image/product/Frame 1686562430 (1).svg";
import productTwo from "@/assest/image/product/Frame 1686562430 (2).svg";
import productThree from "@/assest/image/product/Frame 1686562430 (3).svg";
import productFour from "@/assest/image/product/Frame 1686562430 (4).svg";
import productFive from "@/assest/image/product/Frame 1686562430 (5).svg";
import productSix from "@/assest/image/product/Frame 1686562430 (6).svg";
import productSeven from "@/assest/image/product/Frame 1686562430 (7).svg";
import productEight from "@/assest/image/product/Frame 1686562430.svg";

import Image from "next/image";

import slideOne from "@/assest/image/slide/Frame 1686562450.svg";
import slideTwo from "@/assest/image/slide/Frame 1686562451.svg";
import slideThree from "@/assest/image/slide/Frame 1686562452.svg";

export const product = [
  {
    img: <Image src={productOne} alt="one" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productTwo} alt="two" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productThree} alt="three" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productFour} alt="four" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productFive} alt="five" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productSix} alt="six" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productSeven} alt="seven" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
  {
    img: <Image src={productEight} alt="eight" />,
    txt: "Bvlgari Hedge Slide",
    amount: "N48,750",
  },
];

export const slides = [
  {
    img: <Image src={slideOne} alt="one" />,
    txt: "Slide into comfort and style, the perfect choice laid back luxury on any day",
    btn: "Shop slides",
  },

  {
    img: <Image src={slideTwo} alt="two" />,
    txt: "Make your presence unforgettable, Discover scents that tell your story",
    btn: "Shop perfumes",
  },

  {
    img: <Image src={slideThree} alt="three" />,
    txt: "Carry confidence, Our bag blends function, fashion, and finesse.",
    btn: "Shop Bags",
  },
];
