"use client";
import React, { useState } from 'react'
import logo from "../../../public/img/Tripbangla.png"
import Image from 'next/image'

import { IoAirplaneOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";

export default function Navbar() {

    const [visible , setVisible] = useState(true)
    const navMiddle = <>
         <div className='flex flex-col items-center mr-[2rem]'>
         <IoAirplaneOutline className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></IoAirplaneOutline>
         <li className='text-[0.8rem] font-bold border-b-2 border-[#D82128] pb-1 '>  Flight</li>
         </div>
         <div className='flex flex-col items-center mr-[2rem]'>
         <LiaHotelSolid className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></LiaHotelSolid>
         <li className='text-[0.8rem] font-bold '> Hotel</li>
         </div>

         <div className='flex flex-col items-center mr-[2rem]'>
         <FaUmbrellaBeach className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></FaUmbrellaBeach>
         <li className='text-[0.8rem] font-bold '>  Holidays</li>
         </div>
         <div className='flex flex-col items-center mr-[2rem]'>
         <RiBook2Line className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></RiBook2Line>
         <li className='text-[0.8rem] font-bold '> Visa</li>
         </div>
        
     
    </>
    return (
        <div className='bg-base-100 shadow-lg sticky top-0'>
            <div className="navbar  w-[88%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <Image src={logo} alt="Trip Logo" width={130} height={48} quality={100} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navMiddle}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='mr-2 text-[0.9rem] font-extrabold text-white bg-[#D82128] py-2 px-5 rounded-3xl'>Sign In</button>
                    <button className='text-[0.9rem] font-extrabold text-[#D82128] border-1 border-[#D82128] py-1.5 px-4 rounded-3xl'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
