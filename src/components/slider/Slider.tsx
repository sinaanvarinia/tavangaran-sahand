"use client";

import React from "react"; // Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/1.jpg" width={1014} height={800} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
