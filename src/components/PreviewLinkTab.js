'use client'
import React from 'react'
import SectionBox from './applayout/SectionBox'
import Link from 'next/link'
import Image from 'next/image'

const PreviewLinkTab = ({page}) => {
    
  return (
    <SectionBox>
       
        <div>
            <Link target='_blank' href={`/${page.username}`} className='text-center  flex gap-2 items-center hover:underline underline-offset-2 decoration-indigo-500 decoration-3  justify-center'>
                <Image src='/action.svg' alt='Action' width={25} height={25} />
                <p className='text2 forn-bold text-md text-indigo-500'>Preview your page</p>
                 {/* <span className='line-clamp-1'>{page.username}</span> */}
            </Link>

        </div>
    </SectionBox>
  )
}

export default PreviewLinkTab