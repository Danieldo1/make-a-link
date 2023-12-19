'use client'
import React, { useState } from 'react'
import SectionBox from '../applayout/SectionBox'
import Image from 'next/image'

const buttonsAll = [
    {key: 'email',label:'E-mail',src:'/mail.svg'},
    {key: 'mobile',label:'Mobile',src:'/mobile.svg'},
    {key: 'website',label:'Website',src:'/website.svg'},
    {key: 'instagram',label:'Instagram',src:'/instagram.svg'},
    {key: 'facebook',label:'Facebook',src:'/facebook1.svg'},
    {key: 'github',label:'GitHub',src:'/github.svg'},
    {key: 'linkedin',label:'LinkedIn',src:'/linkedin1.svg'},
    {key: 'telegram',label:'Telegram',src:'/telegram.svg'},
]
const PageFormBtn = () => {
    const [activeBtn, setActiveBtn] = useState([])

    const handleButtonClick = (button) => {
        setActiveBtn(prev => {
            return [...prev,button]
        })
    }

    const selectedBtn = buttonsAll.filter(button1 => !activeBtn.find(button2 => button1.key === button2.key))
  return (
    <SectionBox>
        <h2 className='text-xl font-bold mb-4'>Connect-Me</h2>
        <div className='flex flex-wrap gap-2'>
            {selectedBtn.map((button)=>(
                <button onClick={()=>handleButtonClick(button)} className='flex items-center gap-2 p-2 bg-blue-100 rounded-lg'>
                 <Image src={button.src} alt='Settings' width={25} height={25} />
                 <span className='text-sm uppercase'>{button.label}</span>
                 <Image src='/plus.svg' alt='Settings' width={25} height={25} />
             </button>
             ))}
         
        </div>
        {activeBtn.map((button)=>(
            <div className='mt-4 flex gap-2 items-center justify-center bg-blue-100 p-2 rounded-lg'>
                <div className='w-1/4 flex gap-2 items-center justify-center'>
                 <Image src={button.src} alt='Settings' width={25} height={25} />
                     <span className='text-sm uppercase hidden md:block'>{button.label}</span>
                {/* <Image src='/minus.svg' alt='Settings' width={25} height={25} /> */}
                </div>
        <input type='text' name={button.key} placeholder={button.label} style={{marginBottom:'0px'}} />
            </div>
        ))}
    </SectionBox>
  )
}

export default PageFormBtn