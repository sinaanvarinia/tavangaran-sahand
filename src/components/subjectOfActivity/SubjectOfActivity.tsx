import { siteTexts } from "@/constants";
import React from "react";

const SubjectOfActivity = () => {
  return (
    <div className="  bg-slate-50 rounded-md pb-10">
      <div className="container mx-auto ">
        <div>
          <h1 className="text-2xl md:pr-10 px-4 font-bold text-slate-700 py-10">{siteTexts.subjectOfActivity.title}</h1>
          <ul className="text-lg leading-loose list-disc px-6 md:px-20 text-slate-500">{siteTexts.subjectOfActivity.textArray.map(item => (<li key={item} className=" leading-10 text-justify">{item}</li>))}</ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectOfActivity;
