"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineBars3 } from "react-icons/hi2";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className=" shadow sticky top-0 z-30 dark:bg-[#242627] bg-white lg:p-[15px_80px] flex items-center justify-between">
      <div className="p-[15px_20px] lg:p-0 flex w-full lg:w-fit items-center justify-between lg:justify-start">
        <Link href="/">Greenstixz</Link>
        <div className="lg:hidden flex items-center space-x-[10px]">
          <ThemeSwitcher />
        <div  onClick={() => setShow(!show)}>
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
        <button className="hidden lg:flex dark:bg-white font-[500] bg-primary dark:text-primary text-white font-inter p-[10px_20px] rounded-[5px]">
          Start Growing
        </button>

       <div className="hidden lg:flex">
       <ThemeSwitcher />
       </div>
      </div>
      <div
        className={`${
          show ? "left-0" : "left-[-100%]"
        } fixed  lg:hidden h-screen bg-black top-0 text-white p-[20px] w-full transition-all`}
      >
        <div className="lg:hidden border" onClick={() => setShow(!show)}>
          loll
        </div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut
        architecto error ut beatae? Numquam eius porro aperiam? Ipsum repellat
        cum veniam autem. Adipisci possimus reprehenderit quia quae perspiciatis
        vitae?
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
    title: "Contact",
    to: "/contact",
  },
  {
    title: "Blog",
    to: "/blog",
  },
];
