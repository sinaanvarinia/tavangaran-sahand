import React from "react";
import MemberOfBoard from "../memberOfBoard/MemberOfBoard";
import { siteTexts } from "@/constants";
import Image from "next/image";

const Board = () => {
  return (
    <div className="flex flex-col pb-10 container mx-auto">
      <div className="flex justify-between my-20">
        <h1 className="text-3xl font-bold p-10">
          {siteTexts.MembersOfBoard.title}
        </h1>
        <Image
          src="/board.svg"
          alt="Picture"
          width={500}
          height={200}
          objectFit="cover"
          className=""
        />
      </div>
      <div className="flex flex-row gap-8 justify-center flex-wrap">
        {siteTexts.MembersOfBoard.members.map((item) => (
          <MemberOfBoard
            key={item.name}
            imgUrl={item.imgUrl}
            name={item.name}
            jobTitle={item.jobTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
