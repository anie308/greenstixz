import React from "react";
import { TiStarburst } from "react-icons/ti";
import mission from '@/assets/img/mission.jpg'
import Image from "next/image";
function Mission() {
  return (
    <div className="flex-col items-center flex justify-center my-[20px] p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] font-[600] uppercase">
          OUR MISSION
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <div className="w-full lg:w-[75%] grid lg:grid-cols-2 mt-[50px] gap-[40px]">
        <div className="border h-[300px] rounded-[10px] lg:h-[400px]">
         <Image src={mission} className="w-full rounded-[10px] h-full object-cover" alt=""/>
        </div>
        <div className="flex-col flex space-y-[20px]">
          <div className="flex items-center space-x-[5px]">
            <p className="font-inter font-[400] text-[20px]">
              At GreenStixz Networks, our mission is to revolutionize the
              digital landscape by providing comprehensive and customized
              solutions that empower businesses to thrive in an ever-evolving
              market.
            </p>
          </div>
          <div className="flex items-center space-x-[5px]">
            <p className="font-inter font-[400] text-[20px]">
              We are committed to delivering exceptional results, fostering
              innovation, and building long-lasting partnerships with our
              clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
