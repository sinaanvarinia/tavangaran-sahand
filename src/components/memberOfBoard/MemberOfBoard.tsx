import Image from 'next/image'
import React from 'react'

import { siteTexts } from '@/constants'

const MemberOfBoard = ({imgUrl,name,jobTitle}:{imgUrl:string,name:string,jobTitle:string}) => {
    return (
      <div className="bg-red-500 flex flex-col items-center w-[200px] text-slate-700 leading-loose">
        <Image src={imgUrl} alt="img" width={200} height={300} />
        <h2 className="text-xl">{name}</h2>
        <h3>{jobTitle}</h3>
      </div>
    );
}

export default MemberOfBoard