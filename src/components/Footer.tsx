import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "@/assets/svg/greenlogo.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-green-50 dark:bg-[#242627] p-[50px_20px] lg:p-[80px_80px] ">
      <div className="grid gap-[40px] lg:grid-cols-4">
        <div>
          <Link href="/" className="">
            <Image
              src={logo}
              alt="GreenStixz Networks"
              className="h-[60px] w-[180px]"
            />
          </Link>
          <div className="mt-[10px] font-inter font-[400]">
            We Help Emerging Business Build, Grow & Scale their Brand through
            Expert Marketing, Branding, Web And Software Development Solutions.
          </div>
        </div>

        <div>
          <p className="text-[25px] font-inter font-[700]">Our Solutions</p>
          <div className="flex flex-col items-start justify-center mt-[10px] space-y-[10px]">
            <p className="font-inter text-[16px] font-[500]">
              Digital Marketing (Full-fledged)
            </p>
            <p className="font-inter text-[16px] font-[500]">
              Personal/Corporate Branding
            </p>
            <p className="font-inter text-[16px] font-[500]">Web Development</p>
            <p className="font-inter text-[16px] font-[500]">
              Software Development
            </p>
          </div>
        </div>
        <div>
          <p className="text-[25px] font-inter font-[700]">Company</p>
          <div className="flex flex-col space-y-[10px] mt-[10px]">
            {links.map((item, index) => (
              <Link
                key={index}
                className="font-inter text-[16px] dark:text-white text-black hover:text-primary transition-colors font-[500]"
                href={item.to}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-inter font-[700] text-[25px]">
            Follow us on our Socials
          </p>
          {/* <div className="bg-white dark:bg-black space-x-[10px] flex items-center mt-[10px] p-[8px_10px] rounded-[5px]">
            <input
              type="email"
              className="outline-none font-inter grow h-[40px] bg-transparent px-[10px]"
              placeholder="Enter email"
            />
            <button className="bg-primary p-[10px] rounded-full">
              <FaTelegramPlane className="text-white" />
            </button>
          </div> */}
          <div className="mt-[20px]">
            {/* <p className="font-inter text-[16px] font-[600] underline">
              Socials So You Stay Connected To Us!
            </p> */}

            <div className="flex items-center space-x-[30px] mt-[20px]">
              <a
                href="https://www.facebook.com/greenstixznetworks?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook className="text-[25px] text-primary cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/greenstixz-networks/"
                target="_blank"
              >
                <FaLinkedin className="text-[25px] text-primary cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/greenstixznetworks?igsh=MTdwOWM0eWh2cHQ1bw=="
                target="_blank"
              >
                <FaInstagram className="text-[25px] text-primary cursor-pointer" />
              </a>
              <a
                href="https://x.com/greenstixz?t=gR0uEl9FjOZbBgVSMdJGDA&s=09"
                target="_blank"
              >
                <FaXTwitter className="text-[25px] text-primary cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;

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
