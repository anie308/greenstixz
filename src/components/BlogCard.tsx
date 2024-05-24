import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";


function BlogCard({ blog }: { blog: any }) {
  const imageUrl = `https:${blog?.featuredImage?.fields?.file?.url}`;
  const width = blog?.featuredImage?.fields?.file?.details?.image?.width;
  const height = blog?.featuredImage?.fields?.file?.details?.image?.height;
  return (
    <div className="h-[430px]  dark:bg-[#242627] rounded-[10px] flex flex-col shadow">
      <div className="h-[250px] w-full border-b relative overflow-hidden rounded-t-[10px]">
        <div className="absolute"></div>
        <div className="border-b h-full w-full">
          <Image className="h-full w-full" height={height} width={width} src={imageUrl} alt=""/>
        </div>
      </div>
      <div className="p-[20px] flex flex-col grow items-start justify-between">
        <div className="flex items-center space-x-[10px]">
          <p className="text-[13px] underline font-inter">Cyber Security</p>
          {/* <p className="text-[13px] font-inter">Comments (16)</p> */}
        </div>
        <div className="text-[22px] font-inter font-[500]">
          {blog?.title}
        </div>
        <Link href={`/blog/${blog?.slug}`} className="underline flex items-center font-inter">
          <p>Read More</p>
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
