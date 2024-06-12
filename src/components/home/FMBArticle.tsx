"use client";

import React, { useEffect } from "react";
import { TiStarburst } from "react-icons/ti";
import { Slide } from "react-awesome-reveal";
import img from '@/assets/img/excerpts1.jpg'
import Image from "next/image";
import Link from "next/link";

function FMBArticle() {

  return (
    <div className="flex-col items-center flex justify-center my-[100px] p-[50px_20px] lg:p-[10px_20px]">
      <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
        <TiStarburst className="text-primary" />
        <p className="font-inter text-[12px] lg:text-[14px] uppercase">
          FMB ARTICLE HIGHLIGHT
        </p>
        <TiStarburst className="text-primary" />
      </div>
      <Slide direction="up" className="flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-[40px] w-full lg:w-[75%] mt-[50px]">
          <div className="p-[20px] flex flex-col items-start justify-center">
           <p className="font-inter font-[600] text-[40px] leading-[45px]">Excerpts from Fix My Business Bootcamp v1.0</p>
           <p className="font-inter font-[400] text-[16px] my-[20px]">At the Bootcamp, GreenStixz in collaboration with Learn Africa, Abasifreke Thompson, Kingsley Ime, Aniefon, and Daniel helped fixed common business problems for the business owners who attended the event.</p>
           <Link href="/blog/fix-my-business-bootcamp">
           <button  className="bg-primary rounded-[5px] text-white font-inter p-[10px_20px]">
            Read Full Articles
          </button>
           </Link>
          </div>
          <div className="rounded-[10px]">
            <Image src={img} alt="Excerpts from Fix My Business Bootcamp v1.0" className="rounded-[10px]" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default FMBArticle;
