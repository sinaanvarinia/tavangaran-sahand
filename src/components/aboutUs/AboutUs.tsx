"use client";
import Image from "next/image";
import React from "react";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const AboutUs = () => {
  return (
    <section className="container my-9">
      <div className="shadow-xl flex flex-row p-5 ">
        {/* right */}
        <div className="right flex-1 items-center justify-center bg-cover bg-[url('/about.jpeg')] ">
          <h2 className="text-6xl text-center font-Titr p-8 text-[#9b9357] m-9 bg-slate-200 rounded inline-block opacity-80">
            <span> 🌍</span>
            <span className="m-9">درباره ما </span>
          </h2>
          {/* <Image src={"/about.jpeg"} alt="about image" width={400} height={400}/> */}
        </div>
        {/* left */}
        <div className="left flex-1 flex flex-col">
          <span className="text-5xl text-[#FBF2CE]">
            <RiDoubleQuotesR />{" "}
          </span>
          <p className="text-justify leading-9 p-7 text-lg text-slate-600">
            گروه صنعتی توانگران سهند از تابستان ۸۹ فعالیت خویش را در حوزه معدن و
            صنایع معدنی آغاز و بارویکرد تامین سنگ آهن مورد نیاز مجموعه های
            فولادی در شمال غرب به ويژه شرکت سرمایه گذاری گسترش فولاد تبریز اقدام
            به مطالعه، شناسایی و ثبت و بهره برداری از پتانسیل های آهنی در استان
            آذربایجان شرقی و استانهای همجوار نموده است. با گذشت نزدیک به پنج سال
            از آغاز فعالیت، حوزه فعالیت شرکت گسترش وسیعی یافت و علاوه بر ادامه
            کشف و بهره برداری معادن و محدوده های آهن در خصوص سایر معادن و محدوده
            های فلزی اعم از مس، طلا و تیتان و همچنین معادن غیر فلزی نظیر آهک،
            سیلیس و زغالسنگ و باریت برنامه ریزی منسجم طراحی و عملیاتی گردید.
            موفقیت حاصل در زمینه تملک معادن، فصل جدیدی در حوزه فعالیت های این
            شرکت در زمینه فرآوری مواد معدنی گشود که پروژه احداث و راه اندازی
            کارخانه فرآوری کنسانتره آهن و تیتان اسکندیان نقطه عطف این فعالیتها
            بوده است و به دنبال آن طرحهای در دست اقدام کنسانتره مس و آهن کلید
            خورد. گروه صنعتی توانگران سهند از تابستان ۸۹ فعالیت خویش را در حوزه
            معدن و صنایع معدنی آغاز و بارویکرد تامین سنگ آهن مورد نیاز مجموعه
            های فولادی در شمال غرب به ويژه شرکت سرمایه گذاری گسترش فولاد تبریز
            اقدام به مطالعه، شناسایی و ثبت و بهره برداری از پتانسیل های آهنی در
            استان آذربایجان شرقی و استانهای همجوار نموده است.
          </p>
          <span className="text-5xl self-end text-[#FBF2CE]">
            <RiDoubleQuotesL />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
