import React from "react";

function AboutHero() {
  return (
    <div className="flex flex-col items-start p-[50px_20px] lg:p-[100px_80px]">
      <p className="text-start leading-[40px] lg:leading-[60px] dark:text-white text-[#0B0C0C] font-inter text-[30px] lg:text-[50px] font-[800]">
        Welcome to <span className="text-primary">GreenStixz Networks</span>, where innovation meets excellence in
        digital solutions.
      </p>
      <p className="font-inter text-[22px] leading-[30px] mt-[10px]">
        We are a dynamic team of creative minds dedicated to empowering
        businesses and individuals with cutting-edge technology and strategic
        marketing solutions.
      </p>
      <p  className="font-inter text-[22px] leading-[30px] mt-[10px]">
        At GreenStixz, we believe in the transformative power of digital
        platforms to drive growth, foster connections, and elevate brands to new
        heights.
      </p>
      <button className="bg-primary rounded-[5px] text-white font-inter p-[10px_30px] mt-[20px]">Grow with Us</button>

    </div>
  );
}

export default AboutHero;
