'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ClaimBtn = () => {
    const [imageSrc, setImageSrc] = useState('/lockopen.svg');
    const [isHovered, setIsHovered] = useState(false);
  return (
    <button
    className='bg-indigo-500 text-white px-2 py-2 block mx-auto rounded-lg w-full'
    type='submit'
    onClick={() => setImageSrc('/lockclosed.svg')}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    Claim Username
    <Image src={isHovered ? '/lockclosed.svg' : imageSrc}  alt='lock icon' width={20} height={20} className='inline-block ml-2' />
</button>
  )
}

export default ClaimBtn