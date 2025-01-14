"use client";
import React from "react";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="w-full h-[6vh] sticky">
      <div className="flex flex-row justify-between p-1 pl-2">
        <Image
          src="/images/logo.png"
          alt="Picture of the author"
          width={100}
          height={200}
        />
        <div className="pr-2 relative">
          <div className="absolute right-0 rounded-full flex flex-col align-middle h-5 w-5 bg-[#E21E1A]">
            <p className=" text-center">1</p>
          </div>

          <GiShoppingCart size={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
