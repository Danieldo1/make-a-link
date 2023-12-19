import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })   
import '../globals.css'

import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import AsideApp from '@/components/applayout/AsideApp'
import {Toaster }from 'react-hot-toast'

export const metadata = {
  title: 'Make-a-Link',
  description: 'Simplify Sharing, Amplify Impact. Make-a-Link: Your Links, Your Story, Your Way',
}

export default async function RootLayout({ children,...rest }) {
  const header = headers()
  const url=header.get('next-url')

  const session = await getServerSession(optionsAuth)
  if(!session){
    redirect('/login')
  }

 return (
  <html lang="en">
      <body className={inter.className}>
        <Toaster />
          <main className='flex min-h-screen '>
           <AsideApp user={session?.user} />
           <div className="flex-grow overflow-y-auto">
     
              {children}
        
            </div>
          </main>
        </body>
    </html>
  )
}
