import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function LetsConnect() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[10px] p-[50px_20px] lg:p-[80px_80px]">
      <p className="text-center font-[700] text-[30px] lg:text-[40px] font-inter ">
        Let&apos;s Connect
      </p>
      <div className="flex flex-col items-center justify-center font-inter w-full lg:w-[60%] ">
        <p className="text-[20px] text-center my-[15px]">
          Follow us on social media to stay updated on the latest news, trends,
          and insights in the world of digital marketing and technology.
        </p>
        <p className="text-[20px] text-center ">
          Join our community of innovators, entrepreneurs, and industry leaders
          as we shape the future of digital together.
        </p>
        <div className="flex items-center space-x-[30px] mt-[30px]">
          <a
            href="https://www.facebook.com/greenstixznetworks?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook className="text-[30px] text-primary cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/greenstixz-networks/"
            target="_blank"
          >
            <FaLinkedin className="text-[30px] text-primary cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/greenstixznetworks?igsh=MTdwOWM0eWh2cHQ1bw=="
            target="_blank"
          >
            <FaInstagram className="text-[30px] text-primary cursor-pointer" />
          </a>
          <a
            href="https://x.com/greenstixz?t=gR0uEl9FjOZbBgVSMdJGDA&s=09"
            target="_blank"
          >
            <FaXTwitter className="text-[30px] text-primary cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LetsConnect;
