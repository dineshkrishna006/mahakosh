"use client";
import React from "react";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className="flex h-[100vh] justify-evenly items-center md:flex-row flex-col md:gap-5">
      <div className="flex md:w-[50vw] items-center justify-center">
        <Image
          src="/images/mainproduct.jpeg"
          alt="MainProduct"
          width={500}
          height={500}
        />
      </div>
      <div className=" flex items-start md:w-[50vw] md:p-2 p-[20px] flex-col justify-center">
        <h1 className="text-2xl font-bold">We provide you <span className="text-cyan-400">Super Quality Oil</span></h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          nunc vel odio ultricies tincidunt. Nullam nec sapien nec mi tempus
          semper
        </p>
        <button className="bg-green-500 mt-4 rounded px-3 py-1 text-lg" onClick={()=>{
            alert("Just kept this button for demo purpose")
        }}>Check details</button>
      </div>
    </div>
  );
};

export default Section2;
