import React from "react";
import MemberOfBoard from "../memberOfBoard/MemberOfBoard";
import { siteTexts } from "@/constants";

const Board = () => {
  return (
    <div className="flex flex-col pb-10 container mx-auto">
      <h1 className="text-2xl font-bold p-10">{siteTexts.MembersOfBoard.title}</h1>
      <div className="flex flex-row gap-8 justify-center flex-wrap">
        {siteTexts.MembersOfBoard.members.map((item) => (
          <MemberOfBoard key={item.name}
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
