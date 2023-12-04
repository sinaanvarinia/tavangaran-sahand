import { siteTexts } from '@/constants'
import React from 'react'

const Mission = () => {
  return (
      <div className='container mx-auto text-late-700'>
          <div>
              <h1 className='text-2xl py-10 '>
                  {siteTexts.mission.title}
              </h1>
              <p className='text-lg leading-loose pb-10 text-justify'>
                  {siteTexts.mission.text}
              </p>
          </div>
      </div>
  )
}

export default Mission