import React from 'react'
import mongoose from 'mongoose'
import {Page }from '../../../models/Page'
import { User } from '@/models/User'
import Image from 'next/image'
import { MapPinned } from 'lucide-react'
import Link from 'next/link'
import { Views } from '@/models/Views'
import SectionBox from '@/components/applayout/SectionBox'
const icons = {
email:'/mail.svg',
mobile:'/mobile.svg',
website:'/website.svg',
instagram:'/instagram.svg',
facebook:'/facebook1.svg',
github:'/github.svg',
linkedin:'/linkedin1.svg',
telegram:'/telegram.svg',
}
const buttonLinks =(key,value)=> {
  if(key === 'email'){
    return 'mailto:'+value
  }
  if(key=== 'mobile'){
    return 'tel:'+value
  }
  return value
}
const UserPage = async ({params}) => {
    const url = params.username
    // console.log(url)
    mongoose.connect(process.env.MONGODB_URL)
    const page = await Page.findOne({username:url})
    // console.log(page.owner)
   
    const user = await User.findOne({email: page?.owner});
      // console.log(user.email)
    
  

    await Views.create({uri:url,page:page?.username,type:'view',})
  return (
    <>

    <div className='bg-gray-200 text-blue-900 py-3 '>
      <SectionBox className='bg-white  relative top-3 mb-10 mx-4 md:mx-10 lg:mx-16 xl:mx-20 shadow-md rounded-lg ' >
         <div 
        style={
        page?.bgType === 'color' ? {backgroundColor:page?.bgColor} : {backgroundImage:`url(${page?.bgImage})`}
        }
        className=' h-56 rounded-t-lg bg-cover bg-center shadow-lg '>

        </div>

        <div className='aspect-square border-4 border-gray-100 rounded-full w-48 h-48 mx-auto relative -top-16'>
            <Image src={user?.image} alt='avatar' width={256} height={256} className='rounded-full w-full h-full object-cover shadow-xl' />
        </div>
            
            <div className='-mt-12'>
                <h2 className='text-center font-bold text-3xl mb-1 text1 uppercase'>{page?.displayName}</h2>
                
                <h3 className='flex gap-2 justify-center text-lg uppercase tracking-tighter text-blue-900 text2 font-bold '>
                    <MapPinned />
                    <span>
                    {page?.location}
                    </span>
                </h3>
               
               <div className='text-center max-w-xs mx-auto my-2'>
                  <p className='text2 font-light tracking-tight text-blue-900/80 '>
                  {page?.bio}
                  </p>
               </div>
            </div>
        
        {/* buttons circle */}
        <div className='flex justify-center flex-wrap items-center gap-4 my-4'>
        {Object.keys(page?.buttons).map((key) => (
          <Link key={key} href={buttonLinks(key,page.buttons[key])} className='rounded-full lg:rounded-lg bg-gray-400 text-blue-950 p-2 flex justify-center items-center shadow-md hover:-translate-y-3 transition duration-300 ease-in-out'>
           {icons[key] ? (
           <div className='justify-center items-center'>
           <Image src={icons[key]} alt={key} width={34} height={34} className='invert' />
           </div>
           ) : key}
           <div className='flex-row gap-2 justify-center items-center'> 
             <span className='hidden lg:block uppercase text-sm ml-2 text-white'>Connect with {key}</span>
           </div>
          </Link>
        ))}
        </div>

        {/* Links tabs */}
        <div className='max-w-2xl mx-auto grid md:grid-cols-2 gap-6 p-4 px-8 '>
          {page.links.map((link) => (
            <Link target={'_blank'} ping={process.env.PUBLIC_URL+'api/click?url='+btoa(link.url)+'&page='+page.username} key={link.url} href={link.url} className='text-white bg-gray-300 rounded-lg p-2 flex shadow-md hover:-translate-y-3 transition duration-300 ease-in-out '>
              <div className='bg-gray-700 rounded-lg aspect-square p-1 overflow-hidden relative -left-4 w-16 h-16 shadow-sm'>
                {link.icon && (
                  <Image src={link.icon} alt={link.title} width={64} height={64} className='w-full h-full object-cover' />
                )}
                {!link.icon && (
                  <div className='w-full h-full flex items-center justify-center'>
                   <Image src='/unilink.svg' alt={'unilinks'} width={50} height={50} className='invert' />
                  </div>
                )}
              </div>

              <div className='flex items-center justify-center'>
                <div className=''>
                <h3 className='font-bold text-blue-900'>{link.title}</h3>
                <p className=' h-6 overflow-hidden text-blue-900/80'>{link.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

          <Link href={'https://uni-links.vercel.app'}>  
            <div className=' text-center text-black flex justify-center mt-5 items-center pb-5'  >
                <Image src={'/unilink.svg'} alt={'unilinks'} width={40} height={40} className=' justify-center items-center object-cover'  />
                <h3 className='text-2xl  text1 font-bold  '>UniLinks</h3>
            </div>
          </Link>
      </SectionBox>
    </div>
    </>
  )
}

export default UserPage