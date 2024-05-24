import React from "react";
import { TiStarburst } from "react-icons/ti";
import { IoMdDisc } from "react-icons/io";

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
      <div className="w-full lg:w-[75%] grid lg:grid-cols-2 mt-[50px] gap-[40px]">
        <div className="border h-[300px] p-[20px] lg:h-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo aut
          velit vero sit debitis in sunt facilis, eveniet et dolorem illo
          doloribus ipsam repellendus quaerat ea perspiciatis reiciendis quam.
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
              Comprehensive Digital Solutions: GreenStixz offers a holistic
              suite of digital services, seamlessly integrating marketing,
              branding, web development, and software solutions.
            </p>
          </div>
          <div className="flex items-center space-x-[5px]">
            <IoMdDisc className="text-primary text-[40px]" />
            <p className="font-inter font-[400]">
              Comprehensive Digital Solutions: GreenStixz offers a holistic
              suite of digital services, seamlessly integrating marketing,
              branding, web development, and software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChose;
