'use client'
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import {useTypewriter} from 'react-simple-typewriter';
import { Slide } from "react-awesome-reveal";

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
          <p className="font-inter text-[12px] lg:text-[14px] uppercase">EXPERTISE YOU CAN TRUST</p>
          <MdOutlineStar className="text-primary" />
        </div>
        <div className="flex flex-col items-center space-y-[20px]">
          <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[40px] lg:text-[65px] font-[800]">
            The Only Partner you need to <br className="hidden lg:block" />
            <span className="text-primary"> {typeEffect}</span> your Brand
          </p>
          <p className=" font-inter  text-[15px] lg:text-[18px] text-center">
            We Help Emerging Business Build, Grow & Scale their Brand through
            Expert Marketing, <br className="hidden lg:block" />
            Branding, Web And Software Development Solutions.
          </p>
          <a href="https://api.whatsapp.com/send?phone=2348023670860&text=Hi%20GreenStixz,%20I%20am%20interested%20in%20a%20quote%20for%20your%20service,%20my%20name%20is-%20service,%20my%20name%20is-" target="_blank" rel="noopener noreferrer">
          <button className="bg-primary rounded-[5px] text-white font-inter p-[10px_20px]">
            Start Growing
          </button></a>
        </div>
      </div>
      <Slide direction="up" triggerOnce={true} className="w-[100%] flex items-center justify-center">
      <div className="w-[100%] lg:w-[70%] h-[300px] lg:h-[500px] shadow  mt-[50px] rounded-[20px] border">
      <iframe className="w-full h-full rounded-[20px]" src="https://www.youtube.com/embed/uQy_jBBPyf0?si=rTGY-gL2ARIME5WZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      </Slide>
    </div>
  );
}
//width="560" height="315"
//Build Grow

export default Hero;
