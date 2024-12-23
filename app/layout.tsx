import './globals.css'
import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import NavBar from './NavBar'
import { Providers } from './components/Provider'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'SATS Assignments',
  description: 'Developed by Stephen Orioste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Theme>
            <NavBar />
            <main>
              {children}
            </main>
            <Footer />
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
