import React from 'react'

const Spinner = () => {
  return (
    <div className='bg-white fixed inset-0 z-40 flex h-screen w-screen place-items-center justify-center'>
      <div className='z-50 h-12 w-12 animate-spin rounded-full border-4 border-blue-400 border-t-transparent opacity-100'></div>
    </div>
  )
}

export default Spinner
