/* 
import Link from "next/link"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Themetoggle } from "./theme-toggle"

export default function NavBar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="flex items-center gap-2" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden space-x-4 lg:flex">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          href="#"
        >
          Home
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          href="#"
        >
          Features
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-2">

        <Button className="lg:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <Themetoggle/>
      </div>
    </header>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
} */
"use client"
import { useState } from "react";
import { Themetoggle } from "./theme-toggle";
import { X } from 'lucide-react';

export default function NavBar() {
  const navLinks = [
    { name: "Home", href: "/#intro" },
    { name: "Experiences", href: "/#experiences" },
    { name: "CV", href: "/#cv" },
    { name: "A propos", href: "/#about" },
  ]

  const [isOpen, setisOpen]= useState(false)

  return (
<div className=" shadow-md top-0  w-full sticky   z-50 bg-white dark:bg-gray-900">
    <nav className=" w-full z-10 sticky top-0 left-0 right-0  max-w-[83rem] mx-auto px-8 py-2.5 lg:border-none lg:py-4 ">
        <div className="md:flex md:px-10 items-center justify-between">
           
                <div className="flex items-center space-x-2 gap-2">
                    <h2 className="text-black dark:text-white font-bold text-2xl">ABDev</h2>
                </div>
                <div onClick={()=> setisOpen(!isOpen)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
              {isOpen ?  <X/>:<button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>}
               
            </div>
            <div className="lg:block">
               {/*  <ul className="md:flex space-x-10 text-base font-bold text-black/60 dark:text-white md:pl-0 "> */}
                <ul className={`sm:max-md:drop-shadow-md md:flex md:items-center bg-white text-black/60  dark:bg-gray-900 dark:text-white md:pb-0 pb-12 absolute md:static  left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${isOpen ? 'top-12 ' : ' top-[-500px]'} ` }>
                    {navLinks.map((link, index) => (
                        <li key={index}
                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear my-7 md:my-0 md:ml-8">
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}

                <div className="flex md:ml-3 items-center space-x-2 gap-2">
                  <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Contact</button>
                  <Themetoggle/>
                </div>
                
           
                </ul>
                {/* <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Home</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Our services</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">About</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Contact</a>
                    </li>
                </ul> */}
            
            </div>
          
        </div>
    </nav>
</div>
)}