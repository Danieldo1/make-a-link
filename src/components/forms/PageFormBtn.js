'use client'
import React, { useState } from 'react'
import SectionBox from '../applayout/SectionBox'
import Image from 'next/image'
import {TrashIcon,GripHorizontalIcon} from 'lucide-react'
import ClaimBtn from '../btns/ClaimBtn'
import { savePageButtons } from '@/libs/saveButtons'
import { toast } from 'react-hot-toast'
import { ReactSortable } from 'react-sortablejs'

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
const PageFormBtn = ({page,user}) => {
    const savedBtns = Object.keys(page?.buttons)
    const pageSavedBtns = savedBtns.map((key)=> buttonsAll.find(button => button.key === key))
    const [activeBtn, setActiveBtn] = useState(pageSavedBtns)

    const handleButtonClick = (button) => {
        setActiveBtn(prev => {
            return [...prev,button]
        })
    }

    const selectedBtn = buttonsAll.filter(button1 => !activeBtn.find(button2 => button1.key === button2.key))
  
  const saveButtons = async (formData) => {
      await savePageButtons(formData)
      toast.success('Successfully saved!')
  }

  const deleteButton =({key:keyRemove}) => {
      setActiveBtn(prev => prev.filter(button => button.key !== keyRemove))
  }
    return (
    <SectionBox>
        <form action={saveButtons}>
            <h2 className='text-xl font-bold mb-4'>Connect-Me</h2>
            <div className='flex flex-wrap gap-2 border-b pb-4 border-blue-100'>
                {selectedBtn.map((button)=>(
                    <button 
                    key={button.key}
                    type='button'
                    onClick={()=>handleButtonClick(button)} className='flex items-center gap-2 p-2 bg-blue-100 rounded-lg'>
                    <Image src={button.src} alt='Settings' width={25} height={25} />
                    <span className='text-sm uppercase'>{button.label}</span>
                    <Image src='/plus.svg' alt='Settings' width={25} height={25} />
                </button>
                ))}
            
            </div>
            <ReactSortable list={activeBtn} setList={setActiveBtn} >
                {activeBtn.map((button)=>(
                    <div key={button.key} className='mt-4 flex gap-2 items-center justify-between bg-blue-100 p-2 rounded-lg'>
                        <GripHorizontalIcon className='w-8 h-8 cursor-move text-gray-500 hover:text-blue-500 transition duration-300 ease-in' />
                        <div className='w-[15%] flex gap-2 items-center justify-start'>
                        <Image src={button.src} alt='Settings' width={25} height={25} />
                            <span className='text-sm uppercase hidden xl:block '>{button.label}</span>
                        </div>
                <input type='text' defaultValue={page?.buttons[button.key]} name={button.key} placeholder={button.label} style={{marginBottom:'0px'}} className='w-[70%]' />
                <button type='button' onClick={()=>deleteButton(button)} >
                    <TrashIcon className='w-6 h-6 cursor-pointer hover:text-red-500 transition duration-150 ease-in' />
                </button>
                    </div>
                ))}
            </ReactSortable>

            <div className='flex justify-center mt-4 max-w-md mx-auto border-t border-blue-100'>
                <ClaimBtn text='Save' pendingText='Saving...' />
            </div>
        </form>
    </SectionBox>
  )
}

export default PageFormBtn