"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import imgOne from "@/assest/image/image1.jpg";
import imgTwo from "@/assest/image/image2.jpg";
import imgThree from "@/assest/image/image3.jpg";
import imgFour from "@/assest/image/image4.jpg";
import imgFive from "@/assest/image/image5.jpg";
import imgSix from "@/assest/image/image6.jpg";
import rotateImg from "@/assest/image/Group 1000005945.svg";

import styles from "./styles.module.scss";
// import ImageCarousel from "./ImageCarousel";

const images = [imgOne, imgTwo, imgFive, imgSix, imgFour, imgThree];

const ImageCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <ImageCarousel />
    <div className={`${styles.content} ${isVisible ? styles.slideIn : ""}`}>
      <Image src={rotateImg} alt="rotate" className={styles.rotate} />
      <div className={styles.carousel}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className={styles.card}>
            <Image src={img} alt={`product-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;


// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import Image, { StaticImageData } from "next/image";
// import styles from "./styles.module.scss";
// import imgOne from "@/assest/image/image1.jpg";
// import imgTwo from "@/assest/image/image2.jpg";
// import imgThree from "@/assest/image/image3.jpg";
// import imgFour from "@/assest/image/image4.jpg";
// import imgFive from "@/assest/image/image5.jpg";
// import imgSix from "@/assest/image/image6.jpg";

// const images: StaticImageData[] = [
//   imgOne,
//   imgTwo,
//   imgThree,
//   imgFour,
//   imgFive,
//   imgSix,
// ];

// export default function FeaturedProduct(): JSX.Element {
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const totalWidth = track.scrollWidth / 2;

//     const anim = gsap.to(track, {
//       x: `-=${totalWidth}`,
//       duration: 30,
//       ease: "linear",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x: string) => parseFloat(x) % totalWidth),
//       },
//     });

//     return () => {
//       anim.kill();
//     };
//   }, []);

//   const allImages = [...images, ...images];

//   return (
//     <div className={styles.carouselOuter}>
//       <div className={styles.carouselTrack} ref={trackRef}>
//         {allImages.map((imgSrc, i) => (
//           <div className={styles.carouselItem} key={i}>
//             <Image src={imgSrc} alt={`img-${i}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import ImageCarousel from "./ImageCarousel";

// const FeaturedProduct = () => {
//   return (
//     <div>
//       <ImageCarousel />
//     </div>
//   );
// };

// export default FeaturedProduct;

// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import imgOne from "@/assest/image/image1.jpg";
// import imgTwo from "@/assest/image/image2.jpg";
// import imgThree from "@/assest/image/image3.jpg";
// import imgFour from "@/assest/image/image4.jpg";
// import imgFive from "@/assest/image/image5.jpg";
// import imgSix from "@/assest/image/image6.jpg";

// import Image from "next/image";

// const images: { src: string }[] = [
//   imgOne,
//   imgTwo,
//   imgThree,
//   imgFour,
//   imgFive,
//   imgSix,
//   imgSix,
// ];

// const ImageCarousel: React.FC = () => {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div
//       className="w-full max-w-6xl mx-auto py-10"
//       onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
//       onMouseLeave={() => swiperRef.current?.autoplay?.start()}
//     >
//       <Swiper
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         loop={true}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         speed={2000}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: false,
//         }}
//         pagination={false}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} style={{ width: "300px" }}>
//             <Image
//               src={image.src}
//               alt={`Slide ${index + 1}`}
//               width={300}
//               height={256}
//               className="rounded-xl object-cover w-full h-64"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageCarousel;
