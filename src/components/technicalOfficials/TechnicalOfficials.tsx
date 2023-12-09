import { siteTexts } from "@/constants";
import React from "react";
import Personel from "../personel/Personel";

const TechnicalOfficials = () => {
  return (
    <div className="">
      <h1 className="text-3xl p-10">
        {siteTexts.humanResources.technicalOfficials.title}
      </h1>
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
