'use client'

import React from "react";
import { TiStarburst } from "react-icons/ti";
import { IoMdDisc } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

function WithUs() {
  return (
    <div className="flex-col items-center flex justify-center my-[40px] p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] uppercase">
          AT GREENSTIXZ YOU CAN
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <div className="flex flex-col mt-[20px] items-center justify-center">
        <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[30px]  lg:text-[45px] font-[800]">
          Activate Your Brand&apos;s Digital Revolution
        </p>
        <div className="flex flex-col items-center justify-center space-y-[20px] mt-[20px] w-full lg:w-[60%]">
          <p className="font-inter text-center">
            Emerging businesses often find themselves lost, trying really hard
            but not getting noticed. They lack clear direction and the support
            needed to grow, stopping them from making a real impact.
          </p>
          <p className="font-inter text-center">
            That’s when GreenStixz steps in. We’re like a friendly guide in this
            digital jungle, not just providing services but becoming a strategic
            partner for businesses like yours.
          </p>
          <p className="font-inter text-center">
            Success is more than just a good idea; it’s a journey. With
            GreenStixz, you get ongoing support, smart guidance, and a
            commitment to helping your business grow and make a difference
            online. It’s like having a reliable friend to light the way in the
            digital world.
          </p>
        </div>

        <Slide className="w-full items-center justify-center flex" direction="up" triggerOnce={true}>
        <div className="w-full lg:w-[65%] grid lg:grid-cols-3 mt-[50px] gap-[40px]">
          <div className=" border rounded-[10px] p-[15px] shadow">
            <p className="font-[600] font-inter text-[25px]">Our Services</p>
            <div className="my-[15px] flex flex-col items-start space-y-[10px]">
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Digital Marketing (Full-fledged)
                </p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Personal/Corporate Branding
                </p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Web Development</p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Software Development</p>
              </div>
            </div>
          </div>
          <div className=" border rounded-[10px] p-[15px] shadow">
            <p className="font-[600] font-inter text-[25px]">Process</p>
            <div className="my-[15px] flex flex-col items-start space-y-[10px]">
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Consultation & Strategy</p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Tailored Solutions Development
                </p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Implementation & Execution
                </p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Continuous Optimization</p>
              </div>
            </div>
          </div>
          <div className=" border rounded-[10px] p-[15px] shadow">
            <p className="font-[600] font-inter text-[25px]">
              Roadmap to Success
            </p>
            <div className="my-[15px] flex flex-col items-start space-y-[10px]">
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Define Clear Objectives</p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Design Strategic Solutions
                </p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">Develop with Precision</p>
              </div>
              <div className="flex items-center space-x-[5px]">
                <IoMdDisc className="text-primary" />
                <p className="font-inter font-[400]">
                  Deliver Exceptional Results
                </p>
              </div>
            </div>
          </div>
        </div>
        </Slide>
      </div>
    </div>
  );
}

export default WithUs;
