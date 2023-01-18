import { CardProps } from '@/types/types'
import { getCover, getDate, getMultiSelect, getText } from '@/utils/property'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`} className='flex justify-center dark:bg-slate-800'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid'>
        {/* image */}
        <div>
          <Image
            className='w-full static h-auto object-cover'
            src={getCover(page.cover)}
            alt=''
            width={400}
            height={225}
            quality={30}
          />
        </div>

        {/* title & date */}
        <div className='px-6 pt-4'>
          <h2 className='text-base font-medium mb-3'>{getText(page.properties.name.title)}</h2>
          <p className='text-gray-700 text-xs'>{getDate(page.properties.published.date)}</p>
        </div>

        {/* tag */}
        <div className='px-6 pb-4'>
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <span
              key={index}
              className='text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2 dark:bg-slate-500'
            >
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Card
