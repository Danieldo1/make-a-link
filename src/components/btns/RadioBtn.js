'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const RadioBtn = ({options,defaultValue,session}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(session?.user?.image);
  const[avatarLoading, setAvatarLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

const router = useRouter()
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    
  };

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    setSelectedOption('color');
    setBgColor(event.target.value);
  };

  const handleUpload = (event) => {
    const file = event.target.files?.[0]
    setLoading(true)
    if (file) {
      const data = new FormData()
      data.set('file', file)
      fetch('/api/upload', {
        method: 'POST',
        body: data
      }).then(res => {
        res.json().then(link => {
          setBgImage(link)
          toast.success('Image uploaded successfully!',{duration:2000})
          setLoading(false)
          toast('Please click save button to save your changes !',{icon: '👏',duration:10000},)
        })
      })
    }
  }
  const handleAvatarUpload = async (event) => {
    const file = event.target.files?.[0]
    setAvatarLoading(true)
    if (file) {
        const data = new FormData()
        data.set('file', file)
        fetch('/api/upload', {
          method: 'POST',
          body: data
        }).then(res => {
          res.json().then(link => {
            setAvatar(link)
            toast.success('Avatar uploaded successfully!',{duration:2000})
            setAvatarLoading(false)
            toast('Please click save button to save your changes !',{icon: '❗',duration:10000},)
          })
        })
      }
}
 
  return (
    <>
    <button
        style={{ position: 'relative', top: 10, left: 10 }}
        onClick={toggleHidden}
        className='bg-blue-100 p-2 rounded-full'
      >
        <Image src={'/edit.svg'} alt='edit icon' width={20} height={20} />
      </button>
      <div className={isHidden ? 'hidden' : ''}>
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
          <input type='color' name='bgColor' value={color} onChange={handleColorChange} className='cursor-pointer' />
        </div>
      ) : (
        <div className='gap-2 ml-2 bg-blue-100 flex flex-col justify-center items-center p-2 rounded-lg w-32 h-18 text-center'>
          <label type='button' className='justify-center items-center flex flex-col cursor-pointer'  >
                Background Image
                {loading ? <Image src={'/spinnerdark.svg'} alt='icon' width={30} height={30} className='cursor-pointer justify-center items-center animate-spin' /> :  <Image src={'/upload.svg'} alt='icon' width={30} height={30} className='cursor-pointer justify-center items-center' />}

             <input type='hidden' name='bgImage' value={bgImage}  />
             <input type='file' className='hidden cursor-pointer' onChange={handleUpload} />
          </label>
        </div>
      )}
    </div>

       <div className='flex justify-center  '>
                <div className='absolute top-[220px] w-[128px] h-[128px] '>
                  <div className='overflow-hidden h-full rounded-full border-2 shadow-md border-white'>
                    <Image src={avatar} alt='avatar' width={128} height={128} className='w-full h-full object-cover ' />
                  </div>
                <label 
                htmlFor='avatarIn' 
                className='absolute cursor-pointer bottom-0 -left-2 p-1 bg-white rounded-full shadow-lg shadow-black/30'>
                    {avatarLoading ? <Image src={'/spinnerdark.svg'} alt='icon' width={30} height={30} className='cursor-pointer animate-spin' /> : <Image src={'/upload.svg'} alt='upload' width={30} height={30} />}
                    {/* <span>Edit</span> */}
                </label>
                <input type='file' id='avatarIn' className='hidden' onChange={handleAvatarUpload} />
                <input type='hidden' name='avatar' value={avatar}  />
                </div>
            </div>
    </>
  );
};

export default RadioBtn