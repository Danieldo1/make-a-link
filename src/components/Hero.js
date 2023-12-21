import React from 'react'
import HeroForm from './forms/HeroForm'
import About from './About'


const Hero = ({user}) => {
  return (
    <section className=' text-center'>
    <div className=' mb-8 mt-24  text-center'>
      <h1 className="text-5xl md:text-7xl font-black text1">Simplify Sharing, Amplify Impact.</h1>
      <h2 className='text-gray-500 text-xl mt-6 text2'>Your Links, Your Story, Your Way.</h2>
    </div>
   
       <HeroForm user={user}  />
      <About />
   
  </section>
  )
}

export default Hero