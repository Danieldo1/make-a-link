'use client'
import React from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

const LogOut = ({
  className='group flex items-center gap-1 group-hover:transition transition-2 duration-300 ease-in group-hover:ease-in group-hover:duration-300',
  width=25,
  height=25
}) => {
  return (
   <button
   onClick={() => {
       signOut()
   }}
   className={className}
   >
    <Image src='/logout.svg' alt='Log Out' width={width} height={height} className=' rotate-180 hover:transition group-hover:ease-in group-hover:duration-300 ' />
    <span className='hidden hover:transition group-hover:ease-in group-hover:duration-300 group-hover:flex group-hover:text-black'>Log Out</span>
   </button>
  )
}

export default LogOut