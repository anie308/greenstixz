'use client'
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import {useTypewriter} from 'react-simple-typewriter';

function Hero() {
    const [typeEffect] = useTypewriter({
        words: ['Build', 'Grow', 'Scale'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,
    })
  return (
    <div className="p-[50px_20px] lg:p-[100px_20px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-[10px]">
        <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[8px_15px] space-x-[5px] rounded-full">
          <MdOutlineStar className="text-primary" />
          <p className="font-inter text-[12px] lg:text-[14px]">EXPERTISE YOU CAN TRUST</p>
          <MdOutlineStar className="text-primary" />
        </div>
        <div className="flex flex-col items-center space-y-[15px]">
          <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[40px] lg:text-[65px] font-[800]">
            The Only Partner you need to <br className="hidden lg:block" />
            <span className="text-primary"> {typeEffect}</span> your Brand
          </p>
          <p className=" font-inter  text-[15px] lg:text-[18px] text-center">
            We Help Emerging Business Build, Grow & Scale their Brand through
            Expert Marketing, <br className="hidden lg:block" />
            Branding, Web And Software Development Solutions.
          </p>
        </div>
      </div>
      <div className="w-[100%] lg:w-[70%] h-[300px] lg:h-[500px] border mt-[50px]"></div>
    </div>
  );
}

//Build Grow

export default Hero;
