import React from 'react'
import Image from 'next/image'
const RadioBtn = ({options}) => {
  return (
    <div className='radio-selectors shadow-lg '>
        {options.map((option)=>{
            return( 
            <label  key={option.value}>
        <input 
        type='radio' 
        name='bgType' 
        value={option.value}
        />
        <span className='rounded-tl-lg' >
            <Image src={`/${option.src}`} alt='icon' width={20} height={20} />
        </span>
            </label>
            )
        })}

    {/* <label>
        <input type='radio'value={'image'} name='bgType' />
        <span className='rounded-br-lg'>
            <Image src='/photo.svg' alt='image icon' width={20} height={20}   />
        </span>
    </label> */}
</div>
  )
}

export default RadioBtn