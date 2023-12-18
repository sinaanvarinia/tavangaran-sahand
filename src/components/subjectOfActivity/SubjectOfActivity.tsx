import { siteTexts } from "@/constants";
import React from "react";

const SubjectOfActivity = () => {
  return (
    <div className=" rounded-md pb-10 text-slate-100">
      <div className="container mx-auto ">
        <div>
          <h1 className="text-3xl md:pr-10 px-4 font-bold  py-10">{siteTexts.subjectOfActivity.title}</h1>
          <ul className="text-lg leading-loose list-disc px-6 md:px-20">{siteTexts.subjectOfActivity.textArray.map(item => (<li key={item} className=" leading-10 text-justify">{item}</li>))}</ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectOfActivity;
