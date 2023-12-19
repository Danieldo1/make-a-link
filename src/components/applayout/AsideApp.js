'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogOut from '@/components/btns/LogOut'
import { usePathname } from 'next/navigation'

const AsideApp = ({user}) => {
    const [isAsideHidden, setAsideHidden] = useState(false);
    const pathname = usePathname()
    const toggleAside = () => {
        setAsideHidden(!isAsideHidden);
      };
  return (
    <>
          <button onClick={toggleAside} className="  left-2 top-4 z-10  fixed ">
        {isAsideHidden ? (<Image src='/clipboardp.svg' alt='Open' width={25} height={25} />) : (<Image src='/clipboardx.svg' alt='Close' width={25} height={25} />)}
      </button>

      <div className="flex">
  <aside className={`bg-white w-[300px] p-4 shadow-lg ${isAsideHidden ? 'hidden' : ''} flex flex-col`}>

<div className='sticky top-0  pt-5'>
    <div className='rounded-full overflow-hidden aspect-square w-20 mx-auto'>
      <Image src={user.image} alt={user.name} width={256} height={256} />
    </div>

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
<div className='flex-grow flex flex-col justify-end sticky bottom-0'>
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