"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-black font-bold ">Jtool logo</h2>
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
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-100 hover:text-blue-400">
                  <Link href="/home" onClick={() => setNavbar(!navbar)}>
                    หน้าเเรก
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-blue-400  hover:bg-gray-100">
                  <Link href="/about-us" onClick={() => setNavbar(!navbar)}>
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-blue-400  hover:bg-gray-100">
                  <Link href="/news" onClick={() => setNavbar(!navbar)}>
                    ข่าวสารและกิจกรรม
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-blue-400 hover:bg-gray-100">
                  <Link href="/customer-service" onClick={() => setNavbar(!navbar)}>
                    สินค้าและบริการ
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-blue-400 hover:bg-gray-100">
                  <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                    ติดต่อพวกเรา
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
            }
  export default Navigation ; 