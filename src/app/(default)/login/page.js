

import React from 'react'

import SignInG from '@/components/btns/SignInG'


const LoginPage = async () => {

  return (
    <div className='min-h-[82vh] items-center flex flex-col justify-center'>
        <div className='bg-white border p-8 min-w-md mx-auto  rounded-lg '>
            <h1 className="text-4xl font-bold text-center">Sign in</h1>
            <p className='text-slate-500 text-center'>To get started</p>

            <SignInG />
        </div>
    </div>
  )
}

export default LoginPage