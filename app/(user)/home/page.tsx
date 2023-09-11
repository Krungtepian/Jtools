import React from 'react'
import Welcome from '../../components/Welcome'
import SlideShow from '../../components/SlideShow'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="flex flex-col">
      <SlideShow/>
      <Welcome/>
    </div>
  )
} 