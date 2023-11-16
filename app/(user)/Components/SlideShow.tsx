"use client";

import React from 'react'
import Carousel from './Carousel'
type Props = {}

export default function SlideShow({}: Props) {
    const images = [
      "@/app/assets/images/jtool_pic_1.png",
      "@/app/assets/images/IMG_2505.jpg"
  ]

  return (
<div className="lg:w-3/4 mx-auto my-2"> 
      {/* //carousel-image */}
      <Carousel loop>
        {images.map((src, i) => {
          return (
            <div className=" min-w-0 flex-[0_0_100%]" key={i}>
              <img src={src}  className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};