import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-green-50 dark:bg-[#242627] p-[50px_20px] lg:p-[80px_80px] ">
      <div className="grid gap-[40px] lg:grid-cols-4">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          iure excepturi, at rerum neque omnis adipisci facilis, necessitatibus
          enim quibusdam, ipsum cumque est. Hic sapiente eos, eligendi
          consectetur ducimus officia?
        </div>
        <div>
          <p className="text-[25px] font-inter font-[700]">Our Solutions</p>
        </div>
        <div>
          <p className="text-[25px] font-inter font-[700]">Company</p>
        </div>
        <div>
          <p className="font-inter font-[700] text-[25px]">
            Subscribe to Newsletter
          </p>
          <div className="bg-white dark:bg-black space-x-[10px] flex items-center mt-[10px] p-[8px_10px] rounded-[5px]">
            <input
              type="email"
              className="outline-none font-inter grow h-[40px] bg-transparent px-[10px]"
              placeholder="Enter email"
            />
            <button className="bg-primary p-[10px] rounded-full">
              <FaTelegramPlane className="text-white" />
            </button>
          </div>
          <div className="mt-[20px]">
            <p className="font-inter text-[16px] font-[600] underline">
              Socials So You Stay Connected To Us!
            </p>

            <div className="flex items-center space-x-[30px] mt-[20px]">
            <div>
              <FaFacebook className="text-[30px] text-primary cursor-pointer" />
            </div>
            <div>
              <FaLinkedin className="text-[30px] text-primary cursor-pointer" />
            </div>
            <div>
              <FaInstagram className="text-[30px] text-primary cursor-pointer" />
            </div>
            <div>
              <FaXTwitter className="text-[30px] text-primary cursor-pointer" />
            </div>
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
