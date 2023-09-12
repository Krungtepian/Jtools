import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="py-6">
            <div className="px-2 mx-10 justify-between flex-row flex">
                <div className="max-w-xs">
                        <div rel="noopener noreferrer" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full">
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div>
                            <span className="self-center max-w-xl">
                                <Link className="lg:text-2xl md:text-xl sm:text-md font-semibold" href="/">
                                    J Tools TECHNOLOGY Company Limited
                                </Link>
                                <p className="lg:text-base md:text-sm sm:text-xs font-ligth">
                                    เจ ทูลล์ เทคโนโลยี จำกัด
                                </p>
                            </span>
                        </div>
                </div>

                <div className="flex flex-row justify-between w-7/12">
                    <div className="text-center md:text-left w-full" >
                        <p className="pb-1 lg:text-lg md:text-base sm:text-sm font-medium">เมนูหลัก</p>
                        <ul className="pl-2 text-gray-500 lg:text-base md:text-sm sm:text-xs">
                            <li>
                              <Link href="/" className=" hover:text-violet-400">เมนูหลัก</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/about-us" className="hover:text-violet-400">เกี่ยวกับเรา</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/customer-service" className="hover:text-violet-400">สินค้าและบริการ</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="blog-feed" className="hover:text-violet-400">ประกาศและข่าวสาร</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="text-center lg:text-left w-full">
                        <p rel="noopener noreferrer" className="hover:text-violet-400 pb-1 lg:text-lg md:text-base sm:text-sm font-medium">ติดต่อเรา</p>

                        <ul className="p-2 text-gray-500 lg:text-md md:text-sm sm:text-sm">
                            <li className="flex flex-row">
                                    <Link rel="noopener noreferrer" href="#" className="hover:text-violet-400">ติดต่อเรา</Link>
                            </li>
                                <li className="flex flex-row">
                                    <p>tell icon</p>
                                    <Link rel="noopener noreferrer" href="#" className="pl-1 hover:text-violet-400">089 893 1510</Link>
                                </li>
                                <li className="flex flex-row">
                                    <p>Gmail icon</p>
                                    <Link rel="noopener noreferrer" href="#" className="hover:text-violet-400 pl-1">Contact@jtools.com</Link>
                                </li>
                                <li className="flex flex-row">
                                    <p>Place</p>
                                    <Link rel="noopener noreferrer" href="#" className="hover:text-violet-400 pl-1">สถานที่</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
