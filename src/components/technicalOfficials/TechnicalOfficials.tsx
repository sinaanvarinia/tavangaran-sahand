import { siteTexts } from "@/constants";
import React from "react";
import Personel from "../personel/Personel";
import Image from "next/image";

const TechnicalOfficials = () => {
  return (
    <div className="flex flex-col pb-10 container mx-auto">
      <div className="flex justify-between my-20">
        <h1 className="text-3xl p-10 container mx-auto">
          {siteTexts.humanResources.technicalOfficials.title}
        </h1>
        <Image
          src="/technical.svg"
          alt="Picture of the author"
          width={500}
          height={200}
          objectFit="contain"
          className=""
        />
      </div>
      <ul className="flex flex-wrap p-10 justify-center gap-8 ">
        {siteTexts.humanResources.technicalOfficials.members.map(
          (item, index) => (
            <li className="" key={index}>
              <Personel
                imgUrl={item.imgUrl}
                name={item.name}
                jobTitle={item.job}
                degreeOfKnowledge={item.degreeOfKnowledge}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TechnicalOfficials;
