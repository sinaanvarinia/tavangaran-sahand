import React from "react";
import { siteTexts } from "@/constants/index";
import Image from "next/image";
const History = () => {
  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col  gap-6 p-10">
        {/* text */}
        <div className=" ">
          <h1 className="text-4xl text-slate-700 my-7">
            {siteTexts.historyOfCompany.title}
          </h1>
          <p className="text-justify text-lg text-slate-500 leading-loose mb-3">
            {siteTexts.historyOfCompany.text}
          </p>
        </div>
        {/* image */}
        <Image
          className="bg-cover flex-initial rounded-xl mx-auto"
          width={500}
          height={200}
          src="/handshake.webp"
          alt="image of collaboration"
        />
      </div>
      <div className="p-10 ">
        <h2 className="text-2xl text-slate-700 my-7">
          {siteTexts.historyOfCompany.mostImportantActivities.title}
        </h2>
        <ol className="pr-7">
          {siteTexts.historyOfCompany.mostImportantActivities.textArray.map(
            (item, index) => (
              <li
                key={index}
                className="my-2 text-lg text-slate-500 list-decimal pr-3"
              >
                {item}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default History;
