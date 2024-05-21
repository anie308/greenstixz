import Link from "next/link";
import React from "react";
import { TiStarburst } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
function Blog() {
  return (
    <div className="p-[50px_20px] lg:p-[80px_80px] flex items-center justify-center">
      <div className="grid gap-[40px] lg:grid-cols-3  2xl:container">
        <div className=" p-[20px_10px] h-[430px] flex flex-col items-start justify-between">
          <div>
            <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
              <TiStarburst className="text-primary" />
              <p>Latest Posts</p>
              <TiStarburst className="text-primary" />
            </div>
            <p className="font-[700] text-[40px] font-inter mt-[15px]">
              Our Articles
            </p>
            <p className="font-inter">
              Sed accumsan sem cursus luctus porta. amem Phasellu du enim,
              efficitur quis velit ac, fringilla posuere leo fusci ullamcorper
              id porent gone this way.
            </p>
          </div>
          <Link href="/blog" className="underline flex items-center font-inter">
            <p>See All Articles</p>
            <GoArrowUpRight />
          </Link>
        </div>
        {Array.from({ length: 2 }).map((_, index) => (
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
                <div className="text-[22px] font-inter font-[500]">How to Been population the Startup Company of this.</div>
            <Link href="/blog" className="underline flex items-center font-inter">
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
