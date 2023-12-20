

import React from 'react'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Page } from '@/models/Page'
import mongoose from 'mongoose'
import ClaimForm from '@/components/forms/ClaimForm'
import  PageForm  from '@/components/forms/PageForm'
import PageFormBtn from '@/components/forms/PageFormBtn'
import PageLinksForm  from '@/components/forms/PageLinksForm'
import cloneDeep from 'clone-deep'
const AccountPage = async ({searchParams}) => {

    const session = await getServerSession(optionsAuth)
    const username = searchParams?.username
    mongoose.connect(process.env.MONGODB_URL)
    const page = await Page.findOne({owner:session?.user?.email})
    if(!session){
      return  redirect('/login')
    }

    const cleanPage = cloneDeep(page.toJSON())
    cleanPage._id = cleanPage._id.toString()

    if(page){
      return(
        <div>
          <PageForm  page={cleanPage} />
          <PageFormBtn  page={cleanPage} user={session?.user} />
          <PageLinksForm page={cleanPage} user={session?.user} />
        </div>
      )
    }
    const handleForm = async (formData) => {
        'use server'
        const username = formData.get('username')
        mongoose.connect(process.env.MONGODB_URL)
        const existingUser= await Page.findOne({username})
        if(existingUser){
            return false
        } else {
            const email = session?.user?.email
          return await Page.create({username, owner:email})
        }
 
    }


  return (
    <div>
    <ClaimForm handleForm={handleForm} username={username} session={session} />
    </div>
  )
}

export default AccountPage