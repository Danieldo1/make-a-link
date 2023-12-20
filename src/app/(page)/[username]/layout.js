import '../../globals.css'

export const metadata = {
  title: 'Make-a-Link',
  description: 'Simplify Sharing, Amplify Impact. Make-a-Link: Your Links, Your Story, Your Way',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main>
          <div className="">
            {children}
          </div>
        </main>
        </body>
    </html>
  )
}
