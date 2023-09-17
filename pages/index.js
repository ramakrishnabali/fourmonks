import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Logo from "../public/Logo.png"
import scooter from "../public/scooter.png"
import { FaRupeeSign } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main
      className={`flex min-h-screen flex-col`}
    >
    <nav className="relative bg-neutral-700 p-6 w-full ">
      <div className="max-w-full mx-auto flex items-center pl-5 pr-5 justify-between">
        <div className="text-white font-bold text-xl">
        {/* background: url(<Logo>), lightgray -7.774px -34.96px / 130.114% 465.455% no-repeat; */}
        <Image src={Logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10 ml-[30px]">
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Storie</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Loev</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">One</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">SuperBike</a>
        </div>
        <div className="hidden md:flex space-x-8 ml-auto">
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Book Now</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Book a Test Ride</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Became a Dealer</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-red">
            <svg className="h-6 w-6" fill="none" strokeLinecap="pointer" strokeLinejoin="pointer" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block w-full text-white hover:text-neutral-700 hover:bg-gray-200 text-[20px] text-500 font-Pathway Extreme">Storie</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Loev</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">One</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">SuperBike</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">BookNow</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Book a Test Ride</a>
          <a href="#" className="block text-white hover:text-gray-300 text-[20px] text-500 font-Pathway Extreme">Became a Dealer</a>
        </div>
      )}
    </nav>
    <div className='flex flex-col'>
        <div className='bg-white pt-4'>
          <div className='flex justify-around items-center mt-4 mb-2'>
            <h1 className='w-[116px] text-black text-900 font-Pathway Extreme text-[28px]'>Storie</h1>
            <div className='flex items-center justify-between space-x-7'>
              <div className='bg-black h-[25px] w-[25px] rounded-full'></div>
              <h1 className='text-black text-600 font-Pathway Extreme text-[25px]'>Sparkling Black</h1>
            </div>
          </div>
          <hr  className='w-11/12 h-[2px] mt-5 mb-5'/>
          <div className='flex justify-items-center w-full'>
              <Image src={scooter} alt="scooter" />
          </div>

          <div className='flex h-auto items-start mt-6 m-4'> 
            <div className='h-[100px] flex flex-col justify-between'>
              <h1 className='text-black font-medium text-[18px] font-Pathway Extreme'>Booking Amount</h1>
              <div className='flex items-center'>
                < FaRupeeSign className='w-[27px] h-[27px] mt-2' />
                <h1 className='text-black font-bold text-[35px] font-Pathway Extreme'>2500/-</h1>
              </div>
            </div>
            <div className='h-[100px] flex flex-col justify-between ml-auto'>
              <h1 className='opacity-60 text-black font-bold text-[18px] font-Pathway Extreme'>*Ex-Showroom price in <br/> <span className='opacity-50 text-black font-bold text-[18px] font-Pathway Extreme'>(incl. FAME II subsidy)</span></h1>
              <div className='flex items-center'>
                < FaRupeeSign className='w-[27px] h-[27px] mt-2' />
                <h1 className='text-black font-semibold text-[35px] font-Pathway Extreme'>1,17,351/-</h1>
              </div>
            </div>
            <div className='flex items-start ml-[15px] hover:pointer'>
              <h1  className='text-black font-medium text-[18px] font-Pathway Extreme'>New Delhi</h1>
              < IoLocationOutline className='w-[23px] h-[23px]' />
            </div>
            
          </div> 
        </div>
    </div>

    <div className='bg-light-gray-primary p-6'>
      <div className='flex items-cetner justify-between mb-5'>
        <h1 className='text-[15px] font-medium text-black-600 tracking-wide font-Pathway Extreme uppercase tracking-wide'>01 Select Model</h1>
        <h1 className='text-[15px] font-medium text-black-600 tracking-wide font-Pathway Extreme uppercase tracking-wide'>02 Select Color</h1>
      </div>
      <h1 className='text-[15px] mt-8 font-bold text-black-600 tracking-wide font-Pathway Extreme uppercase tracking-wide opacity-50'>03 Your Details And Prefered Location</h1>
      <h1 className='w-full mt-8 font-bold text-[25px] text-black-800 font-Pathway Extreme leading-9 non-italic'>Choose <br/> a Color</h1>
    </div>

    <div className='bg-black px-5 py-10'>
      <div className='flex flex-col items-center'>
        <h1 className='w-full text-center text-white font-Pathway Extreme text-[24px] font-medium'>Stay Informed About Battre</h1>
        <div className='w-full mt-7 flex items-center h-[50px]'>
          <input type='text' className='h-full bg-gray-500 w-3/4 text-black text-[20px] outline-transparent font-normal font-Pathway Extreme p-4' placeholder='Your email Id' />
          <button type="button" className='bg-white h-full w-1/4 bg-gray'>Subscribe</button>
        </div> 
      </div>
      <hr  className='w-full h-[2px] mt-5 mb-5'/>
    </div>
    </main>
  )
}
