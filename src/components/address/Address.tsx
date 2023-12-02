'use client'
import React from "react";
import { contactUs } from "@/constants";
import Image from "next/image";
import Map from "../map/Map";

const Address = () => {
  return (
    <section className="  ">
      <div className="  ">
        {/* Address */}
        <div className="bg-white min-h-[360px]  p-12 text-slate-500 shadow-md my-12 rounded-3xl">
          <h3 className="text-xl mb-5">آدرس دفتر مرکزی:</h3>
          <div className="leading-9">
            تبریز - جاده سردرود - منطقه صنعتی غرب - کارخانه بنیان دیزل - گروه
            صنعتی توانگران سهند
            <ul className="text-slate-500 mt-5	">
              {contactUs.map((item) => (
                <li
                  className="list-none  flex flex-ror max-w-96 justify-between  leading-9 items-center"
                  key={item.id}
                >
                  <span className="md:hidden text-xl text-slate-600">
                    <item.icon />
                  </span>
                  <span className="max-md:hidden ">{item.title}</span>
                  <span className=" text-slate-600 ">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
       
       
      </div>
    </section>
  );
};

export default Address;
