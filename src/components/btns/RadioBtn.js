import React from 'react'
import Image from 'next/image'
const RadioBtn = ({options,defaultValue}) => {
  return (
    <div className='radio-selectors  flex justify-center  '>
        {options.map((option)=>{
            return( 
            <label  key={option.value}>
                <input 
                type='radio' 
                name='bgType' 
                defaultChecked={defaultValue=== option.value}
                value={option.value}
                />
                    <span className='rounded-full p-3 cursor-pointer ' >
                        <Image src={`/${option.src}`} alt='icon' width={20} height={20} />
                    </span>
            </label>
            )
        })}
          {defaultValue === 'color' && (
            <div className='flex gap-2 ml-2 items-center justify-center'>
               <span className='rounded-3xl '>Background Color</span>
               <input type='color' />
            </div>
            )}
</div>
  )
}

export default RadioBtn