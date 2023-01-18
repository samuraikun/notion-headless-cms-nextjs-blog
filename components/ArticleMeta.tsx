import { ArticleMetaProps } from '@/types/types'
import { getCover, getDate, getMultiSelect, getText } from '@/utils/property'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'


export const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
  return (
    <>
      {/* page cover */}
      <Image
        className='w-full max-w-screen-lg rounded-lg aspect-video my-4 object-cover'
        src={getCover(page.cover)}
        alt=''
        width={640}
        height={360}
        quality={50}
      />

      {/* page name */}
      <h1 className='my-8'>{getText(page.properties.name.title)}</h1>
      <div className='bg-gray-100 px-6 py-4 rounded text-sm text-gray-500'>
        <div className='grid grid-cols-3 gap-4'>
          {/* published */}
          <div className='col-span-1'>Published</div>
          <div className='col-span-2'>{getDate(page.properties.published.date)}</div>

          {/* author */}
          <div className='col-span-1'>Author</div>
          <div className='col-span-2'>{getText(page.properties.author.rich_text)}</div>

          {/* tags */}
          <div className='col-span-1'>Tags</div>
          <div className='col-span-2'>
            {/* change later */}
            {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
              <Link key={index} href={`/tags/${tag}`} className='text-gray-700 no-underline border-b border-solid border-gray-700 opacity-70 mr-3'>
                <span>{`#${tag}`}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleMeta
