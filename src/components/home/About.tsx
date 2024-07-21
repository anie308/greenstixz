"use client";
import Image from "next/image";
import React from "react";
import { TiStarburst } from "react-icons/ti";
import starburst from "@/assets/svg/starburst.svg";
import CountUp from "react-countup";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-[50px_20px] lg:p-[80px_80px] 2xl:container">
        <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
          <TiStarburst className="text-primary" />
          <p className="font-inter text-[12px] lg:text-[14px] uppercase">
            Discover GreenStixz
          </p>
          <TiStarburst className="text-primary" />
        </div>
        <p className="font-inter text-[20px] text-start lg:text-center mt-[20px]">
          GreenStixz is not just a service provider – we are architects of
          digital transformation, <br className="hidden lg:block" /> dedicated
          to reshaping your brand’s online destiny. We’re your strategic partner
          in the digital space. <br className="hidden lg:block" /> We craft
          tailored solutions that elevate your brand, drive online growth, and
          harness the power of effective web development.
        </p>
        <Slide
          direction="up"
          triggerOnce={true}
          className="flex items-center justify-center"
        >
          <div className="grid lg:grid-cols-3 gap-[40px] lg:gap-[80px] mt-[50px]">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-[150px] w-[150px] ">
                <Image className="w-[150px] h-[150px]" src={starburst} alt="" />
                <div className="absolute top-0 flex items-center justify-center  h-full w-full">
                  <CountUp
                    enableScrollSpy={true}
                    className="font-inter text-[40px] font-[600]"
                    end={210}
                    duration={5}
                    suffix="+"
                  />
                </div>
              </div>
              <p className="font-inter text-[18px] mt-[20px] font-[600]">
                Successful Projects
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative h-[150px] w-[150px] ">
                <Image className="w-[150px] h-[150px]" src={starburst} alt="" />
                <div className="absolute top-0 flex items-center justify-center  h-full w-full">
                  <CountUp
                    enableScrollSpy={true}
                    className="font-inter text-[40px] font-[600]"
                    end={48}
                    duration={5}
                    suffix="+"
                  />
                </div>
              </div>
              <p className="font-inter text-[18px] mt-[20px] font-[600]">
                Businesses
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative h-[150px] w-[150px]">
                <Image className="w-[150px] h-[150px]" src={starburst} alt="" />
                <div className="absolute top-0 flex items-center justify-center  h-full w-full">
                  <CountUp
                    enableScrollSpy={true}
                    className="font-inter text-[40px] font-[600]"
                    end={92}
                    duration={5}
                    suffix="%"
                  />
                </div>
              </div>
              <p className="font-inter text-[18px] mt-[20px] font-[600]">
                Success Rate
              </p>
            </div>
          </div>
        </Slide>
        <div className="mt-[50px]">
          <a href="https://api.whatsapp.com/send?phone=2348023670860&text=Hi%20GreenStixz,%20I%20am%20interested%20in%20a%20quote%20for%20your%20service,%20my%20name%20is-%20service,%20my%20name%20is-" target="_blank" rel="noopener noreferrer">
          <button className="bg-primary rounded-[5px] text-white font-inter p-[10px_20px]">
            Requst Proposal
          </button></a>
          
        </div>
      </div>
    </div>
  );
}

export default About;
