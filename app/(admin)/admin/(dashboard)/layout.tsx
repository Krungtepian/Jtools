import React from 'react'
import Link from 'next/link'
import '@/app/globals.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const links = [
    ['Blog Editor', '/admin/blog-editor']
  ]

  return <html className='h-full'>
    <body className='h-full'>
      <div className='grid grid-cols-[300px_minmax(900px,_1fr)] h-full divide-x'>
        <div id='dash-nav'>
          <h1>JTools Admin</h1>
          <ul className='flex justify-center'>
            {
              links.map((l, i) => {
                return <li key={i} className='bg-[#edebe4]'>
                  <Link href={l[1]}>{l[0]}</Link>
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