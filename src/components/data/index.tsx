import cardOne from "@/assest/mobileCard/cardOne.jpg";
import cardTwo from "@/assest/mobileCard/cardTwo.jpg";
import cardThree from "@/assest/mobileCard/cardThree.jpg";
import cardFour from "@/assest/mobileCard/cardFour.jpg";
import cardFive from "@/assest/mobileCard/cardFive.jpg";
import cardSix from "@/assest/mobileCard/cardSix.jpg";
import cardSeven from "@/assest/mobileCard/cardSeven.jpg";
import cardEight from "@/assest/mobileCard/cardEight.jpg";

import first from "@/assest/image/image-delete/coverOne.jpg";
import second from "@/assest/image/image-delete/coverTwo.jpg";
import third from "@/assest/image/image-delete/coverThree.jpg";
import fourth from "@/assest/image/image-delete/coverFour.jpg";
import fifth from "@/assest/image/image-delete/coverFive.jpg";
import sixth from "@/assest/image/image-delete/coverSix.jpg";
import seventh from "@/assest/image/image-delete/coverSeven.jpg";
import { StaticImageData } from "next/image";

export interface Product {
  img: StaticImageData | string; 
  name: string;
  old: number;
  new: number;
  category: "new arrivals" | "best selling" | "top selling";
}

export const listCard: Product[] = [
  {
    img: cardOne,
    name: "Bvlgari Hedge Slide",
    old: 48750,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardTwo,
    name: "Bvlgari Serpenti",
    old: 52000,
    new: 48750,
    category: "best selling"
  },
  {
    img: cardThree,
    name: "Bvlgari B.zero1",
    old: 45000,
    new: 48750,
    category: "top selling"
  },
  {
    img: cardFour,
    name: "Bvlgari Divas' Dream",
    old: 55000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardFive,
    name: "Bvlgari Fiery",
    old: 60000,
    new: 48750,
    category: "best selling"
  },
  {
    img: cardSix,
    name: "Bvlgari Parentesi",
    old: 40000,
    new: 48750,
    category: "top selling"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
];

// export const catolouges: Product[] = [
//   {
//     img: first,
//     name: "Bvlgari Octo",
//     naira: 65000,
//     category: "top selling"
//   },
//   {
//     img: second,
//     name: "Bvlgari Lvcea",
//     naira: 53000,
//     category: "new arrivals"
//   },
//   {
//     img: third,
//     name: "Bvlgari Diva",
//     naira: 47000,
//     category: "best selling"
//   },
//   {
//     img: fourth,
//     name: "Bvlgari Bvlgari",
//     naira: 49000,
//     category: "top selling"
//   },
//   {
//     img: fifth,
//     name: "Bvlgari Solotempo",
//     naira: 51000,
//     category: "new arrivals"
//   },
//   {
//     img: sixth,
//     name: "Bvlgari Ergon",
//     naira: 44000,
//     category: "best selling"
//   },
//   {
//     img: seventh,
//     name: "Bvlgari Assioma",
//     naira: 56000,
//     category: "top selling"
//   },
//   {
//     img: first,
//     name: "Bvlgari Diagono",
//     naira: 48000,
//     category: "new arrivals"
//   },
// ];