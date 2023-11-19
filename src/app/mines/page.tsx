import { minesConstants } from "@/constants";
import Image from "next/image";
import React from "react";
import { GiGoldMine } from "react-icons/gi";
import { MdOutlineLandslide } from "react-icons/md";

const minesPage = () => {
  return (
    <section className="w-full m-auto flex justify-center items-center">
      <div className="container">
        <h1 className="p-5 text-slate-800 text-center lg:text-4xl text-2xl leading-loose font-bold mb-6">
          معادن و محدوده های شناسایی و اکتشاف شده شرکت
        </h1>

        {/* mines */}
        <div className="flex">
          <div className="w-full md:w-1/2">
            <h2 className="p-3 md:text-xl text-slate-700 text-center text-xl flex items-center gap-4 my-3">
              <GiGoldMine />
              {minesConstants.mineTitle}
            </h2>

            <ul className="text-xs text-slate-600 mr-9  w-full">
              {minesConstants.mine.map((item) => (
                <li
                  key={item.id}
                  className="even:bg-slate-50 leading-loose sm:leading-loose md:leading-[3] list-disc w-full"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className=" hidden md:flex md:w-1/2">
            <Image
              className="object-cover shadow-2xl rounded-tr-[200px] rounded-bl-[200px]"
              src="/mines/2.jpg"
              alt="pic"
              width={600}
              height={400}
            />
          </div>
        </div>
        {/*end of mines */}

        {/* regions */}
        <div className="flex flex-row-reverse mb-20">
          <div className="w-full md:w-1/2">
            <h2 className="p-3 md:text-xl text-slate-700 text-center text-xl flex items-center gap-4 my-3">
              <MdOutlineLandslide /> {minesConstants.regionTitle}
            </h2>
            <div>
              <ul className="text-xs text-slate-600 mr-9">
                {minesConstants.region.map((item) => (
                  <li
                    className="even:bg-slate-50 list-disc  w-full leading-loose md:leading-[3] "
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" hidden md:flex md:w-1/2">
            <Image
              className=" object-cover shadow-2xl rounded-tr-[200px] rounded-bl-[200px]"
              src="/mines/1.jpg"
              alt="pic"
              width={800}
              height={400}
            />
          </div>
        </div>
        {/*end of regions */}
      </div>
    </section>
  );
};

export default minesPage;
