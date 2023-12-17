import React from 'react'
import Link from 'next/link'
import {  optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import LogOut from './btns/LogOut'
const Nav = async () => {
    const session = await getServerSession(optionsAuth)
    // console.log(session)

  return (
    <header className='bg-gray-50 py-4 px-4 shadow-lg'>
        <div className='max-w-7xl justify-between px-6 flex mx-auto '>
    <div className='flex items-center gap-4 md:px-8'>
      <Link href="/">
        Make-a-Link
      </Link>
      <nav className='flex gap-4 text-slate-500' >
        <Link href="/about">
          About
        </Link>
        <Link href="/pricing">
          Pricing
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
      </div>

    <nav className='flex gap-4 text-slate-500' >
        {!session && (
            <>
      <Link href="/login">
        Login
      </Link>
      <Link href="/login">
        Sign Up
      </Link>
            </>
        )}
        {!!session && (
            <>
            <Link href="/account" className='hover:text-black transition duration-300 ease-in'> 
                Hello, {session?.user?.name}
            </Link>
            <LogOut />
            </>
        )}
    </nav>
        </div>
  </header>
  )
}

export default Nav