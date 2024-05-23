import React from "react";
import { TiStarburst } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="p-[50px_20px] gap-[40px] lg:p-[80px_80px] grid lg:grid-cols-2">
      <div className="">
        <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
          <TiStarburst className="text-primary" />
          <p className="uppercase">Drop us a line</p>
          <TiStarburst className="text-primary" />
        </div>
        <div className="mt-[10px]">
          <p className="text-start leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[30px] lg:text-[45px] font-[800]">
            Connect with GreenStixz
          </p>
          <p className="font-inter ">
            Ready to take the first step towards unlocking opportunities,
            realizing goals, and embracing innovation? We&apos;re here and eager
            to connect.
          </p>
        </div>
        <div className="mt-[20px] flex flex-col space-y-[20px]">
          <div className="flex items-center space-x-[10px]">
            <div className="h-[50px] w-[50px] bg-primary"></div>
            <div>
              <p className="font-inter">To More Inquiry</p>
              <p className="font-inter font-[600] text-[18px]">
                +990-737 621 432
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-[10px]">
            <div className="h-[50px] w-[50px] bg-primary"></div>
            <div>
              <p className="font-inter">To Send Mail</p>
              <p className="font-inter font-[600] text-[18px]">
                info@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] w-full lg:w-[60%]">
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
      <div className="border lg:border-none rounded-[10px] p-[20px_10px] lg:p-[10px] flex flex-col items-start space-y-[20px]">
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Name</p>
          <input
            type="text"
            className="h-[50px] border-b outline-none w-full mt-[5px] font-inter px-[10px]"
            placeholder="John Doe"
          />
        </div>
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Email</p>
          <input
            type="text"
            className="h-[50px] border-b outline-none w-full mt-[5px] font-inter px-[10px]"
            placeholder="name@example.com"
          />
        </div>
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Message</p>
          <textarea
            className="h-[150px] p-[10px] border-b outline-none w-full mt-[5px] font-inter"
            placeholder="Message..."
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;