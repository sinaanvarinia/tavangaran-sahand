'use client'
import React from "react";
import { contactUs } from "@/constants";


const Address = () => {
  return (
    <div className=" xl:w-1/3 lg:w-1/2 sm:w-2/3 w-full">
      {/* Address */}
      <div className="bg-white min-h-[360px]  p-12 text-slate-500 shadow-md my-12 rounded-3xl">
        <h3 className="text-xl mb-5">آدرس دفتر مرکزی:</h3>
        <div className="leading-9 ">
          تبریز - جاده سردرود - منطقه صنعتی غرب - کارخانه بنیان دیزل - گروه
          صنعتی توانگران سهند
          <ul className="text-slate-500 mt-5	">
            {contactUs.map((item) => (
              <li
                className="list-none  flex flex-wrap max-w-96 justify-between  leading-9 items-center"
                key={item.id}
              >
                <span className="md:hidden text-xl text-slate-600">
                  <item.icon />
                </span>
                <span className="max-md:hidden ">{item.title}</span>
                <span className=" text-slate-600  break-all">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Address;
