import AboutUs from "@/components/aboutUs/AboutUs";
import Board from "@/components/board/Board";
import History from "@/components/companyHistory/History";
import MemberOfBoard from "@/components/memberOfBoard/MemberOfBoard";
import Mentors from "@/components/mentors/Mentors";
import Mission from "@/components/mission/Mission";
import OfficePersonel from "@/components/officePersnell/OfficePersonel";
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
    <>
      {/* <AboutUs /> */}
      {/* <History /> */}

      {/* <div className=" h-80 w-full relative">
        <Image
          src="/activity.webp"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover" 
          className="" 
        />
      </div> */}
      {/* <SubjectOfActivity /> */}

      {/* <div className="flex  md:p-20 p-5 bg-center md:bg-cover  flex-row justify-end  bg-[url('/activity.webp')]">
        <div className="container md:w-2/3 w-full opacity-80 md:opacity-100">
          <SubjectOfActivity />
        </div>
      </div> */}

      {/* <div className="w-full h-[350px] bg-center md:bg-cover bg-[url('/vision.jpg')]" /> */}
      {/* <Vision /> */}
      {/* <Mission/> */}
      {/* <Values/> */}
      {/* <StrategyOfCompany /> */}
      {/* <Board/> */}
      {/* <ShareHolders/> */}

      {/* <Mentors /> */}
      {/* <TechnicalOfficials/> */}
      {/* <TechnicalPersonel/> */}
      <OfficePersonel/>
    </>
  );
};

export default aboutPage;
