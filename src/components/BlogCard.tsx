import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type BlogCardProps = {
  index: number;
};
function BlogCard({ index }: BlogCardProps) {
  return (
    <div className="h-[430px] border rounded-[10px] flex flex-col" key={index}>
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
        <Link href="/blog" className="underline flex items-center font-inter">
          <p>Read More</p>
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
