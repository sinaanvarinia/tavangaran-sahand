import Board from "@/components/board/Board";
import Mentors from "@/components/mentors/Mentors";
import OfficePersonel from "@/components/officePersnell/OfficePersonel";
import TechnicalOfficials from "@/components/technicalOfficials/TechnicalOfficials";
import TechnicalPersonel from "@/components/technicalPersonel/TechnicalPersonel";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col mt-10 justify-around items-center gap-10">
        <Board />
        <Mentors />
        <TechnicalOfficials />
        <TechnicalPersonel />
        <OfficePersonel />
      </div>
    </>
  );
};

export default page;
