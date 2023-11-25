'use client'

import Link from 'next/link'
import React from 'react'

export default function Editor() {

  return <div className='flex flex-col justify-center divide-y'>
    <h1 className='m-1'>Blogs</h1>
    <div>
      <Link href='blog-editor/create'>Create Blog</Link>
    </div>
  </div>
}