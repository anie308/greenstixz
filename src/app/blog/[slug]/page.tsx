/* eslint-disable @next/next/no-img-element */
"use client";

import { getEntryBySlug } from "@/service";
import React, { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsLetter from "@/components/NewsLetter";

function SinglePost({ params }: { params: { slug: string } }) {
  const [post, setPost] = React.useState<any>({});

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const post = await getEntryBySlug(params.slug, "blogPost");
        setPost(post);
      } catch (error) {
        console.log(error);
      }
    };
    getSinglePost();
  }, [params.slug]);
  

  return (
    <div className="p-[50px_20px] w-full  lg:p-[80px_50px]  flex flex-col items-center justify-center">
      {post ? (
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[30px] font-inter font-[700] ">
            {post?.fields?.title}
          </h1>
          <div className="h-[300px] lg:h-[400px] w-full  mt-[20px] overflow-hidden">
            <img
              src={`https:${post?.fields?.featuredImage?.fields?.file?.url}`}
              className="h-full w-full object-cover rounded-[10px]"
              alt=""
            />
          </div>

          <div className="mt-[40px] prose font-inter text-[16px] lg:text-[18px] leading-relaxed dark:text-white prose-a:text-primary">
            {documentToReactComponents(post?.fields?.content)}
          </div>
        </div>
      ) : null}
      <NewsLetter />
    </div>
  );
}

export default SinglePost;
