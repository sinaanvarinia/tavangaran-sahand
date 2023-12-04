import { siteTexts } from "@/constants";
import React from "react";

const SubjectOfActivity = () => {
  return (
    <div className="bg-slate-100 pb-10">
      <div className="container mx-auto ">
        <div>
          <h1 className="text-2xl pr-4 font-bold text-slate-700 py-10">{siteTexts.subjectOfActivity.title}</h1>
          <ul className="text-lg leading-loose list-disc pr-10 text-slate-500">{siteTexts.subjectOfActivity.textArray.map(item => (<li key={item} className="">{item}</li>))}</ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectOfActivity;
