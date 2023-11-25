import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './Components/Navigation'
import Footter from './Components/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JTools Company',
  description: 'Jtools company',
}

export default function RootLayout({children,} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className} font-serif pt-[72px]`} >
        <Navigation/>
        {children}
        <Footter/>
      </body>
    </html>
  )
}
