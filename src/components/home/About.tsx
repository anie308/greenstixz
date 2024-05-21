import React from 'react'
import { TiStarburst } from "react-icons/ti";


function About() {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center p-[50px_20px] lg:p-[80px_80px] 2xl:container'>
        <div className="w-fit flex items-center dark:bg-[#242627] bg-green-50 p-[5px_10px] space-x-[5px] rounded-[5px]">
              <TiStarburst className="text-primary" />
              <p>Discover GreenStixz</p>
              <TiStarburst className="text-primary" />
            </div>
            <p>Next.js is the React framework for production</p>
        </div>
    </div>
  )
}

export default About