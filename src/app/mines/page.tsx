import { minesConstants } from "@/constants";
import React from "react";

const minesPage = () => {
  return (
    <section className="w-full m-auto flex justify-center items-center min-h-screen">
      <div className="container p-5">
        <h1 className="p-5  text-center text-4xl font-bold rounded">
          معادن و محدوده های شناسایی و اکتشاف شده شرکت
        </h1>
        <h2 className="p-3 text-dark text-center">
          {minesConstants.mineTitle}
        </h2>
        <ol className="lh-lg">
          {minesConstants.mine.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
        <h2 className="p-3 text-dark text-center">
          {minesConstants.regionTitle}
        </h2>
        <ol className="lh-lg">
          {minesConstants.region.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default minesPage;
