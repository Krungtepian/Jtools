"use client"

import React from 'react'

type Props = {}

export default function SlideShow({}: Props) {
  return (
    // <div classNameName='flex justify-center border flex-col text-center shadow-lg px-64 py-52'>
    //     <h1 classNameName='font-medium text-5xl p-0 m-0'>SlideShow</h1>
    // </div>
    <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
        <div className="relative h-auto overflow-hidden rounded-lg md:h-96">
            <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.discordapp.net/attachments/1010821781596156024/1145356770294890557/jtool_pic.jpg?width=1888&height=1028" className="absolute block w-full lg:-translate-x-1/4 lg:-translate-y-1/4 lg:top-1/4 lg:left-1/4 md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 " alt="..."></img>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item >
                {/* <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
  )
}