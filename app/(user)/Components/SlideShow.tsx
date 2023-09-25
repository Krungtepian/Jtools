"use client";

import React from 'react'
import Carousel from './Carousel'

type Props = {}

export default function SlideShow({}: Props) {
    const images = [
    "https://cdn.discordapp.com/attachments/1129443288097759322/1155516155872690217/jtool_pic_1.png",
    "https://cdn.discordapp.com/attachments/1129443288097759322/1155516155872690217/jtool_pic_1.png",
    "https://cdn.discordapp.com/attachments/1129443288097759322/1155516155872690217/jtool_pic_1.png",
    "https://cdn.discordapp.com/attachments/1129443288097759322/1155516155872690217/jtool_pic_1.png"
  ];
  return (
    // <div classNameName='flex justify-center border flex-col text-center shadow-lg px-64 py-52'>
    //     <h1 classNameName='font-medium text-5xl p-0 m-0'>SlideShow</h1>
    // </div>
<div className="lg:w-3/4 mx-auto my-2">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className=" min-w-0 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <img src={src}  className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};