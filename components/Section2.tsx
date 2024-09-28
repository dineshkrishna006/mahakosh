"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
const Section2 = () => {
  return (
    <div className="flex h-[100vh] justify-evenly items-center md:flex-row flex-col md:gap-5">
      <div className="flex md:w-[50vw] items-center justify-center p-3">
        <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="/images/mainproduct.jpeg"
            alt="MainProduct"
            width={500}
            height={500}
          />
        </BackgroundGradient>
      </div>
      <div className=" flex  flex-col gap-2 items-start md:w-[50vw] md:p-4 p-[20px] ">
        <h1 className="text-5xl  font-bold">
          We provide you{" "}
          <span className="text-cyan-400">Super Quality Oil</span>
        </h1>
        <p className="text-lg mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          nunc vel odio ultricies tincidunt. Nullam nec sapien nec mi tempus
          semperLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          nunc vel odio ultricies tincidunt. Nullam nec sapien nec mi tempus
          semper
        </p>
        <button
          className="bg-green-500 mt-4 rounded px-3 py-1 text-lg"
          onClick={() => {
            alert("Just kept this button for demo purpose");
          }}
        >
          Check details
        </button>
      </div>
    </div>
  );
};

export default Section2;
