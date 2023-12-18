import { siteTexts } from '@/constants'
import Image from 'next/image';
import React from 'react'

const Vision = () => {
  return (
    <div className="container mx-auto">
      <div className="text-slate-700 p-10">
        <div>
          <h1 className="text-3xl mb-10">{siteTexts.vision.title}</h1>
          <p className="text-lg leading-loose text-justify">
            {siteTexts.vision.text}
          </p>
        </div>

        <div className="flex sm:flex-row flex-col w-full">
          <div className=' flex flex-col m-auto  gap-8 py-12 items-center justify-center'>
            <h3 className="text-xl text-center">
              {siteTexts.vision.slogan1}
            </h3>
            <h3 className="text-xl text-center">
              {siteTexts.vision.slogan2}
            </h3>
          </div>
          {/* <div className="flex-grow  relative w-1/3">
            <Image
              src="/vision-slogan.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Vision