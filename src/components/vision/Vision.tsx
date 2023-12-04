import { siteTexts } from '@/constants'
import React from 'react'

const Vision = () => {
  return (
    <div className="container mx-auto bg-white">
      <div className="text-slate-700 p-10">
        <h1 className="text-2xl mb-10">{siteTexts.vision.title}</h1>
        <p className="text-lg leading-loose text-justify">{siteTexts.vision.text}</p>
        <h3 className="text-xl py-20 text-center">{siteTexts.vision.slogan1}</h3>
        <h3 className="text-xl py-20 text-center">{siteTexts.vision.slogan2}</h3>
      </div>
    </div>
  );
}

export default Vision