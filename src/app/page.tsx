import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
// import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head> */}
      <Navbar />
      <Hero />
      <Footer/>
    </main>
  );
}
