import Link from "next/link";
import React from "react";
import { TiStarburst } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import BlogCard from "../BlogCard";
function Blog() {
  return (
    <div className="p-[50px_20px] lg:p-[80px_80px] flex items-center justify-center">
      <div className="grid gap-[40px] lg:grid-cols-3  2xl:container">
        <div className=" p-[20px_10px] h-[430px] flex flex-col items-start justify-between">
          <div>
            <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
              <TiStarburst className="text-primary" />
              <p className="font-inter text-[12px] lg:text-[14px] uppercase">
                Latest Posts
              </p>
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
          <BlogCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
