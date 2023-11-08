'use client'
import React from "react";
import { contactUs } from "@/constants";
import Image from "next/image";

const Address = () => {
  return (
    <section className=" w-full">
      <div className="container  flex flex-col gap-4 text-center md:flex-row mx-auto">
        {/* Address */}
        <div className="md:w-1/2 p-12 text-slate-500 shadow-md my-12 rounded-3xl">
          <h3 className="text-xl mb-5">آدرس دفتر مرکزی:</h3>
          <p className="leading-9">
            {" "}
            تبریز - جاده سردرود - منطقه صنعتی غرب - کارخانه بنیان دیزل - گروه
            صنعتی توانگران سهند
            <div className="text-slate-500 mt-5 ">
              {contactUs.map((item) => (
                <li
                  className="list-none flex flex-ror gap-4 justify-between  leading-9 items-center"
                  key={item.id}
                >
                  <span className="md:hidden text-xl text-slate-600">
                    <item.icon />
                  </span>
                  <span className="max-md:hidden">{item.title}</span>
                  <span className=" text-slate-600">
                    {" "}
                    {item.value}
                  </span>
                </li>
              ))}
            </div>
          </p>
        </div>
        {/* map */}
        <div className="md:w-1/2 justify-center items-center my-12">
          <Image src="/map.png" alt="map" width={700} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Address;
