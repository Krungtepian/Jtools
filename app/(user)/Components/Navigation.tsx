"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const links = [
    ['/home', 'หน้าเเรก'],
    ['/about-us', 'เกี่ยวกับเรา'],
    ['/news', 'ข่าวสารและกิจกรรม'],
    ['/service', 'สินค้าและบริการ'],
    ['/contact-us', 'ติดต่อพวกเรา']
  ]
  return (
      <nav className="w-full bg-white top-0 left-0 right-0 z-10 fixed">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex  items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className='max-w-fit'>
                <h2 className="text-2xl font-semibold">Jtool logo</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                     <AiOutlineClose/>
                  ) : (
                    <AiOutlineMenu />
                  )}
                </button>
              </div>
          </div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                <ul className="h-screen md:h-auto items-center justify-end md:flex">
                  {links.map((l: any) => {
                    return <li className=" lg:text-xl md:text-sm sm:text-xs text-black py-1 md:px-5 text-center border-b-2 md:border-b-0  hover:bg-gray-100 hover:text-blue-400 items-center rounded-full active:scale-105">
                    <Link href={l[0]} onClick={() => setNavbar(!navbar)}>
                      {l[1]}
                    </Link>
                  </li>
                  })}
                    
                </ul>
          </div>
        </div>
      </nav>

  );
            }
  export default Navigation ; 