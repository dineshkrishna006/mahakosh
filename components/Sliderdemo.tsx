import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
const Sliderdemo = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full max-w-xl">
      <Slider {...settings}>
        {/* <div> */}
        <Image
          src="/images/image1.png"
          alt="Picture of the author"
          width={1000}
          height={500}
        />
        {/* </div> */}
        {/* <div> */}
        <Image
          src="/images/image.png"
          alt="Picture of the author"
          width={1000}
          height={500}
        />
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default Sliderdemo;
