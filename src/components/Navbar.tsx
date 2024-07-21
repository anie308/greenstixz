/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import logo from '@/assets/svg/greenlogo.svg'


function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className=" shadow sticky top-0 z-30 dark:bg-[#242627] bg-white lg:p-[15px_80px] flex items-center justify-between">
      <div className="p-[10px_20px] lg:p-0 flex w-full lg:w-fit items-center justify-between lg:justify-start">
        <Link href="/">
        <Image src={logo} alt="GreenStixz Networks" className="h-[60px] w-[160px]" />
        </Link>
        <div className="lg:hidden flex items-center space-x-[10px]">
          <ThemeSwitcher />
          <div onClick={() => setShow(!show)}>
            <HiOutlineBars3 className="text-[30px]" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-[40px] mr-[-5%]">
        {links.map((item, index) => (
          <Link
            key={index}
            className="font-inter hover:text-primary transition-colors font-[500]"
            href={item.to}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-[20px]">
        <a href="https://api.whatsapp.com/send?phone=2348023670860&text=Hi%20GreenStixz,%20I%20am%20interested%20in%20a%20quote%20for%20your%20service,%20my%20name%20is-%20service,%20my%20name%20is-" target="_blank" rel="noopener noreferrer">
        <button className="hidden lg:flex dark:bg-white font-[500] bg-primary dark:text-primary text-white font-inter p-[10px_20px] rounded-[5px]">
          Start Growing
        </button></a>
        

        <div className="hidden lg:flex">
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={`${
          show ? "left-0" : "left-[-100%]"
        } fixed  lg:hidden h-screen dark:bg-black bg-white  top-0 text-white p-[20px] w-full transition-all z-30`}
      >
        <div className="lg:hidden flex items-center justify-end">
          <FiPlus
            className="text-[30px] rotate-45 dark:text-white text-black"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="flex flex-col space-y-[20px]">
          {links.map((item, index) => (
            <Link
            onClick={() => setShow(!show)}
              key={index}
              className="font-inter text-[30px] dark:text-white text-black hover:text-primary transition-colors font-[500]"
              href={item.to}
            >
              {item.title}
            </Link>
          ))}
          <button onClick={() => setShow(!show)} className="w-[50%]  text-center items-center justify-center flex dark:bg-black font-[500] bg-primary dark:text-primary text-white font-inter border border-primary p-[10px_20px] rounded-[5px]">
            Start Growing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact",
    to: "/contact",
  },
 
];
