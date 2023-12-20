

import React from 'react'

import SignInG from '@/components/btns/SignInG'


const LoginPage = async () => {

  return (
    <div >
        <div className='bg-white border p-4 max-w-xs mx-auto rounded-lg'>
            <h1 className="text-4xl font-bold text-center">Sign in</h1>
            <p className='text-slate-500 text-center'>To get started</p>

            <SignInG />
        </div>
    </div>
  )
}

export default LoginPage