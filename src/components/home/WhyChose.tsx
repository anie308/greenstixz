"use client";

import React from "react";
import { TiStarburst } from "react-icons/ti";
import { IoMdDisc } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import about from "@/assets/img/about-g.jpg";
import Image from "next/image";

function WhyChose() {
  return (
    <div className="flex-col items-center flex justify-center my-[80px] p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] uppercase">
          WHY CHOOSE GREENSTIXZ
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <Slide
        className="w-full items-center justify-center flex"
        direction="up"
        triggerOnce={true}
      >
        <div className="w-full lg:w-[75%] grid lg:grid-cols-2 mt-[50px] gap-[40px]">
          <div className="border h-[300px] rounded-[10px] lg:h-[400px]">
            <Image
              src={about}
              alt="about"
              className="h-full w-full rounded-[10px]"
            />
          </div>
          <div className="flex-col flex space-y-[20px]">
            <div className="flex items-center space-x-[5px]">
              <IoMdDisc className="text-primary text-[40px]" />
              <p className="font-inter font-[400]">
                Comprehensive Digital Solutions: GreenStixz offers a holistic
                suite of digital services, seamlessly integrating marketing,
                branding, web development, and software solutions.
              </p>
            </div>
            <div className="flex items-center space-x-[5px]">
              <IoMdDisc className="text-primary text-[40px]" />
              <p className="font-inter font-[400]">
                Proven Strategies for Success: Our track record speaks for
                itself – we’ve consistently delivered results, propelling brands
                to digital excellence and market prominence.
              </p>
            </div>
            <div className="flex items-center space-x-[5px]">
              <IoMdDisc className="text-primary text-[40px]" />
              <p className="font-inter font-[400]">
                Expert Guidance and Support: Benefit from the expertise of a
                dedicated team, guiding you through every step of your digital
                journey with personalized support.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default WhyChose;
