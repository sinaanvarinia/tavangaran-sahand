import AboutUs from "@/components/aboutUs/AboutUs";
import Address from "@/components/address/Address";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <AboutUs />
      <Address/>
      <Footer/>
    </main>
  );
}
