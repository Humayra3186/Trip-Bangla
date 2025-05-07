"use client";
import React, { useState } from 'react'
import { IoAirplaneOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { AiFillDownCircle } from "react-icons/ai";
export default function () {

  const [oneWay, setOneWay] = useState(true)
  const [roundTrip, setRoundTrip] = useState(false)
  const [multiCity, setMultiCity] = useState(false)



  return (
    <div className='relative  w-full h-auto'>
      <video className='absolute top-[-2.2rem] w-full h-[18rem] object-cover' src='https://cdn.pixabay.com/video/2021/02/18/65560-515098344_large.mp4' autoPlay muted loop playsInline ></video>

      <div className=' relative w-[88%] mx-auto mt-[2.3rem]'>
        {/* heading */}
        <p className='text-[2.67rem] font-extrabold text-white '>Create A New Story With Every Trip </p>
        <p className='text-[1rem] font-extrabold text-white mb-3'>Flights,Hotel,Holidays & Visas at your fingertips</p>

        {/* navlinks */}

        <ul className='lg:w-[51%] p-[0.3rem] h-auto grid grid-cols-4  mx-auto rounded-[0.5rem] bg-white relative top-[2rem] shadow-lg mt-3'>
          <div className='flex  items-center justify-center  bg-[#f0c1c147] rounded-[0.4rem]'>
            <IoAirplaneOutline className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></IoAirplaneOutline>
            <li className='text-[0.8rem] text-[#D82128] font-bold ml-3 '>  Flight</li>
          </div>
          <div className='flex  items-center justify-center py-4'>
            <LiaHotelSolid className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></LiaHotelSolid>
            <li className='text-[0.8rem] font-bold ml-3'> Hotel</li>
          </div>

          <div className='flex  items-center justify-center py-4'>
            <FaUmbrellaBeach className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></FaUmbrellaBeach>
            <li className='text-[0.8rem] font-bold ml-3'>  Holidays</li>
          </div>
          <div className='flex items-center py-4 justify-center'>
            <RiBook2Line className='text-center text-[1.17rem] mb-1 text-[#f68d8d]'></RiBook2Line>
            <li className='text-[0.8rem] font-bold ml-3'> Visa</li>
          </div>
        </ul>

        {/* ticket */}
        <div className='w-full h-[10rem] pt-[3rem] px-7 mt-2 rounded-2xl bg-white shadow-lg'>

          {/* selected options */}


          <section className='flex gap-4'>
            {/* one way btn */}
          <div className={oneWay ? `flex items-center  text-[#D82128] font-bold text-[0.98rem]` : `flex text-[0.98rem] items-center text-black`} onClick={() => {
            setOneWay(true)
            setRoundTrip(false)
            setMultiCity(false)
          }}> {oneWay && <AiFillDownCircle className='text-[1.1rem]'></AiFillDownCircle> || <FaRegCircle ></FaRegCircle>} <p className='cursor-pointer ml-1.5'>One Way</p> </div>

          {/* round trip btn */}
          <div className={roundTrip ? `flex items-center  text-[#D82128] font-bold text-[0.98rem]` : `flex text-[0.98rem] items-center text-black`} onClick={() => {

            setRoundTrip(true)
            setOneWay(false)
            setMultiCity(false)
          }}> {roundTrip && <AiFillDownCircle className='text-[1.1rem]'></AiFillDownCircle> || <FaRegCircle></FaRegCircle>} <p className='cursor-pointer ml-1.5'>Round Trip</p> </div>


          {/* multi city btn */}
          <div className={multiCity ? `flex items-center  text-[#D82128] font-bold text-[0.98rem]` : `flex text-[0.98rem] items-center text-black`} onClick={() => {

            setMultiCity(true)
            setOneWay(false)
            setRoundTrip(false)
          }}> {multiCity && <AiFillDownCircle className='text-[1.1rem]'></AiFillDownCircle> || <FaRegCircle></FaRegCircle>} <p className='cursor-pointer ml-1.5'>Multi City</p> </div>
          </section>
        </div>
      </div>

    </div>
  )
}
