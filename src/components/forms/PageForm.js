

import RadioBtn from '../btns/RadioBtn'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import ClaimBtn from '../btns/ClaimBtn'
import mongoose from 'mongoose'
import { Page } from '@/models/Page'
import { toast}  from 'react-hot-toast'
import SuccessToast  from '../btns/SuccessToast'

const PageForm = async ({page}) => {
const session = await getServerSession(optionsAuth)
const saveSettings = async (formData) => {
    'use server'
    mongoose.connect(process.env.MONGODB_URL)
    if(session){
        await Page.updateOne({owner:session?.user?.email},{displayName:formData.get('displayName'),location:formData.get('location'),bio:formData.get('bio'),bgType:formData.get('bgType')})
        return true
    } else {
        return false
    }
}

  return (
    <div className='-m-4 '>
        <form action={saveSettings}>
        <div className='bg-red-200 h-64 rounded-t-lg '>
           <RadioBtn 
           defaultValue={page.bgType}
           options={[
               {value:"color",src:'paint.svg',label:"Color"},
               {value:"image",src:'photo.svg',label:"Image"},
            ]}
            />
          

        </div>

            <div className='flex justify-center -mb-12'>
                <Image src={session?.user?.image} alt='avatar' width={128} height={128} className='rounded-full relative -top-8 border-2 shadow-md border-white' />
            </div>

            <div className='p-4 '>
                <label htmlFor='nameIn' className='uppercase text-gray-400 font-semibold text-sm mb-2 '>Name</label>
                    <input type='text' id='nameIn' placeholder='Your name' name='displayName' defaultValue={page.displayName} />
                <label htmlFor='locationNow' className='uppercase text-gray-400 font-semibold text-sm mb-2 '>Location</label>
                    <input type='text' id='locationNow' placeholder='New York' name='location' defaultValue={page.location} />
                <label htmlFor='bioIn' className='uppercase text-gray-400 font-semibold text-sm mb-2 '>Bio</label>
                    <textarea name='bio' defaultValue={page.bio} id='bioIn' placeholder='Tell the world about yourself' className='resize-none' />
                    <div className='flex justify-center mt-4 max-w-md items-center mx-auto'>
                        <ClaimBtn pendingText={'Saving...'} text={'Save'} />
                    </div>
            </div>
        </form>
    </div>
  )
}

export default PageForm