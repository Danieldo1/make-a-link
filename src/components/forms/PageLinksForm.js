'use client'

import React, { useState } from 'react'
import SectionBox from '../applayout/SectionBox'
import Image from 'next/image'
import {PlusCircle,GripHorizontal,TrashIcon} from 'lucide-react'
import ClaimBtn from '../btns/ClaimBtn'
import {Image as ImageIcon} from 'lucide-react'
import { ReactSortable } from 'react-sortablejs'
import { upload } from '@/libs/upload'
import { savePageLinks } from '@/libs/saveButtons'
import { toast } from 'react-hot-toast'

const PageLinksForm = ({page,user}) => {
    const [links, setLinks] = useState(page.links || [])
    const [hover, setHover] = useState(false)
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const save = async () => {
        await savePageLinks(links)
        toast.success('Successfully saved!')
    }

    const addNewLink = () => {
        setLinks(prev => [...prev, {
            key: Date.now().toString(),
            title:'',
            subtitle:'',
            icon:'',
            url:''
        }])
    }

    const handleUpload = (e,linkKey) => {
        upload(e, (url) => {
            setLinks(prev => {
                const newLinks = [...prev]
                newLinks.forEach((link,index) => {
                    if(link.key === linkKey){
                        link.icon = url
                    }
                })
                return newLinks
            })
        })
    }

    const handleInputChange = (key,prop,e) => {
        setLinks(prev => {
            const newLinks = [...prev]
            newLinks.forEach((link) => {
                if(link.key === key){
                    link[prop] = e.target.value
                }
            })
            return [...prev]
        })
    }

    const removeLink = (key) => {
        setLinks(prev => [...prev].filter(link => link.key !== key)
        )
    }

  return (
    <SectionBox>
        <h2 className='text-xl font-bold mb-4'>Links</h2>
        <form action={save} className=''>
            <button 
            onClick={addNewLink}
            type='button' className='text-indigo-500 flex items-center gap-2 mb-4 text-lg hover:bg-indigo-100 rounded-lg p-2'>
                <span>Add Link</span>
                <PlusCircle className='w-6 h-6' />
            </button>

                <div className=''>
                    <ReactSortable list={links} setList={setLinks} handle={'.handle'} >
                        {links.map((link) => (
                            <div key={link.key} className='mt-4 flex items-center gap-4 bg-blue-100 p-4 rounded-lg'>
                                        <div className='handle'>
                                            <GripHorizontal className='w-6 h-6 cursor-move text-gray-500 hover:text-blue-500' />
                                        </div>
                                    <div className=  'h-full'>
                                        <div
                                            className={`bg-gray-100 p-6 rounded-lg items-center cursor-pointer justify-center ${hover ? 'hovered' : ''
                                            }`}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                                >
                                                    {hover && !link.icon ? (
                                            <>
                                                <input
                                                onChange={(e) => handleUpload(e, link.key)}
                                                type="file"
                                                id={"icon" + link.key}
                                                className="hidden cursor-pointer"
                                                />
                                                <label
                                                htmlFor={"icon" + link.key}
                                                className="flex flex-col items-center justify-center cursor-pointer"
                                                >
                                                <PlusCircle className="w-12 h-12" />
                                                <p className="hidden md:block">Add Icon</p>
                                                <p className="block md:hidden">Icon</p>
                                                </label>
                                            </>
                                            ) : link.icon ? (
                                            <div className='relative aspect-square overflow-hidden w-16 h-16 inline-flex justify-center items-center'>
                                                <Image src={link.icon} alt="icon" width={100} height={100} className="w-full h-full rounded-md object-cover " />
                                            </div>
                                            ) : (
                                            <button className="flex flex-col items-center justify-center">
                                                <ImageIcon className="w-12 h-12" />
                                                <p className="hidden md:block">Add Icon</p>
                                                <p className="block md:hidden">Icon</p>
                                            </button>
                                            )}
                                        </div>
                                    </div>
                                <div className='grow'>
                                    <input value={link.title} onChange={(e)=> handleInputChange(link.key,'title',e)} type="text" placeholder='Title'  />
                                    <input value={link.subtitle} onChange={(e)=> handleInputChange(link.key,'subtitle',e)} type="text" placeholder='Subtitle'  />
                                    <input value={link.url} onChange={(e)=> handleInputChange(link.key,'url',e)} type="text" placeholder='URL'  />
                                </div>
                                <div>
                                    <button type='button' onClick={() => removeLink(link.key) }>
                                    <TrashIcon className='w-6 h-6 cursor-pointer hover:text-red-500 transition duration-150 ease-in' />
                                    </button>
                                </div>
                            </div>
                        ))}     
                    </ReactSortable>
                </div>

            <div className='border-t pt-4 mt-4 '>
                <div className='max-w-md mx-auto '>
                <ClaimBtn text='Add Link' pendingText='Adding Link...' />
                </div>
            </div>
        </form>
    </SectionBox>
  )
}

export default PageLinksForm