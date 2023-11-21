"use client"

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCube, Pagination,Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SliderCube() {
    return (
      <div className="relative h-[500px] w-full">
        <Swiper
          autoplay={{
            delay: 4700,
            disableOnInteraction: false,
          }}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          
          pagination={false}
          modules={[EffectCube, Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image  width={500} height={8000} alt="slider" src="/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} alt="slider" src="/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={500} height={500} alt="slider" src="/3.jpg" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    );
}
