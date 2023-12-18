// "use client"

import Address from "@/components/address/Address";
import { Hero } from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Map from "@/components/map/Map";
import Mission from "@/components/mission/Mission";
import Slider from "@/components/slider/Slider";
import SliderCube from "@/components/sliderCube/SliderCube";
import SubjectOfActivity from "@/components/subjectOfActivity/SubjectOfActivity";
import Values from "@/components/values/Values";
import Vision from "@/components/vision/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center font-IranYekan">
      <Hero />
      <Intro />
      <div className="flex w-full md:p-20 p-5 bg-center md:bg-cover  flex-row justify-end  bg-[url('/activity.webp')]">
        <div className="container md:w-1/2 w-full opacity-80 md:opacity-100">
          <SubjectOfActivity />
        </div>
      </div>

      <div className=" ">
        
        <div className="">
          <Mission />
        </div>
      </div>

      <div className="w-full h-[350px] bg-center md:bg-cover bg-[url('/vision.jpg')]" />
      <div className="w-full bg-white">
        <Vision />
      </div>

      <div className="flex-1 text-white w-full pt-4 bg-[url('/values.jpg')]  bg-cover">
        {/* <Image src="/values.jpg" alt="values image" width={600} height={300} /> */}
        <Values />
      </div>

      {/* <Slider /> */}

      {/* <div className="m-auto flex flex-col justify-center items-center h-screen bg-gray-200 opacity-70">
        <Loading />
        <PicLoading/>
        <div>Loading...</div>
      </div> */}
      {/* <LogoHovering/> */}
      {/* <Map/> */}
    </main>
  );
}
