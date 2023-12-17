

import React from 'react'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

import { Page } from '@/models/Page'
import mongoose from 'mongoose'
import ClaimForm from '@/components/forms/ClaimForm'

const AccountPage = async ({searchParams}) => {

    const session = await getServerSession(optionsAuth)
    const username = searchParams?.username
    if(!session){
        redirect('/login')
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