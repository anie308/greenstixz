"use client";

import React from "react";
import { TiStarburst } from "react-icons/ti";
import { Slide } from "react-awesome-reveal";

function FMBArticle() {
  return (
    <div className="flex-col items-center flex justify-center my-[80px] p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] uppercase">
          FMB ARTICLE HIGHLIGHT
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <Slide direction="up" className="flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-[40px] w-full lg:w-[70%] mt-[40px]">
          <div className="border p-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde a
            aperiam excepturi ad rerum molestias, sunt architecto laboriosam
            nisi, doloribus nesciunt animi sapiente! Fugit recusandae quidem
            ipsam voluptatem necessitatibus provident.
          </div>
          <div className="border p-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde a
            aperiam excepturi ad rerum molestias, sunt architecto laboriosam
            nisi, doloribus nesciunt animi sapiente! Fugit recusandae quidem
            ipsam voluptatem necessitatibus provident.
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default FMBArticle;
