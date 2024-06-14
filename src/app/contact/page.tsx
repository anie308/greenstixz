'use client'

import React, { useState } from "react";
import { TiStarburst } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
function Contact() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC as string

  const sendMessage = () => {
    try {
      if (!name.trim() || !email.trim() || !message.trim()) {
        toast.error("Please fill all fields")
      } else {
        const templateParams = {
          user_name: name,
          email: email,
          message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(() => {
          toast.success("Email sent  successfully");
          setEmail("")
          setMessage("")
          setName("")
        })
      }
    } catch (error) {
      console.log("error sending", error)
    }
  }

  //hello@greenstixznetworks.com
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
            At GreenStixz Networks, we&rsquo;re not just a service provider – we&rsquo;re
            your trusted partner in digital transformation.
          </p>
          <p className="font-inter ">
            Join us and experience the power of innovation, collaboration, and
            excellence in digital solutions.
          </p>
        </div>
        <div className="mt-[20px] flex flex-col space-y-[20px]">
          <div className="flex items-center space-x-[10px]">
            <IoCallOutline className="text-[40px] text-primary" />
            <div className="flex flex-col">
              <p className="font-inter">To More Inquiry</p>
              <a
                href="tel:08023670860"
                className="font-inter font-[500] text-[18px]"
              >
                +2348023670860
              </a>
              <a
                href="tel:09039261156"
                className="font-inter font-[500] text-[18px]"
              >
                +2349039261156
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-[10px]">
            <IoMailOutline className="text-[40px] text-primary" />
            <div className="flex flex-col ">
              <p className="font-inter">To Send Mail</p>
              <a
                href="mailto:hello@greenstixznetworks.com"
                className="font-inter leading-[18px] font-[500] text-[18px]"
              >
                hello@greenstixznetworks.com
              </a>
              <a
                href="mailto:greenstixznetworks@gmail.com"
                className="font-inter leading-[18px] font-[500] text-[18px]"
              >
                greenstixznetworks@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[20px] w-full lg:w-[60%]">
          <p className="font-inter text-[16px] font-[500] underline">
            Socials So You Stay Connected To Us!
          </p>

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
      <div className="border lg:border-none rounded-[10px] p-[20px_10px] lg:p-[10px] flex flex-col items-start space-y-[20px]">
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Name</p>
          <input
            type="text"
            className="h-[50px] border-b outline-none w-full mt-[5px] font-inter px-[10px]"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Email</p>
          <input
            type="text"
            className="h-[50px] border-b outline-none w-full mt-[5px] font-inter px-[10px]"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          <p className="font-inter text-[16px]  ">Your Message</p>
          <textarea
            className="h-[150px] p-[10px] border-b outline-none w-full mt-[5px] font-inter"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="w-full flex items-center justify-end">
          <button onClick={sendMessage} className="bg-primary h-[40px] px-[40px] rounded-[5px] text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
