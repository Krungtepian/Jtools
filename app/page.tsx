import React from 'react'
import Welcome from './home/Components/Welcome'
import SlideShow from './home/Components/SlideShow'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="flex flex-col">
      <SlideShow/>
      <Welcome/>
    </div>
  )
} 