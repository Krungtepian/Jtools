'use client'

import Link from 'next/link'
import React from 'react'

export default function AdminDashboard() {
  return <div id='admin-navbar' className='bg-slate-300 rounded m-1 p-1'>
    <p id='logout-btn'>Logout</p>
    <Link href='/admin/blog-editor'>Blog Editor</Link>
  </div> 
}