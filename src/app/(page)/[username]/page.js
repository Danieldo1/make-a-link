import React from 'react'
import mongoose from 'mongoose'
import {Page }from '../../../models/Page'
import { User } from '@/models/User'
import Image from 'next/image'
import { MapPinned } from 'lucide-react'
import Link from 'next/link'
import { Views } from '@/models/Views'
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
    mongoose.connect(process.env.MONGODB_URL)
    const page = await Page.findOne({username:url})
    // console.log(page.owner)
    const user = await User.findOne({email:page.owner})
    // console.log(user.email)

    await Views.create({uri:url,type:'view',})
  return (
    <div className='bg-blue-950 text-white min-h-screen'>
         <div 
        style={
        page.bgType === 'color' ? {backgroundColor:page.bgColor} : {backgroundImage:`url(${page.bgImage})`}
        }
        className=' h-64 rounded-t-lg bg-cover bg-center '>

        </div>

        <div className='aspect-square w-48 h-48 mx-auto relative -top-16'>
            <Image src={user.image} alt='avatar' width={256} height={256} className='rounded-full w-full h-full object-cover' />
        </div>
            
            <div className='-mt-12'>
                <h2 className='text-center font-bold text-3xl mb-1'>{page.displayName}</h2>
                
                <h3 className='text-lg flex gap-2 justify-center text-white/70'>
                    <MapPinned />
                    <span>
                    {page.location}
                    </span>
                </h3>
               
               <div className='text-center max-w-xs mx-auto my-2'>
                  <p className=''>
                  {page.bio}
                  </p>
               </div>
            </div>
        
        <div className='flex justify-center items-center gap-4 my-4'>
        {Object.keys(page.buttons).map((key) => (
          <Link key={key} href={buttonLinks(key,page.buttons[key])} className='rounded-full lg:rounded-lg bg-white text-blue-950 p-2 flex justify-center items-center'>
           {icons[key] ? (<Image src={icons[key]} alt={key} width={34} height={34} />
           ) : key}
           <div className='flex-row gap-2 justify-center items-center'> 
             <span className='hidden lg:block '>{key}:{page.buttons[key]}</span>
           </div>
          </Link>
        ))}
        </div>
        <div className='max-w-2xl mx-auto grid md:grid-cols-2 gap-6 p-4 px-8'>
          {page.links.map((link) => (
            <Link target={'_blank'} ping={process.env.PUBLIC_URL+'api/click?url='+btoa(link.url)} key={link} href={link.url} className='text-white bg-indigo-950 p-2 flex'>
              <div className='bg-blue-700 aspect-square p-1 overflow-hidden relative -left-4 w-16 h-16'>
                {link.icon && (
                  <Image src={link.icon} alt={link.title} width={64} height={64} className='w-full h-full object-cover' />
                )}
                {!link.icon && (
                  <div className='w-full h-full flex items-center justify-center'>
                  
                  <MapPinned />
                  </div>
                )}
              </div>

              <div className='flex items-center justify-center'>
                <div className=''>
                <h3 className='font-bold'>{link.title}</h3>
                <p className='text-white/40 h-6 overflow-hidden'>{link.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default UserPage