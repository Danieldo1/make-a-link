import Hero from '@/components/Hero'
import { getServerSession } from 'next-auth'
import { optionsAuth } from '../api/auth/[...nextauth]/route'




export default async function Home() {
  const session = await getServerSession(optionsAuth)
  return (
    <main>
  <Hero user={session?.user} />
    </main>
  )
}
