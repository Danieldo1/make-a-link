import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })   
import '../globals.css'

import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import AsideApp from '@/components/applayout/AsideApp'
import {Toaster }from 'react-hot-toast'
import { Page } from '@/models/Page'
import mongoose from 'mongoose'


export const metadata = {
  title: 'UniLinks',
  description: 'Simplify Sharing, Amplify Impact. UniLinks: Your Links, Your Story, Your Way',
}

export default async function RootLayout({ children,...rest }) {
  const header = headers()
  const url=header.get('next-url')

  const session = await getServerSession(optionsAuth)
  if(!session){
    redirect('/login')
  }
  mongoose.connect(process.env.MONGODB_URL)
  const page = await Page.findOne({owner:session?.user?.email})
 return (
  <html lang="en">
      <body className={inter.className}>
        <Toaster />
          <main className='flex min-h-screen '>
           <AsideApp user={session?.user} page={page} />
           <div className="flex-grow overflow-y-auto ml-2 md:ml-0">
     
              {children}
        
            </div>
          </main>
        </body>
    </html>
  )
}
