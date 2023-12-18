import AboutUs from "@/components/aboutUs/AboutUs";
import Board from "@/components/board/Board";
import History from "@/components/companyHistory/History";
import Loading from "@/components/loading/Loading";
import LogoHovering from "@/components/logoHovering/LogoHovering";
import MemberOfBoard from "@/components/memberOfBoard/MemberOfBoard";
import Mentors from "@/components/mentors/Mentors";
import Mission from "@/components/mission/Mission";
import OfficePersonel from "@/components/officePersnell/OfficePersonel";
import PicLoading from "@/components/picLoading/PicLoading";
import ShareHolders from "@/components/shareHolders/ShareHolders";
import StrategyOfCompany from "@/components/strategyOfCompany/StrategyOfCompany";
import SubjectOfActivity from "@/components/subjectOfActivity/SubjectOfActivity";
import TechnicalOfficials from "@/components/technicalOfficials/TechnicalOfficials";
import TechnicalPersonel from "@/components/technicalPersonel/TechnicalPersonel";
import Values from "@/components/values/Values";
import Vision from "@/components/vision/Vision";
import { siteTexts } from "@/constants";
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
