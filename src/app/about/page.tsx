import AboutUs from "@/components/aboutUs/AboutUs";
import History from "@/components/companyHistory/History";
import ShareHolders from "@/components/shareHolders/ShareHolders";
import StrategyOfCompany from "@/components/strategyOfCompany/StrategyOfCompany";
import Image from "next/image";
import React from "react";

const aboutPage = () => {
  return (
    <div className="flex flex-col m-auto items-center ">
      <AboutUs />
      <div className="bg-gray-50 flex justify-center w-full">
        <History />
      </div>

      <div className=" h-80 w-full relative">
        <Image
          src="/strategy.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover" 
          className="" 
        />
      </div>
      <StrategyOfCompany />
      <ShareHolders/>

      

      
    </div>
  );
};

export default aboutPage;
