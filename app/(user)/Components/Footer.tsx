'use client'

import Link from "next/link";
import React, { useEffect } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { MdPlace } from "react-icons/md";
import { Loader } from '@googlemaps/js-api-loader'


export default function Footer() {

    useEffect(() => {
        let map: any;
        const loc = { lat: 14.386937, lng: 100.593500 }
        const loader = new Loader({
            apiKey: "AIzaSyAVwZ5F86meBjtnDjoi-a5vNkMbPxpYj14",
            version: "weekly",
          });
          
          loader
            .importLibrary('maps')
            .then(({ Map, MapTypeId }) => {
                map = new Map(document.getElementById("map"), {
                    center: loc,
                    zoom: 18,
                    gestureHandling: 'none',
                    streetViewControl: false,
                    mapTypeId: MapTypeId.HYBRID,
                    disableDefaultUI: true,
                    clickableIcons: false
                });
            })
            .catch((e) => {
                // do something
                console.log(e)
            });

            loader
              .importLibrary('marker')
              .then(({ Marker }) => {
                new Marker({
                  position: loc,
                  map,
                  title: "JToolsTechnology",
                });
              })
              .catch((e) => {
                  // do something
                  console.log(e)
              });
            
    }, [])

    return (
        <>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
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
                            <div id="map" className="h-[300px]" onClick={() => window.open("https://maps.app.goo.gl/AfbKDhJhVr4He3KeA")}></div>
				</div>
				<div className="p-5">
                    <p rel="noopener noreferrer" className="pb-1 lg:text-lg md:text-base sm:text-sm font-medium">ติดต่อเรา</p>

                        <ul className="p-2 text-gray-500 lg:text-md md:text-sm sm:text-sm">
                            <li className="flex flex-row">
                                    <Link rel="noopener noreferrer" href="contact-us" className="hover:text-violet-400">ติดต่อเรา</Link>
                            </li>
                                <li className="flex flex-row">
                                    <p><FaPhoneSquareAlt/></p>
                                    <Link rel="noopener noreferrer" href="#" className="pl-1 hover:text-violet-400">089 893 1510</Link>
                                </li>
                                <li className="flex flex-row">
                                    <p><SiGmail /></p>
                                    <Link rel="noopener noreferrer" href="#" className="hover:text-violet-400 pl-1">Contact@jtools.com</Link>
                                </li>
                                <li className="flex flex-row">
                                    <p><MdPlace /></p>
                                    <Link rel="noopener noreferrer" href="#" className="hover:text-violet-400 pl-1">สถานที่</Link>
                                </li>
                        </ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<footer className="font-semibold text-gray-400">
					© 2023 All rights reserved by &nbsp;
					<strong className="">
						FirelinkShrine
					</strong>
				</footer>
			</div>
            </>
    )
}
