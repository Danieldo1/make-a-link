import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })   
import '../globals.css'

import { getServerSession } from 'next-auth'
import { optionsAuth } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import Link from 'next/link'

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
            <aside className='bg-indigo-100 max-w-[200px] grow p-4'>
              <div className='rounded-full overflow-hidden aspect-square w-20 mx-auto'>
                <Image src={session?.user?.image} alt={session?.user?.name} width={256} height={256} />
              </div>
              <nav>
                <Link href='/account'>
                  Settings
                </Link>
                <Link href='/analytics'>
                  Analytics
                </Link>
              </nav>
            </aside>
            <div className=' max-w-7xl mx-auto p-8 md:px-16' >
            {children}
            </div>
          </main>
        </body>
    </html>
  )
}
