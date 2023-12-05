import Image from "next/image";
import React from "react";

const MemberOfBoard = ({
  imgUrl,
  name,
  jobTitle,
}: {
  imgUrl: string;
  name: string;
  jobTitle: string;
}) => {
  return (
    <div className=" flex flex-wrap flex-col border rounded shadow-sm text-slate-700 leading-loose justify-center items-center">
      <Image
        src={imgUrl}
        alt="img"
        width={200}
        height={300}
        className=" object-cover flex-grow"
      />
      <h2 className="text-xl my-4">{name}</h2>
      <h3 className="text-center flex-wrap mb-2">{jobTitle}</h3>
    </div>
  );
};

export default MemberOfBoard;
