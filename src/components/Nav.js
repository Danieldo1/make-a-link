import React from 'react'
import Link from 'next/link'
import {  optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import LogOut from './btns/LogOut'
import Image from 'next/image'
import {Home} from 'lucide-react'
const Nav = async () => {
    const session = await getServerSession(optionsAuth)
   

  return (
    <header className='bg-gray-50 py-4 px-4 shadow-lg'>
        <div className='max-w-7xl justify-between px-6 flex mx-auto '>
    <div className='flex items-center justify-center gap-4 md:px-8'>
      <Link href="/" className='text1 text-xl flex items-center justify-center'>
        <Image src='/unilink.svg' alt='Unilink' width={40} height={40} />
        UniLinks
      </Link>
      {/* <nav className='flex gap-4 text-slate-500' >
        <p onClick={() => scrollTo({top: 1000, behavior: 'smooth'})} className='hover:text-black transition duration-300 ease-in'>
          About
        </p>
      </nav> */}
      </div>

    <nav className='flex gap-4 text-slate-500 border bg-gray-100 rounded-lg p-2 items-center justify-center hover:text-black transition duration-300 ease-in' >
        {!session && (
            <>
      <Link href="/login" className='hover:text-black flex transition duration-300 ease-in'>
        <p>Login</p>
        <p className='hidden md:block px-1'> or </p>
        <p className='hidden md:block'> Signup</p>
      </Link>
            </>
        )}
        {!!session && (
            <div className='flex gap-4 text-slate-500 justify-center items-center'>
            <Link href="/account" className='hover:text-black transition duration-300 ease-in'> 
                <span className='hidden md:block'>Hello, {session?.user?.name}</span>
                <span className='md:hidden'><Home className='w-6 h-6' /></span>
            </Link>
            <LogOut />
            </div>
        )}
    </nav>
        </div>
  </header>
  )
}

export default Nav