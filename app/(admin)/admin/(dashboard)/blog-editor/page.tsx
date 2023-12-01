'use client'

import React, { useState, useRef   } from 'react'
import grapesjs, { Editor as Ed } from 'grapesjs';
import GjsEditor from '@grapesjs/react';
import pw from 'grapesjs-preset-webpage'
import bb from 'grapesjs-blocks-basic'

export default function Editor() {

  const onEditor = (editor: Ed) => {
    console.log('Editor loaded', { editor });
  };

  const [open, setOpen] = useState(false)
  const coverLabel = useRef<HTMLLabelElement>(null)

  return <div id='blog-editor-main'>
    <div className='flex flex-col justify-center divide-y'>
      <h1 className='m-1'>Blogs</h1>
      <div>
        <button id='create-blog-btn' onClick={ () => setOpen(!open) }>Create Blog</button>
      </div>
    </div>
    <div className={`absolute bg-black/10 w-full h-full top-0 left-0 ${open ? '' : 'hidden'} flex justify-center items-center`} id='create-form-cont' onClick={
      (e) => {
        if(e.target === e.currentTarget) setOpen(!open)
      }
    }>
      <div id='create-form-main' className='bg-white p-4 rounded'>
        <form className='flex flex-col'>
          <label ref={coverLabel} className='w-[250px] h-[250px] bg-black/10 mb-2 flex justify-center items-center bg-contain bg-center bg-no-repeat'>Set Cover Image
            <input type='file' accept='image/png, image/jpeg' className='hidden' onChange={
              (e) => {
                const file = e.currentTarget.files?.[0]
                const reader = new FileReader()
                reader.onload = () => {
                  coverLabel.current!.style.backgroundImage = `url("${reader.result}")`
                  console.log(coverLabel.current)
                }
                if(file) reader.readAsDataURL(file)
              }
            }></input>
          </label>
          <input type="text" className='border-2' placeholder='Blog Title' />
          <input type="text" className='border-2' placeholder='Blog Description' />
          <button className='border-2'>Create</button>
        </form>
      </div>
    </div>
    {/* <GjsEditor
      // Pass the core GrapesJS library to the wrapper (required).
      // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
      grapesjs={grapesjs}
      // Load the GrapesJS CSS file asynchronously from URL.
      // This is an optional prop, you can always import the CSS directly in your JS if you wish.
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      // GrapesJS init options
      options={{
        height: '100vh',
        storageManager: false,
      }}
      onEditor={onEditor}
      plugins={[pw, bb]}
    /> */}
  </div>
}