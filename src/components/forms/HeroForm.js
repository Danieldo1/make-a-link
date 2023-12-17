'use client'

import { signIn } from 'next-auth/react'
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'

const HeroForm = () => {

   useEffect(() => {
       if('localStorage' in window && window.localStorage.getItem('users username')){
           const username = window.localStorage.getItem('users username')
           window.localStorage.removeItem('users username')
           redirect('/account?username=' + username)
       }
   },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const query = form.querySelector('input').value
        const username = query
        if(username.length === 0){
            alert('Please enter a username')
            return
        } else {
            window.localStorage.setItem('users username', username)
            await signIn('google')
        }
    }
  return (
    <form 
    onSubmit={handleSubmit}
    className='inline-flex shadow-md items-center shadow-gray/50 rounded-lg  '> 
    <span className="bg-white py-4 pl-4 rounded-lg ">linkme.to/</span>
      <input 
    
      type="text"
      placeholder="Add your username" 
      className='py-4 ' />
      <button 
      type="submit" 
      className='bg-blue-500 text-white px-6 py-4 rounded-r-lg '
      >Get Started</button>
    </form>
  )
}

export default HeroForm