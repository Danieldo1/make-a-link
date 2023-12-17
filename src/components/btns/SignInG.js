'use client'
import React from 'react'
import Image from 'next/image'
import {signIn} from 'next-auth/react'

const SignInG = () => {


  return (
    <button 
    onClick={() => signIn('google')}
    className='bg-indigo-500 text-white items-center justify-center flex px-6 py-4 rounded-lg mt-6 w-full'>
        <Image src='/google.svg' alt='Google Logo' width={20} height={20} className='mr-4' />
        Sign in with Google
    </button>
  )
}

export default SignInG