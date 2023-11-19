import AboutUs from "@/components/aboutUs/AboutUs";
import Address from "@/components/address/Address";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <section className="bg-slate-50 w-full flex justify-center">
        <div className="max-w-[1000px] ">
          <h1 className="text-4xl text-slate-800 my-10">درباره ما</h1>
          <p className=" text-slate-500 m-6 leading-[3] text-justify ">
            گروه صنعتی توانگران سهند، با سرمايه ثبتی 100 ميليارد ريال فعاليت خود
            در حوزه معدن را با هدف تامين سنگ آهن و ساير مواد معدنی مورد نياز
            کارخانجات فولاد سازی منطقه، بويژه گسترش فولاد تبريز در سال 1385آغاز
            نموده است. فعاليت اصلی اين گروه شامل: پی جويی و اکتشاف، استخراج،
            خردايش ، دانه بندی و پرعيار سازی مواد معدنی (بويژه سنگ آهن،
            تيتانيوم، مس و طلا) و احداث واحدهای فرآوری و توليد کنسانتره مواد
            معدنی فوق  مي باشد. همچنين تامين مواد معدنی غيرفلزی مورد نياز صنايع
            فولاد و فرّو آلياژ، نظير سيليس، زغال سنگ، سنگ آهک و نيز سنگهای
            تزئينی و ساختمانی و باريت جزو ديگر فعاليت های شرکت می باشد و در اين
            راستا معادن ارزشمندي را شناسايي، ثبت و به بهره برداری رسانده است.
            ارائه خدمات فنی و مهندسي همچون: سنجش از دور، پی جويی و اکتشاف،
            مطالعات ژئوفيزيک و ژئوشيمي، طراحي، استخراج، فرآوری و همچنين تامين
            مواد اوليه صنايع فولادی در دستور کار اين شرکت قرار دارد
          </p>
        </div>
      </section>

      <Address />
    </main>
  );
}
