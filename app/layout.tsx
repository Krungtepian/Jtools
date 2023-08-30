import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './Components/Navigation/Navigation'
import Footter from './Components/Footter/Footter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JTools Company',
  description: 'Jtools company',
}

export default function RootLayout({children,} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
          {children}
        <Footter/>
      </body>
    </html>
  )
}
