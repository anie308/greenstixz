"use client";

import { getEntryBySlug } from "@/service";
import React, { useEffect } from "react";

function SinglePost({ params }: { params: { slug: string } }) {
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const post = await getEntryBySlug(params.slug, "blogPost");
        console.log(post);
      } catch (error) {
        console.log(error);
      }
    };
    getSinglePost();
    console.log("params", params);
  });

  return <div>{params?.slug}</div>;
}

export default SinglePost;
