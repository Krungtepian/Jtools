"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {
    const [menuOpen, setmenuOpen] = useState(false)

    const  handleMenu = () => {
        setmenuOpen(!menuOpen)
    }


    const handleClose = () => {
        setmenuOpen(menuOpen)
    }

  return (
    <div className='border-b'> 
        <nav className="bg-white border-gray-200 px-5">
            <div className="max-w-screen-xl flex justify-between mx-auto py-3 flex-rowrounded-none">
                <div className="flex flex-row pl-10">
                    <Link href="/" className="flex flex-row justify-around">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">JTools Logo</span>
                    </Link>
                    <div className="mr-6"><AiOutlineMenu onClick={handleMenu} className="sm:hidden text-2xl cursor-pointer justify-end ml-"/></div>                  
                </div>
                
                <div className={menuOpen ? 'left-0 top-0 w-[65%] h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50': 'hidden'}>
                    <div className="flex absolute top-6 right-6 w-full justify-end items-center">
                        <AiOutlineClose onClick={handleMenu} className="text-2xl text-black mb-4" />
                    </div>
                    <ul className="flex flex-col justify-center items-center mt-20 font-medium p-4 lg:text-lg md:text-md sm:text-sm">
                        <li><Link href="/home" className="py-2 pl-3 pr-4 text-grey rounded hover:bg-gray-100 hover:text-blue-400 mb-4">หน้าแรก</Link></li>
                        <li><Link href="/about-us" className=" py-2 pl-3 pr-4 text-grey rounded  hover:bg-gray-100 hover:text-blue-400 mb-4" >เกี่ยวกับเรา</Link></li>
                        <li><Link href="/news" className=" py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-400 mb-4">ข่าวสารและกิจกรรม</Link></li>
                        <li><Link href="/customer-service" className=" py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-400 mb-4">สินค้าและบริการ</Link></li>
                        <li><Link href="/contact-us" className=" py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-400 mb-4">ติดต่อเรา</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}


export default Navigation ; 