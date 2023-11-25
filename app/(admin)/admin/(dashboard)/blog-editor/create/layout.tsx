import React from 'react'
import '@/app/globals.css'

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <div id='editor-content'>
      {children}
    </div>
  </div>
}