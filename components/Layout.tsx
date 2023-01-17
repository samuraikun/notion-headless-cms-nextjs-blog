import { LayoutProps } from '@/types/types'
import React, { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col items-center max-w-2xl w-full mx-auto'>
        {/*  */}
        <Navbar />
        {/*  */}
        <main className='w-full pb-12 px-4'>{children}</main>
        {/*  */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
