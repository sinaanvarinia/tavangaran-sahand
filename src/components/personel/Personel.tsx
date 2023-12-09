import Image from "next/image";
import React from "react";
import { BsPersonSquare } from "react-icons/bs";

const Personel = ({
  imgUrl,
  name,
  jobTitle,
  degreeOfKnowledge,
}: {
  imgUrl: any;
  name: string;
  jobTitle: string;
  degreeOfKnowledge: string;
}) => {
  return (
    <div className="w-[250px] h-[500px] flex flex-wrap flex-col justify-between border rounded-lg shadow-lg text-slate-700 leading-loose items-center">
      <div className="m-auto ">
        {imgUrl === "" ? (
          <i className="text-9xl text-slate-400 m-auto">
            <BsPersonSquare />
          </i>
        ) : (
          <Image
            src={imgUrl}
            alt="img"
            width={150}
            height={200}
            className="object-cover flex-grow flex-shrink"
          />
        )}
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl my-4">{name}</h2>
        <h3 className="text-center flex-wrap md:mb-2">{jobTitle}</h3>
        <h3 className="text-center flex-wrap mb-2 break-words">
          {degreeOfKnowledge}
        </h3>
      </div>
    </div>
  );
};

export default Personel;
