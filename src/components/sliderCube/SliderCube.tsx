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
import { awards } from "@/constants";

export default function SliderCube() {
    return (
      <div className="relative h-[500px] w-full ">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 100,
            shadowScale: 0.94,
          }}
          pagination={false}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper"
        >
          {awards.map((item) => (
            <>
              <SwiperSlide key={item.name}>
                <Image
                  width={500}
                  height={500}
                  alt="slider"
                  src={item.url}
                  className="rounded-xl"
                />
              </SwiperSlide>
            </>
          ))}
          {/* <SwiperSlide>
            <Image
              width={500}
              height={500}
              alt="slider"
              src="/awards/1-award.png"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              alt="slider"
              src="/awards/2-award.png"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              alt="slider"
              src="/awards/3-award.png"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              alt="slider"
              src="/awards/4-award.png"
              className="rounded-xl "
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    );
}
