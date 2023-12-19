'use server'

import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import { Page } from '@/models/Page'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

export const savePageButtons = async (formData) => {
    mongoose.connect(process.env.MONGODB_URL)
const session = await getServerSession(optionsAuth)
if(session){
    const buttonsValues ={}
    formData.forEach((value,key) => {
        buttonsValues[key] = value
    })
    const dataToUpdate ={buttons:buttonsValues}
    await Page.updateOne({owner:session?.user?.email}, dataToUpdate)
    return true
} 
return false
}

export const savePageLinks = async (links) => {
    mongoose.connect(process.env.MONGODB_URL)
    const session = await getServerSession(optionsAuth)
    if(session){
        await Page.updateOne({owner:session?.user?.email}, {links})

    } else {
        return false
    }
}