"use client";
import Image from "next/image";
import React from "react";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const AboutUs = () => {
  return (
    <section className="container my-9" id="about">
      <div className="relative shadow-xl flex lg:flex-row flex-col ">
        {/* right */}
        
        <div className="right flex-1 items-center justify-center bg-cover bg-[url('/about.jpeg')] ">
        <video src="/4.mp4" autoPlay loop  />
        </div>
        {/* left */} 
        <div className="absolute top-0 flex-1 flex flex-col">
          <h2 className="lg:text-6xl text-center font-Titr lg:p-8 text-[#9b9357] lg:m-9 bg-slate-200 rounded  opacity-70">
            <span> 🌍</span>
            <span className="lg:m-9">درباره ما </span>
          </h2>
          <span className="lg:text-5xl text-[#FBF2CE] leading-3 mt-4">
            <RiDoubleQuotesR />{" "}
          </span>
          <p className="text-justify lg:leading-9 px-7 text-sm lg:text-lg text-slate-300 ">
            گروه صنعتی توانگران سهند از تابستان ۸۵ فعالیت خویش را در حوزه معدن و
            صنایع معدنی آغاز و بارویکرد تامین سنگ آهن مورد نیاز مجموعه های
            فولادی در شمال غرب به ويژه شرکت سرمایه گذاری گسترش فولاد تبریز اقدام
            به مطالعه، شناسایی و ثبت و بهره برداری از پتانسیل های آهنی در استان
            آذربایجان شرقی و استانهای همجوار نموده است. با گذشت نزدیک به ۱۷ سال
            از آغاز فعالیت، حوزه فعالیت شرکت گسترش وسیعی یافت و علاوه بر ادامه
            کشف و بهره برداری معادن و محدوده های آهن در خصوص سایر معادن و محدوده
            های فلزی اعم از مس، طلا و تیتان و همچنین معادن غیر فلزی نظیر آهک،
            سیلیس و زغالسنگ و باریت برنامه ریزی منسجم طراحی و عملیاتی گردید.
            موفقیت حاصل در زمینه تملک معادن، فصل جدیدی در حوزه فعالیت های این
            شرکت در زمینه فرآوری مواد معدنی گشود که پروژه احداث و راه اندازی
            کارخانه فرآوری کنسانتره آهن و تیتان اسکندیان نقطه عطف این فعالیتها
            بوده است و به دنبال آن طرحهای در دست اقدام کنسانتره مس و آهن کلید
            خورد.
          </p>
          <span className="lg:text-5xl leading-3 self-end text-[#FBF2CE]">
            <RiDoubleQuotesL />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
