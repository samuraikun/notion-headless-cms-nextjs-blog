import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Breadcrumb from './Breadcrumb'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleDarkMode = (checked: boolean) => {
    const isDarkMode = checked

    if (isDarkMode) setTheme('dark')
    else setTheme('light')
  }

  const isDarkMode = resolvedTheme === 'dark'

  return (
    <nav className='relative w-full flex items-center justify-between py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid w-full flex items-center justify-between px-6'>
        <div className='bg-grey-light rounded-t-md w-full' aria-label='breadcrumb'>
          <Link href='/' className='text-gray-500 hover:text-gray-600'>
            {siteConfig.title}
          </Link>
          {/* Breadcrumb */}
          <Breadcrumb />
        </div>
        {/* Toggle DarkMode UI */}
        {mounted && (
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        )}
      </div>
    </nav>
  )
}
