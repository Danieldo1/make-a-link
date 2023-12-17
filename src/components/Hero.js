import React from 'react'

const Hero = () => {
  return (
    <section className='p-4 pt-32 text-center'>
    <div className=' mb-8 text-center'>
      <h1 className="text-5xl font-bold">Simplify Sharing, Amplify Impact.</h1>
      <h2 className='text-gray-500 text-xl mt-6 '>Make-a-Link: Your Links, Your Story, Your Way.</h2>
    </div>

    <form className='inline-flex shadow-md items-center shadow-gray/50 rounded-lg  '> 
    <span className="bg-white py-4 pl-4 rounded-lg ">linkme.to/</span>
      <input type="text" placeholder="Add your username" className='py-4 ' />
      <button type="submit" className='bg-blue-500 text-white px-6 py-4 rounded-r-lg '>Get Started</button>
    </form>
  </section>
  )
}

export default Hero