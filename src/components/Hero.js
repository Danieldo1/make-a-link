import React from 'react'
import HeroForm from './forms/HeroForm'

const Hero = () => {
  return (
    <section className='p-4 pt-32 text-center'>
    <div className=' mb-8 text-center'>
      <h1 className="text-5xl font-bold">Simplify Sharing, Amplify Impact.</h1>
      <h2 className='text-gray-500 text-xl mt-6 '>Make-a-Link: Your Links, Your Story, Your Way.</h2>
    </div>

    <HeroForm />
  </section>
  )
}

export default Hero