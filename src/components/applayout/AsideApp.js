'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogOut from '@/components/btns/LogOut'
import { usePathname } from 'next/navigation'
import { PlusCircle, XCircle } from 'lucide-react'

const AsideApp = ({user,page}) => {
    const [isAsideHidden, setAsideHidden] = useState(false);
    const pathname = usePathname()
    const toggleAside = () => {
        setAsideHidden(!isAsideHidden);
      };
      
  return (
    <>
          <button onClick={toggleAside} className="left-1 md:left-0.5 top-4 z-10  fixed transition-transform duration-300 ease-in-out ">
        {isAsideHidden ? (
        <div className=' flex flex-col items-center gap-3'>
        <PlusCircle className='w-6 h-6' />
       <p className='rotate-90 text-gray-700 '>Panel</p>
        </div>
        
        ) : (
          <div className='flex items-center gap-2 ml-3'>
          <XCircle className='w-6 h-6' />
          <p className='text-gray-700 hidden'>Close</p>
          </div>
        
        )}
      </button>

      <div className="flex ">
  <aside className={`bg-white w-[200px]  p-4 shadow-lg ${isAsideHidden ? 'hidden ' : ''} flex flex-col transition-width duration-300 ease-in-out`}>

<div className='sticky top-0 pt-5 '>
    <div className='rounded-full overflow-hidden aspect-square w-20 mx-auto'>
      <Image src={user.image} alt={user.name} width={256} height={256} />
    </div>

     {page && (
       <Link target='_blank' href={`/${page.username}`} className='text-center mt-4 flex gap-1 items-center  justify-center'>
       <Image src={'/unilink.svg'} alt='Unilink' width={25} height={25} />
       <p className='text1 text-lg flex items-center justify-center '>UniLinks</p>
       <span className='text-2xl text-gray-400 '>/</span>
       <span className='line-clamp-1'>{page.username}</span>
     </Link>
     ) }

      <nav className='flex flex-col justify-center text-center mt-8 gap-4 mx-auto'>
  <Link href='/account' className={'flex gap-2 font-semibold hover:bg-blue-50 rounded-lg p-2 transition duration-300 ease-in'+(pathname === '/account' ? ' bg-blue-50' : '')}>
    <Image src='/page.svg' alt='Settings' width={25} height={25} />
    Page
  </Link>
  <Link href='/analytics' className={'flex gap-2 font-semibold hover:bg-blue-50 rounded-lg p-2 transition duration-300 ease-in' + (pathname === '/analytics' ? ' bg-blue-50' : '')}>
    <Image src='/analytics.svg' alt='Analytics' width={25} height={25} />
    Analytics
  </Link>
  <Link href='/' className='flex gap-2 cursor-pointer font-semibold items-center hover:bg-blue-50 rounded-lg p-1.5 transition duration-300 ease-in'>
    <Image src='/house.svg' alt='Home' width={30} height={30} />
    Home
  </Link>
</nav>
</div>
<div className='flex-grow fixed flex flex-col justify-end mx-auto my-3 bottom-0 '>
      <div className='flex gap-2 items-center font-semibold hover:bg-blue-50 rounded-lg p-1 transition duration-300 ease-in w-[170px]'>
        <LogOut  width={35} height={35} />
        
      </div>
    </div>
</aside>
</div>
    </>
  )
}

export default AsideApp