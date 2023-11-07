"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);
  return (
      <nav className="w-full bg-white top-0 left-0 right-0 z-10 fixed">
        <div className="mx-auto md:items-center md:flex lg:px-4 md:px-2 sm:px-2 w-full justify-between lg:text-base ">
          <div className="flex flex-row items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className='max-w-fit'>
                <h2 className="text-2xl font-semibold w-fit">Jtool logo</h2>
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
                <ul className=" md:h-auto items-center flex flex-row w-full justify-end">
                    <li className=" lg:text-xl md:text-sm sm:text-xs text-black py-1 md:px-5 text-center border-b-2 md:border-b-0  hover:bg-gray-100 hover:text-blue-400 items-center rounded-lg active:scale-105">
                      <Link href="/home" onClick={() => setNavbar(!navbar)}>
                        หน้าเเรก
                      </Link>
                    </li>
                    <li className="lg:text-xl md:text-sm sm:text-xs text-black py-1 px-5 text-center  border-b-2 md:border-b-0  hover:text-blue-400  hover:bg-gray-100 rounded-lg active:scale-105">
                      <Link href="/about-us" onClick={() => setNavbar(!navbar)}>
                        เกี่ยวกับเรา
                      </Link>
                    </li>
                    <li className="lg:text-xl md:text-sm sm:text-xs text-black py-1 px-5 text-center  border-b-2 md:border-b-0  hover:text-blue-400  hover:bg-gray-100 rounded-lg active:scale-105">
                      <Link href="/news" onClick={() => setNavbar(!navbar)}>
                        ข่าวสารและกิจกรรม
                      </Link>
                    </li>
                    <li className="lg:text-xl md:text-sm sm:text-xs text-black py-1 px-5 text-center  border-b-2 md:border-b-0  hover:text-blue-400 hover:bg-gray-100 rounded-lg active:scale-105">
                      <Link href="/service" onClick={() => setNavbar(!navbar)}>
                        สินค้าและบริการ
                      </Link>
                    </li>
                    <li className="lg:text-xl md:text-sm sm:text-xs text-black py-1 px-5 text-center  border-b-2 md:border-b-0  hover:text-blue-400 hover:bg-gray-100 rounded-lg active:scale-105">
                      <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                        ติดต่อพวกเรา
                      </Link>
                    </li>
                </ul>
          </div>
        </div>
      </nav>

  );
            }
  export default Navigation ; 