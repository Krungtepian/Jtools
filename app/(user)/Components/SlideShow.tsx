"use client";

import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
type Props = {}

export default function SlideShow({}: Props) {
    const images = [
      "/images/jtool_pic_1.png",
      "/images/besideright.jpg",
      "/images/besideleft.jpg",
      "/images/farsight.jpg"
  ]

  return (
<div className="lg:w-3/4 mx-auto my-2 max-w-5xl"> 
      {/* //carousel-image */}
      <Carousel loop>
        {images.map((src, i) => {
          return (
            <div className="min-w-0 flex-[0_0_100%]" key={i}>
              <Image src={src}  className="object-cover aspect-video" alt="alt" width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};