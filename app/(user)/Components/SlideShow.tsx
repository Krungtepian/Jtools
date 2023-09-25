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
<div className="lg:w-3/4 mx-auto my-2"> //carousel-image
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