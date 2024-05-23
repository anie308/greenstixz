import BlogCard from "@/components/BlogCard";
import React from "react";

function Blog() {
  return (
    <div className="flex flex-col items-center p-[30px_20px] lg:p-[20px_80px]">
      <div className="mb-[40px] mt-[20px]">
        <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[40px] lg:text-[65px] font-[800]">Our Articles</p>
      </div>
     <div className="grid gap-[20px] lg:grid-cols-3 w-full lg:w-[80%] my-[20px]">
     {Array.from({ length: 6 }).map((_, index) => (
        <BlogCard key={index} index={index} />
      ))}
     </div>
    </div>
  );
}

export default Blog;
