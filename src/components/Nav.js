import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <header className='bg-gray-50 py-4 px-4 shadow-lg'>
        <div className='max-w-7xl justify-between  flex mx-auto '>

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
      <Link href="/login">
        Login
      </Link>
      <Link href="/signup">
        Sign Up
      </Link>
    </nav>
        </div>
  </header>
  )
}

export default Nav