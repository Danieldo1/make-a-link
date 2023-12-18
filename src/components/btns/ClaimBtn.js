'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useFormStatus } from 'react-dom'
import {toast}  from 'react-hot-toast'

const ClaimBtn = ({text='Claim Username',pendingText='Claiming...'
}) => {

  const {pending}=useFormStatus()
    const [imageSrc, setImageSrc] = useState('/lockopen.svg');
    const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    className='bg-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white px-2 py-2 block mx-auto rounded-lg w-full'
    type='submit'
    disabled={pending}
    onClick={() => {setImageSrc('/lockclosed.svg'), toast.success('Successfully Saved!')}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
  {pending ? (
    <>
   
    {pendingText}
    <Image src={'/spinner.svg'} alt='loading' width={20} height={20} className='inline-block ml-2 animate-spin' />
    </>
  ) : 
  (<>
  
        {text}
        <Image src={isHovered ? '/lockclosed.svg' : imageSrc}  alt='lock icon' width={20} height={20} className='inline-block ml-2' />
  </>
  )}
</button>
  )
}

export default ClaimBtn