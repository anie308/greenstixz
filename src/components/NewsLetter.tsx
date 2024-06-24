import React from "react";

function NewsLetter() {
  return (
    <div className="flex flex-col items-center w-full justify-center space-y-[20px] p-[50px_20px] lg:p-[80px_80px]">
      <p className="text-center font-[700] text-[30px] lg:text-[40px] font-inter">
        Subscribe to Our Newsletter
      </p>

      <div className="h-[350px] w-full lg:w-[60%] border">
        <iframe
          src="https://markettalksandinsights.substack.com/embed"
          className="w-full h-full text-black dark:text-white font-inter bg-white dark:bg-black"
          // style={{ border: "1px", borderColor: "#EEE", background: "white" }}
        ></iframe>
      </div>
    </div>
  );
}

export default NewsLetter;
