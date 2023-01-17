import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='relative w-full flex flex-wrap items-center justify-between py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
        <div className='bg-grey-light rounded-t-md w-full' aria-label='breadcrumb'>
          <Link href='/' className='text-gray-500 hover:text-gray-600'>
            {siteConfig.title}
          </Link>
          {/* Breadcrumb */}
        </div>
      </div>
    </nav>
  )
}
