import AboutUs from "@/components/aboutUs/AboutUs";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
// import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Footer/>
    </main>
  );
}
