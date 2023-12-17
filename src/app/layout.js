import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Make-a-Link',
  description: 'Simplify Sharing, Amplify Impact. Make-a-Link: Your Links, Your Story, Your Way.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main>
           <Nav />
            <div className=' max-w-7xl mx-auto p-8 md:px-16' >
            {children}
            </div>
          </main>
        </body>
    </html>
  )
}
