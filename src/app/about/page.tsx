import AboutUs from "@/components/aboutUs/AboutUs";
import History from "@/components/companyHistory/History";
import MemberOfBoard from "@/components/memberOfBoard/MemberOfBoard";
import Mission from "@/components/mission/Mission";
import StrategyOfCompany from "@/components/strategyOfCompany/StrategyOfCompany";
import SubjectOfActivity from "@/components/subjectOfActivity/SubjectOfActivity";
import Values from "@/components/values/Values";
import Vision from "@/components/vision/Vision";
import React from "react";

const aboutPage = () => {
  return (
    <div className="">
      {/* <History /> */}
      {/* <SubjectOfActivity /> */}
      {/* <Vision/> */}
      {/* <Mission/> */}
      {/* <Values/> */}
      {/* <StrategyOfCompany /> */}
      <MemberOfBoard imgUrl="/memberOfBoard/barzgar.jpg" name="mahdiye barzgar" jobTitle="modiramel" />
      {/* <AboutUs /> */}
    </div>
  );
};

export default aboutPage;
