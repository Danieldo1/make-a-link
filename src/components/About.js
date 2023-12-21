import React from 'react'
import Image from 'next/image'
import SectionBox from './applayout/SectionBox'

const About = () => {
  return (
    <div className=' mt-24 md:mx-10 lg:mx-32 xl:mx-40 '>
            <h2 className=' text-3xl text1'>How UniLinks works?</h2>
           

    <SectionBox className='bg-white m-4 p-4 shadow-md rounded-lg ' >
        <div className=''>
            <div className='p-5'>
                <p className='bg-gray-200 flex font-bold rounded-full w-7 h-7  justify-center items-center relative -top-[28px] -left-[28px]'>1</p>
                <p className='md:text-lg xl:text-xl text-sm mb-2 font0semibold'>Make a great-looking page where you can put all your links together, so people can find everything about you in one spot.</p>
            </div>
                <div className='rounded-lg justify-center flex items-center overflow-hidden '>
                    <Image src='/create.png' alt='create' width={500} height={500} className='grow w-full h-full object-cover ' />
                </div>
            </div>
    </SectionBox>

    <SectionBox className='bg-white m-4 p-4 shadow-md rounded-lg ' >
        <div className=''>
            <div className='p-5'>
                <p className='bg-gray-200 flex font-bold rounded-full w-7 h-7  justify-center items-center relative -top-[28px] -left-[28px]'>2</p>
                <p className='md:text-lg xl:text-xl text-sm mb-2 font0semibold'>This will set up a page for you that everyone can see, where you can share all your links in one place.</p>
            </div>
                <div className='rounded-lg justify-center flex items-center overflow-hidden '>
                    <Image src='/sharing.png' alt='sharing' width={300} height={300} className='grow w-full h-full object-cover ' />
                </div>
            </div>
    </SectionBox>

    <SectionBox className='bg-white m-4 p-4 shadow-md rounded-lg ' >
        <div className=''>
            <div className='p-5'>
                <p className='bg-gray-200 flex font-bold rounded-full w-7 h-7  justify-center items-center relative -top-[28px] -left-[28px]'>3</p>
                <p className='md:text-lg xl:text-xl text-sm mb-2 font0semibold'>See how many people are looking at your page and clicking on your links, all on one easy-to-check page.</p>
            </div>
                <div className='rounded-lg justify-center flex items-center overflow-hidden '>
                    <Image src='/analyze.png' alt='sharing' width={500} height={500} className='grow w-full h-full object-cover ' />
                </div>
            </div>
    </SectionBox>
    </div>
  )
}

export default About