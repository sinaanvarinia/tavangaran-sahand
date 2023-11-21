import Address from "@/components/address/Address";
import { Hero } from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Slider from "@/components/slider/Slider";
import SliderCube from "@/components/sliderCube/SliderCube";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Intro />
      {/* <Slider /> */}
      {/* <SliderCube/> */}
      <Address />
    </main>
  );
}
