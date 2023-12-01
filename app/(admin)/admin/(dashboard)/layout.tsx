'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import '@/app/globals.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const links = [
    ['Blog Editor', '/admin/blog-editor'],
    ['Test', '/admin/blog-edito'],
  ]

  const [active, setActive] = useState('')

  return <html className='h-full'>
    <body className='h-full'>
      <div className='grid grid-cols-[300px_minmax(900px,_1fr)] h-full divide-x'>
        <div id='dash-nav' className='flex flex-col divide-y'>
          <h1 className='p-2 text-center text-lg'>JTools Admin</h1>
          <ul className='flex flex-col justify-center p-1 gap-y-1'>
            {
              links.map((l, i) => {
                return <li key={i} className='flex justify-center border-slate-400 border-[1px] rounded'>
                  <Link href={l[1]} onClick={() => {setActive(l[1])}} className={`text-lg ${active == l[1] ? 'text-blue-400' : ''}`}>{l[0]}</Link>
                </li>
              })
            }
          </ul>
        </div>
        <div id='admin-content'>
          {children}
        </div>
      </div>
    </body>
  </html>
}