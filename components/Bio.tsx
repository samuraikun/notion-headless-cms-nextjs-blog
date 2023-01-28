import { siteConfig } from '@/site.config'
import Image from 'next/image'
import React, { FC } from 'react'

const Bio = () => {
  return (
    <div className='flex items-center'>
      <Image
        className='flex-shrink-0 mb-3 mr-3 rounded-full w-14 h-14'
        src={require('../public/profile_logo.png')}
        alt='Profile'
      />
      <p className="text-base leading-7">
        Author: <b className="font-semibold">Yuichi Kojima</b>
        <br></br>
        Twitter:{" "}
        <a href={siteConfig.twitterUrl} className='hover:underline'>
          YuxBeta
        </a>
        <br></br>
        Github:{" "}
        <a href={siteConfig.githubUrl} className='hover:underline'>samuraikun</a>
      </p>
    </div>
  )
}

export default Bio
