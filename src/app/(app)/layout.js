import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })   
import '../globals.css'

import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import Link from 'next/link'
import LogOut from '@/components/btns/LogOut'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Make-a-Link',
  description: 'Simplify Sharing, Amplify Impact. Make-a-Link: Your Links, Your Story, Your Way',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(optionsAuth)
  if(!session){
    redirect('/login')
  }

 return (
  <html lang="en">
      <body className={inter.className}>
          <main className='flex min-h-screen '>
            <aside className='bg-white max-w-[200px] grow p-4 shadow-lg'>
              <div className='rounded-full overflow-hidden aspect-square w-20 mx-auto'>
                <Image src={session?.user?.image} alt={session?.user?.name} width={256} height={256} />
              </div>
              <nav className='flex flex-col justify-center text-center mt-8 gap-4 mx-auto '>
                <Link href='/account' className='flex gap-2 font-semibold hover:bg-blue-50 rounded-lg p-2 transition duration-300 ease-in'>
                  <Image src='/settings.svg' alt='Settings' width={25} height={25} />
                  Settings
                </Link>
                <Link href='/analytics' className='flex gap-2 font-semibold hover:bg-blue-50 rounded-lg p-2 transition duration-300 ease-in'>
                  <Image src='/analytics.svg' alt='Analytics' width={25} height={25} />
                  Analytics
                </Link>
                <Link href='/' className='flex gap-2 font-semibold items-center hover:bg-blue-50 rounded-lg p-2 transition duration-300 ease-in'>
                  <Image src='/house.svg' alt='Analytics' width={30} height={30} />
                  Home
                </Link>
                <div className='flex gap-2  bottom-5 absolute items-center font-semibold hover:bg-blue-50 rounded-lg p-1 transition duration-300 ease-in w-[170px]'>
                <LogOut className='w-full z-10' width={35} height={35} />
                <span className='bottom-[10px] absolute left-10'>Log Out</span>
                </div>
              </nav>
            </aside>
            <div className=' grow ' >
              <div className='bg-white m-4 p-4 shadow-md rounded-lg '>
              {children}
              </div>
            </div>
          </main>
        </body>
    </html>
  )
}
