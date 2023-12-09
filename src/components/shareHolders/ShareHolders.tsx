import { siteTexts } from "@/constants";
import Image from "next/image";
import React from "react";

const ShareHolders = () => {
  return (
    <div className=" text-slate-700">
      <div className="container flex flex-col gap-4 items-center py-10">
        <h2 className="text-2xl">{siteTexts.shareHolders.title}</h2>
        <a href="https://www.fgkinv.com" target="blank">
          <Image
            src={siteTexts.shareHolders.text[0].imgUrl}
            alt="shareHolderLogo"
            width={200}
            height={200}
            className=""
          />
        </a>
        <h3 className="text-xl">{siteTexts.shareHolders.text[0].name}</h3>
      </div>
    </div>
  );
};

export default ShareHolders;
