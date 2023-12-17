import React from 'react'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const AccountPage = async ({searchParams}) => {
    const session = await getServerSession(optionsAuth)
    const username = searchParams?.username
    // console.log(username)
    if(!session){
        redirect('/login')
    }
  return (
    <div>
        <form>
            <h1 className='text-3xl font-bold text-center'>Hello, {session?.user?.name}</h1>
            <p className='text-slate-500 text-center'>Your username is {username}</p>
                <div className='max-w-xs mx-auto'>
            <input type="text" placeholder='Username' 
            className='block p-2 mx-auto my-4 border rounded-lg w-full text-center'
            defaultValue={username}
            />
            <button className='bg-indigo-500 text-white px-2 py-2 block mx-auto rounded-lg w-full ' type='submit'>Claim Username</button>
                </div>
        </form>
    </div>
  )
}

export default AccountPage