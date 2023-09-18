import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Logo from "../public/Logo.png"
import scooter from "../public/scooter.png"
import { FaRupeeSign } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Insta from '@/public/insta.png'
import Fb from '@/public/fb.png'
import Youtube from '@/public/youtube.png'
import LinkedIn from '@/public/linkedin.png'
import Twitter from '@/public/twitter.png'
import {BsFillCircleFill} from 'react-icons/bs'
import { MdDone } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Green from "@/public/green.png"
import Grey from "@/public/grey.png"
import Blue from "@/public/blue.png"
import SkyBlue from "@/public/skyblue.png"
import Light from "@/public/light.png"
import Red from "@/public/red.png"
import White from "@/public/white.png"
import Yellow from "@/public/yellow.png"
import BlackScooter from '@/public/blackScooter.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [inputs , setInputs] = useState({
    activeColor : 1,
    activeScooter : scooter
  })

  const colorSelectors = [
    {
      id : 1,
      color : Green,
      image : scooter
    },
    {
      id : 2,
      color : Grey,
      image : BlackScooter
    },{
      id : 3,
      color : Blue,
      image : scooter
    },{
      id : 4,
      color :SkyBlue,
      image : BlackScooter
    },{
      id : 5,
      color : Light,
      image : scooter
    },{
      id : 6,
      color : Red,
      image : BlackScooter
    },{
      id : 7,
      color : White,
      image : scooter
    },{
      id : 8,
      color : Yellow,
      image : BlackScooter
    }
  ]



  return (
    <main
      className={`flex min-h-screen flex-col font-PExtreme w-full`}
    >
    <nav className="relative bg-neutral-700 w-full m-auto pt-4 pb-4 "> 
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
        {/* background: url(<Logo>), lightgray -7.774px -34.96px / 130.114% 465.455% no-repeat; */}
        <Image src={Logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10 ml-[30px]">
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">Storie</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">Loev</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">One</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">SuperBike</a>
        </div>
        <div className="hidden lg:flex space-x-5 ml-auto">
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">Book Now</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">Book a Test Ride</a>
          <a href="#" className="text-white hover:text-gray-300 text-[20px] text-500 ">Became a Dealer</a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-red">
            <svg className="h-6 w-6 text-white" fill="#fff" strokeLinecap="pointer" strokeLinejoin="pointer" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2 space-y-2 divide-y">
          <a href="#" className="mt-[20px] pl-[20px] md:hidden block w-full text-white hover:text-neutral-700 hover:bg-gray-200 text-[20px] text-500 ">Storie</a>
          <a href="#" className="md:hidden mt-[20px] pl-[20px] block text-white hover:text-gray-300 text-[20px] text-500 ">Loev</a>
          <a href="#" className="md:hidden mt-[20px] pl-[20px] block text-white hover:text-gray-300 text-[20px] text-500 ">One</a>
          <a href="#" className="md:hidden mt-[20px] pl-[20px] block text-white hover:text-gray-300 text-[20px] text-500 ">SuperBike</a>
          <a href="#" className="block mt-[20px] pl-[20px] text-white hover:text-gray-300 text-[20px] text-500 ">BookNow</a>
          <a href="#" className="block mt-[20px] pl-[20px] text-white hover:text-gray-300 text-[20px] text-500 ">Book a Test Ride</a>
          <a href="#" className="block mt-[20px] pl-[20px] text-white hover:text-gray-300 text-[20px] text-500 ">Became a Dealer</a>
        </div>
      )}
    </nav>

    <div className=' flex w-full flex-col lg:flex lg:flex-row lg:w-full lg:m-auto'> 
      <div className='flex flex-col lg:w-1/2 bg-white pt-7 pb-10'>
          <div className=' lg:w-11/12 lg:m-auto'>
            <div className='flex justify-between w-11/12 m-auto items-center mt-4 mb-2'>
              <h1 className='w-[116px] text-black text-900  text-[28px]'>Storie</h1>
              <div className='flex items-center justify-between space-x-7'>
                <div className='bg-black h-[25px] w-[25px] rounded-full'></div>
                <h1 className='text-black text-600  text-[25px]'>Sparkling Black</h1>
              </div>
            </div>
            <hr  className='w-11/12 m-auto h-[2px] mt-5 mb-5'/>

            <div className='w-11/12 m-auto'>
                <Image src={inputs.activeScooter} alt="scooter" priority={true}  className='m-auto'/>
            </div>

            <div className='w-11/12 m-auto flex justify-between h-auto items-start mt-6 shrink-0'> 
              <div className='h-[100px] flex flex-col justify-between'>
                <h1 className='text-black font-medium text-[15px] lg:text-[18px]'>Booking Amount</h1>
                <div className='flex items-center'>
                  < FaRupeeSign className='w-[27px] h-[27px] mt-2' />
                  <h1 className='text-black font-bold text-[23px] lg:text-[27px]'>2500/-</h1>
                </div>
              </div>
              <div className='flex '>
              <div className='h-[100px] flex flex-col justify-between shrink-0' >
                <h1 className='opacity-60 text-black font-bold text-[12px] lg:text-[15px] shrink-0'>*Ex-Showroom price in <br/> <span className='opacity-50 text-black font-bold text-[13px] '>(incl. FAME II subsidy)</span></h1>
                <div className='flex items-center'>
                  < FaRupeeSign className='w-[23px] h-[23px] mt-2' />
                  <h1 className='text-black font-semibold text-[23px] lg:text-[27px] shrink-0'>1,17,351/-</h1>
                </div>
              </div>
              <div className='flex items-start hover:pointer ml-2'>
                <h1  className='text-black font-medium text-[15px] lg:text-[18px]'>New Delhi</h1>
                < IoLocationOutline className='w-[23px] h-[23px]' />
              </div>
              </div>
              
            </div> 
          </div>
      </div>

      <div className='bg-[#f4f4f4] lg:w-1/2'>
        <div className='w-11/12 m-auto lg:w-11/12 lg:m-auto pt-7'>
        <div className='flex items-cetner justify-between mb-5'>
          <h1 className='text-[15px] font-medium text-black-600 tracking-wide  uppercase tracking-wide'>01 Select Model</h1>
          <h1 className='text-[15px] font-medium text-black-600 tracking-wide  uppercase tracking-wide'>02 Select Color</h1>
          <h1 className='hidden lg:inline text-[15px] font-bold text-black-600 tracking-wide  uppercase tracking-wide opacity-50'>03 Your Details And Prefered Location</h1>
        </div>
        <h1 className='lg:hidden text-[15px] mt-8 font-bold text-black-600 tracking-wide  uppercase tracking-wide opacity-50'>03 Your Details And Prefered Location</h1>
        <h1 className='w-full mt-8 font-bold text-[25px] text-black-800  leading-9 non-italic'>Choose <br/> a Color</h1>
        
        <div className='bg-white h-[200px] flex flex-col justify-between p-5 mt-6 lg:p-10 lg:h-[220px]'>
          <div className='flex mb-5 lg:w-3/4 lg:m-auto'>
              <MdDone  className='h-[20px] w-[20px] m-2'/>
            <div>
              <h1 className='text-black-900 font-bold text-[23px] leading-9'>Storie</h1>
              <h1 className='text-black text-600  text-[15px]'>Sparkling Black</h1>
            </div>
            <Image className='h-[85px] w-[100px] ml-auto lg:h-[100px] lg:w-[130px]' priority={true} src={inputs.activeScooter} alt='scooter'/>
          </div>

          <div className='w-full justify-between m-auto flex lg:w-3/4'>
            {colorSelectors.map(eachColor => {
              const {color,id,image} = eachColor
              const active = inputs.activeColor === id ? "rounded-full border-4 border-indigo-600":""
              return(
              < Image onClick={()=>{setInputs({...inputs , activeColor : id , activeScooter : image})}} key={id} src={color} alt="color" className={`${active} hover:cursor-pointer`} />
              )
  })}
          </div>
        </div>
        <div className='px-5 h-[50px] bg-black flex flex-row justify-between items-center mt-9 mb-10'>
            <h1 className='text-white text-[20px] uppercase'>confirm</h1>
            <BsArrowRight className='text-white w-[100px] h-[25px]'/>
        </div>
      </div>
      </div>
    </div>


    <div className='bg-black w-full pt-10'>
      <div className='w-11/12 m-auto lg:w-11/12 lg:pt-10'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
        <h1 className='w-full text-center text-white  text-[24px] font-medium lg:text-[45px] lg:text-start lg:font-bold'>Stay Informed <br/> About Battre</h1>
        <div className='w-full mt-7 flex items-center h-[50px] lg:mt-0 lg:h-[70px]'>
          <input type='text' className=' lg:w-1/2 h-full bg-gray-500 w-3/4 text-[#A1A1A1] text-[20px] outline-transparent font-normal  p-4' placeholder='Your email Id' />
          <button type="button" className='bg-white h-full w-1/4 bg-gray text-[15px] lg:text-[25px] font-medium'>Subscribe</button>
        </div> 
      </div>
      <hr  className='w-full h-[2px] mt-5 mb-5'/>
      
      <div className='lg:flex lg:felx-row lg:justify-between lg:py-10'>
        <div>
        <h1 className='w-full text-left text-white  text-[18px] font-normal'>Kasra No 351, 80 Feet Road, Vinayak City <br/> Guru Marg, Sirsi Road Neemera,</h1>
        <h1 className='w-full text-left text-white  text-[18px] font-normal mt-5'>Bindayaka, Jaipur, Rajasthan, 302041</h1>
        <h1 className='w-full text-left text-white  text-[18px] font-normal mt-5'>CIN: U29100RJ2017PTC059452</h1>
        </div>

        <div className='mt-8 flex lg:w-1/4 lg:mt-0'>
          <div className='w-1/2'>
            <h1 className='w-full text-left text-white  text-[18px] font-medium opacity-30'>Models</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Storie</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>One</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Loev</h1>
          </div>

          <div className='w-1/2'>
            <h1 className='w-full text-left text-white  text-[18px] font-medium opacity-30'>Company</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>About</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>BLog</h1>
          </div>
        </div>

        <div className='mt-8 flex lg:mt-0 lg:w-1/4'>
          <div className='w-1/2'>
            <h1 className='w-full text-left text-white  text-[18px] font-medium opacity-30'>Quick Links</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Become a Dealer</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Locate a Dealer</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Emagine</h1>
          </div>
          <div className='w-1/2 mt-7'>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Book a test ride</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Book now</h1>
            <h1 className='w-full mt-4 text-left text-white  text-[18px] font-normal'>Contact</h1>
          </div>
        </div>
      </div>
      <hr  className='w-full h-[2px] mt-5 mb-5'/>
      <div className='flex flex-col items-center gap-4  lg:flex lg:flex-row lg:justify-between mb-8'>
        <h1 className=' opacity-70 text-center text-white text-[18px] font-normal'><span className='text-[25px]'>©</span> 2023 Batt:RE. All rights reserved</h1>
        <div className='flex lg:gap-10 gap-5'>
          <h1 className='opacity-70 text-white text-center  text-[18px] font-normal'>PRIVACY POLICY</h1>
          <h1 className='opacity-70 text-white text-center  text-[18px] font-normal'>TERMS & CONDITIONS</h1>
        </div>
        <div className='flex w-2/5 lg:w-[250px] justify-between gap-5'>
          <Image src={Insta} alt='insta'className='w-[24px] h-[24px]'/> 
          <Image src={Fb} alt='fb'className='w-[24px] h-[24px]'/>
          <Image src={Twitter} alt='twitter'className='w-[24px] h-[24px]'/>
          <Image src={LinkedIn} alt='linkedin'className='w-[24px] h-[24px]'/>
          <Image src={Youtube} alt='youtube'className='w-[24px] h-[24px]'/>
          
        </div>

      </div>
      </div>
    </div>
    </main>
  )
}
