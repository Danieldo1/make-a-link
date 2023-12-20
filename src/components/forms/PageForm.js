

import RadioBtn from '../btns/RadioBtn'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import ClaimBtn from '../btns/ClaimBtn'
import mongoose from 'mongoose'
import { Page } from '@/models/Page'
import { toast}  from 'react-hot-toast'
import SuccessToast  from '../btns/SuccessToast'
import { User } from '@/models/User'
import SectionBox from '../applayout/SectionBox'

const PageForm = async ({page}) => {
   
    const session = await getServerSession(optionsAuth)
    const saveSettings = async (formData) => {
        'use server'
    mongoose.connect(process.env.MONGODB_URL)
    if(session){
        const dataPoints =['displayName','location','bio','bgType','bgColor','bgImage']
        const dataToSend = {}
        for(const key of dataPoints){
            if(formData.has(key)){
                dataToSend[key] = formData.get(key)
            }
            
        }
        await Page.updateOne({owner:session?.user?.email},dataToSend)
        if(formData.has('avatar')){
            const avatar = formData.get('avatar')
            await User.updateOne({email:session?.user?.email},{image:avatar})
        }
        return true
    } else {
        return false
    }
}



  return (
    <div >
        <SectionBox>
        <form action={saveSettings}>
        <div 
        style={
            page.bgType === 'color' ? {backgroundColor:page.bgColor} : {backgroundImage:`url(${page.bgImage})`}
        }
        className=' h-64 -m-4 rounded-t-lg bg-cover bg-center '>
           <RadioBtn 
           defaultValue={page.bgType}
           options={[
               {value:"color",src:'paint.svg',label:"Color"},
               {value:"image",src:'photo.svg',label:"Image"},
            ]}
            session={session}
            />
        </div>

            <div className='p-4 pt-24 '>
                <label htmlFor='nameIn' className='uppercase text-gray-400 font-semibold text-sm mb-2 '>Name</label>
                    <input type='text' id='nameIn' placeholder='Your name' name='displayName' defaultValue={page.displayName} />
                <label htmlFor='locationNow' className='uppercase text-gray-400 font-semibold text-sm mb-2 '>Location</label>
                    <input type='text' id='locationNow' placeholder='New York' name='location' defaultValue={page.location} />
                <label htmlFor='bioIn' className='uppercase text-gray-400 font-semibold text-sm mb-2  '>Bio</label>
                    <textarea name='bio' defaultValue={page.bio} id='bioIn' placeholder='Tell the world about yourself' className='resize-none  ' />
                   
            </div>
            <div className="border-b border-gray-200 px-12" />
                    <div className='flex justify-center mt-4 max-w-md items-center mx-auto '>
                        <ClaimBtn pendingText={'Saving...'} text={'Save'} />
                    </div>
        </form>
        </SectionBox>
    </div>
  )
}

export default PageForm