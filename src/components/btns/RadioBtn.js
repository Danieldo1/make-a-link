'use client'

import React,{useState} from 'react'
import Image from 'next/image'
const RadioBtn = ({options,defaultValue}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setSelectedOption('color');
    setBgColor(event.target.value);
  };
  return (
    <>
   <div className='radio-selectors flex justify-center'>
        {options.map((option) => {
          return (
            <label key={option.value}>
              <input
                type='radio'
                name='bgType'
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
                value={option.value}
              />
              <span className='rounded-full p-3 cursor-pointer'>
                <Image src={`/${option.src}`} alt='icon' width={20} height={20} />
              </span>
            </label>
          );
        })}
      </div>
      {selectedOption === 'color' ? (
        <div
          className='gap-2 ml-2 bg-blue-100 flex flex-col justify-center items-center p-2 rounded-lg w-32 h-18 text-center'
          
        >
          <span className='rounded-3xl'>Background Color</span>
          <input type='color' name='bgColor' value={color} onChange={handleColorChange} />
        </div>
      ) : (
        <div className='gap-2 ml-2 bg-blue-100 flex flex-col justify-center items-center p-2 rounded-lg w-32 h-18 text-center'>
          <label type='button' className='justify-center items-center flex flex-col cursor-pointer'  >
            Background Image
            <Image src={'/photo2.svg'} alt='icon' width={30} height={30} className='cursor-pointer justify-center items-center' />
          <input type='file' name='bgImage' className='hidden cursor-pointer' />
          </label>
        </div>
      )}
    </>
  );
};

export default RadioBtn