import { Inter,Kanit } from 'next/font/google'

import '../globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'], variable: '--font-kanit', style: ['normal', 'italic'] })

export const metadata = {
  title: 'UniLinks',
  description: 'Simplify Sharing, Amplify Impact. UniLinks: Your Links, Your Story, Your Way.',
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
