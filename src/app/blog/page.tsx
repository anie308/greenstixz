import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
function Blog() {
  return (
    <div className="flex flex-col items-center p-[30px_20px] lg:p-[80px_80px]">
      <div className="my-[40px]">
        <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[40px] lg:text-[65px] font-[800]">Our Articles</p>
      </div>
     <div className="grid gap-[20px] lg:grid-cols-3 w-full lg:w-[80%] mt-[50px]">
     {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="h-[430px] border rounded-[10px] flex flex-col"
          key={index}
        >
          <div className="h-[250px] w-full border-b relative overflow-hidden rounded-t-[10px]">
            <div className="absolute"></div>
            <div className="bg-green-100 h-full w-full"></div>
          </div>
          <div className="p-[20px] flex flex-col grow items-start justify-between">
            <div className="flex items-center space-x-[10px]">
              <p className="text-[13px] underline font-inter">Cyber Security</p>
              <p className="text-[13px] font-inter">Comments (16)</p>
            </div>
            <div className="text-[22px] font-inter font-[500]">
              How to Been population the Startup Company of this.
            </div>
            <Link
              href="/blog"
              className="underline flex items-center font-inter"
            >
              <p>Read More</p>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}

export default Blog;
