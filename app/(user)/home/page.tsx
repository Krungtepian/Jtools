import React from 'react'
import Welcome from '../Components/Welcome'
import SlideShow from '../Components/SlideShow'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="flex flex-col">
      <SlideShow/>
      <Welcome/>
    </div>
  )
} 