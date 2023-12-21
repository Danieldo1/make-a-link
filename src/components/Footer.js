import React from 'react'
import Image from 'next/image'

const Footer = () => {
    function getCurrentYear() {
        return new Date().getFullYear();
      }
      const year = getCurrentYear();
  return (
    <div className='bg-black w-full '>
        <div className='flex justify-center items-center '>
        <Image src='/unilink.svg' alt='unilink' width={40} height={40} className='invert' />
        <h1 className='text-3xl text-center text-white py-4 text1'>UniLinks</h1>
        </div>
        <p className='text-center text-white/40'> © {year} UniLinks.All Rights Reserved</p>
    </div>
  )
}

export default Footer