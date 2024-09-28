"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/images/image1.png",
    "/images/image.png",
    "/images/image.png",

    "/images/image1.png",
    "/images/image.png",
    "/images/image1.png",
    "/images/image.png",
  ];
  return (
    <ImagesSlider className="h-[94vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 0,
          x: 10,
        }}
        transition={{
          duration: 3,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        
      </motion.div>
    </ImagesSlider>
  );
}
