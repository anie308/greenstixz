"use client";

import BlogCard from "@/components/BlogCard";
import { client, getBlogPosts } from "@/service";
import React, { useEffect } from "react";

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
        console.log(posts);
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setError(error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center p-[30px_20px] lg:p-[20px_80px]">
      <div className="mb-[40px] mt-[20px]">
        <p className="text-center leading-[40px] lg:leading-[70px] dark:text-white text-[#0B0C0C] font-inter text-[40px] lg:text-[65px] font-[800]">
          Our Articles
        </p>
      </div>
      <div className="grid gap-[20px] lg:grid-cols-3 w-full lg:w-[80%] my-[20px]">
        {hasBlog ? (
          blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
        ) : (
          <div>No posts yet</div>
        )}
      </div>
    </div>
  );
}

export default Blog;
