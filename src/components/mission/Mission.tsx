import { siteTexts } from "@/constants";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className=" text-late-700 container">
      <div>
        <div className="flex justify-between items-center pr-8 text-center p-4">
          <h1 className="text-3xl font-bold py-10 ">{siteTexts.mission.title}</h1>
          <div className=" mt-4">
            <Image
              src="/mission.png"
              alt="mission image"
              width={600}
              height={300}
              className="rounded-full shadow-xl"
            />
          </div>
        </div>

        <p className="text-lg leading-loose py-10 text-justify">
          {siteTexts.mission.text}
        </p>
      </div>
    </div>
  );
};

export default Mission;
