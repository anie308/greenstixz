import React from "react";

function Apart() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[20px] p-[50px_20px] lg:p-[80px_80px]">
      <p className="text-center font-[700] text-[30px] lg:text-[40px] font-inter">
        What Sets Us Apart
      </p>
      <div className="w-full lg:w-[60%] grid xl:grid-cols-2 gap-[40px] mt-[20px]">
        <div className="border p-[20px] flex flex-col items-center">
          <p className="font-inter text-[23px] font-[500]">
            Innovative Solutions
          </p>
          <p className="font-inter text-[16px] font-[400] text-center">
            We stay ahead of the curve by embracing the latest technologies and
            trends to deliver innovative solutions that drive results
          </p>
        </div>
        <div className="border p-[20px] flex flex-col items-center">
          <p className="font-inter text-[23px] font-[500]">
          Tailored Approach
          </p>
          <p className="font-inter text-[16px] font-[400] text-center">
          We understand that every business is unique, which is why we take a personalized approach to each project, ensuring that our solutions are tailored to meet the specific needs and goals of our clients.
          </p>
        </div>
        <div className="border p-[20px] flex flex-col items-center">
          <p className="font-inter text-[23px] font-[500]">
          Strategic Partnerships
          </p>
          <p className="font-inter text-[16px] font-[400] text-center">
          We believe in the power of collaboration and strive to build strong, collaborative partnerships with our clients, working together to achieve mutual success.
          </p>
        </div>
        <div className="border p-[20px] flex flex-col items-center">
          <p className="font-inter text-[23px] font-[500]">
          Tailored Approach
          </p>
          <p className="font-inter text-[16px] font-[400] text-center">
          Our team of experts brings a wealth of knowledge and experience to the table, with diverse backgrounds in marketing, branding, web development, and more. We are passionate about what we do and are dedicated to helping our clients succeed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apart;
