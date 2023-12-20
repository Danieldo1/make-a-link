import '../../globals.css'

export const metadata = {
  title: 'UniLinks',
  description: 'Simplify Sharing, Amplify Impact. UniLinks: Your Links, Your Story, Your Way',
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
