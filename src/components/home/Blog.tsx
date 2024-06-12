"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { TiStarburst } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import BlogCard from "../BlogCard";
import { getBlogPosts } from "@/service";
import { Fade, Zoom } from "react-awesome-reveal";

function Blog() {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const hasBlog = blogs?.length > 0;


  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogs(posts);
        // console.log(posts);
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="p-[50px_20px] lg:p-[80px_80px] flex items-center justify-center">
        <div className="text-center font-inter">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-[50px_20px] lg:p-[80px_80px] flex items-center justify-center">
        <div className="text-center text-red-500">Failed to load posts</div>
      </div>
    );
  }

  return (
    <div className="p-[50px_20px] lg:p-[80px_150px] flex items-center justify-center">
      <div className=" grid gap-[40px] lg:grid-cols-3 2xl:container ">
        <div className="p-[20px_10px] h-[430px] flex flex-col items-start justify-between">
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
        <Zoom direction="up" triggerOnce={true}>
        {hasBlog ? (
          blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
        ) : (
          <div className="text-center">No posts yet</div>
        )}
        </Zoom>
      </div>
    </div>
  );
}

export default Blog;
