import { siteTexts } from "@/constants";
import React from "react";

const StrategyOfCompany = () => {
  return (
    <div className="container mx-auto text-slate-700">
      <div className="p-10 max-w-3xl">
        <h1 className="text-2xl pb-10">{siteTexts.strategyOfCompany.title}</h1>
        <ul className="text-lg leading-loose list-inside text-justify list-disc">
          {siteTexts.strategyOfCompany.textArray.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StrategyOfCompany;
