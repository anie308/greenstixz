import React from "react";
import { TiStarburst } from "react-icons/ti";
import vision from '@/assets/img/vision.jpg'
import Image from "next/image";

function Vision() {
  return (
    <div className="flex-col items-center flex justify-center my-[100px]  p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] font-[600] uppercase">
          OUR VISION
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <div className="w-full lg:w-[75%] grid lg:grid-cols-2 mt-[50px] gap-[40px]">
        <div className="flex-col flex space-y-[20px]">
          <div className="flex items-center space-x-[5px]">
            <p className="font-inter font-[500] text-[20px]">
              Our vision is to be the leading provider of digital solutions,
              recognized for our innovation, expertise, and unwavering
              commitment to client success.
            </p>
          </div>
          <div className="flex items-center space-x-[5px]">
            <p className="font-inter font-[500] text-[20px]">
              We aspire to create a digital ecosystem where businesses can
              flourish, connect with their audience, and achieve their full
              potential.
            </p>
          </div>
        </div>
        <div className="border h-[300px] rounded-[10px] lg:h-[400px]">
        <Image src={vision} className="rounded-[10px] w-full h-full object-cover" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Vision;
