"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";

export const Hero = () => {
  return (
    <div className="font-IranYekan text-white h-[calc(100vh-4rem)] bg-cover bg-black w-full  items-center justify-center  bg-gradient-to-b from-[#393226] to-30% to-[#000]">
      <div className="container justify-center m-auto flex flex-row py-20 ">
        {/* right */}
        <div className="flex text-lg sm:text-3xl text-center flex-col p-12 md:w-7/12 gap-10  items-center ">
          <h1 className="font-Titr  max-sm:text-3xl   text-6xl text-center leading-loose">
            گروه صنعتی توانگران سهند
          </h1>
          <Typewriter
            options={{
              strings: ["فرآوری", "استخراج", "اکتشاف"],
              autoStart: true,
              delay: 100,
              loop: true,
            }}
          />
          <Image className=" object-cover" src="/hero1.jpeg" width={300} height={200} alt="pic"/>
        </div>
        {/* left */}
        <div className="hidden sm:flex flex-col relative gap-5 justify-center items-center w-5/12 ">
          {/* logo animation */}
          <Image
            className="animate__slow animate__animated animate__bounceIn animate__delay-1s absolute top-[106px] lg:hidden"
            src="/logo.svg"
            width={335.7}
            height={139.73}
            alt="logo"
          />
          <Image
            className="animate__slow animate__animated animate__bounceIn animate__delay-1s absolute top-[106px] hidden lg:block"
            src="/heroLogo/mountain.svg"
            width={335.7}
            height={139.73}
            alt="logo"
          />
          <Image
            className="animate__infinite animate__slower animate__animated animate__rotateInDownLeft animate__delay-2s absolute  lg:top-[83px] xl:left-[245px] lg:left-[191px]  hidden lg:block "
            src="/heroLogo/ax.svg"
            width={74.1}
            height={70}
            alt="logo"
          />

          <Image
            className="animate__slow animate__animated animate__flipInY animate__delay-3s absolute w-[11.93px] h-[19.6px] lg:top-[142px] xl:left-[234px] lg:left-[180px] object-fit md:left-[127px] hidden lg:block"
            src="/heroLogo/dot.svg"
            width={11.93}
            height={19.6}
            alt="logo"
          />
          <Image
            className="animate__slow animate__animated animate__fadeInDown animate__delay-4s absolute w-[63.12px] h-[92.03px] lg:top-[156px] xl:left-[274px] lg:left-[220px] object-fit md:left-[169px] hidden lg:block"
            src="/heroLogo/river.svg"
            width={63.12}
            height={92.03}
            alt="logo"
          />
          {/* text tavangaran */}
          <h1 className="animate__animated max-lg:hidden animate__bounceInUp animate__slow animate__delay-4s absolute top-[280px]  flex flex-col gap-5 ">
            <div className="text-4xl">Tavangaran Sahand</div>
            <div>Industrial Group</div>
          </h1>
        </div>
      </div>
    </div>
  );
};
