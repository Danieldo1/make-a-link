

import React from 'react'

import SignInG from '@/components/btns/SignInG'

const LoginPage = () => {
  return (
    <div >
        <div className='bg-white border p-4 max-w-xs mx-auto rounded-lg'>
            <h1 className="text-4xl font-bold text-center">Sign in</h1>
            <SignInG />
        </div>
    </div>
  )
}

export default LoginPage