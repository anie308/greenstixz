/* eslint-disable @next/next/no-img-element */

import { getAllSlugs, getEntryBySlug } from "@/service";
import React, { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsLetter from "@/components/NewsLetter";
import { CiUser } from "react-icons/ci";


// Function to generate static params
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs(); // Fetch all slugs from your data source
  return allSlugs.map((slug: string) => ({
    slug,
  }));
}


function SinglePost({ params }: { params: { slug: string } }) {
  const [post, setPost] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  // useEffect(() => {
  //   const getSinglePost = async () => {
  //     try {
  //       const post = await getEntryBySlug(params.slug, "blogPost");
  //       setPost(post);
  //       setLoading(false);
  //       setSuccess(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getSinglePost();
  // }, [params.slug]);

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const post = await getEntryBySlug(params.slug, "blogPost");
        setPost(post);
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      }
    };
    getSinglePost();
  }, [params.slug]);

  console.log(post);

  return (
    <div className="p-[50px_20px] w-full  lg:p-[80px_50px]  flex flex-col items-center justify-center">
      {loading && <div className="h-[400px] bg-gray-200 rounded-[10px] animate-pulse border w-full lg:w-[50%] flex items-center justify-center font-inter font-[500] text-[18px]">Loading...</div>}
      {success && post?.fields ? (
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[30px] lg:text-[40px] font-inter font-[700] leading-[35px] lg:leading-[45px]">
            {post?.fields?.title}
          </h1>
          <h1 className="text-[18px] lg:text-[25px] font-inter font-[400] leading-[25px] lg:leading-[30px] mt-[5px]">
            {post?.fields?.subtitle}
          </h1>
          <div className="h-[300px] lg:h-[400px] w-full  mt-[20px] overflow-hidden">
            <img
              src={`https:${post?.fields?.featuredImage?.fields?.file?.url}`}
              className="h-full w-full object-cover rounded-[10px]"
              alt=""
            />
          </div>
          <div className="mt-[20px] flex items-center space-x-[10px]">
            <div className="h-[50px] w-[50px] border rounded-full items-center justify-center flex">
              <CiUser className="text-[20px]" />
            </div>
            <div className="flex flex-col items-start ">
              <p className="font-inter text-[16px] font-[500] leading-[18px]">
                {post?.fields?.author}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                // href={post?.fields?.contactUrl}
                href={`${post?.fields?.contacturl}`}
                className="font-inter text-[14px] underline text-primary"
              >
                Contact
              </a>
            </div>
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


