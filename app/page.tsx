// import ImageSlider from "@/public/components/Slider";

import { ImagesSliderDemo } from "@/components/ImagesliderDemo";
import Section2 from "@/components/Section2";
import { div } from "framer-motion/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      <main className="flex h-[94vh]  flex-col items-center justify-center">
        <ImagesSliderDemo />
      </main>
      <div>
        <Section2 />
      </div>
    </div>
  );
}
