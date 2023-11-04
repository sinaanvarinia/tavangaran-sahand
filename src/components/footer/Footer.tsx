import Image from "next/image";
import styles from "./Footer.module.css";
import React from "react";
import { footerSiteLinks, footerLinks, contactUs } from "@/constants";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer}  bg-cover w-full flex flex-col items-center`}
    >
      <div className="container gap-32 flex flex-row justify-center  py-[50px] mx-auto">
        {/* 1 */}
        <div>
          <Image src="/logo.png" width={112} height={53} alt="logo" />
          <ul className="border-r-4 border-[#ECC009] mt-6">
            {footerSiteLinks.map((item) => (
              <li className="mb-[17px] pr-4 text-slate-100" key={item.id}>
                <Link href={"#"}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 2 */}
        <div >
          <h1 className="text-3xl text-slate-100 mb-[50px]">لینک های مرتبط</h1>
          <ul className="border-r-4 border-[#ECC009] mt-6 ">
            {footerLinks.map((item) => (
              <li className="mb-[17px] pr-4 text-slate-100" key={item.id}>
                <Link href={"#"}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 3 */}
        <div>
          <h1 className="text-3xl text-slate-100 mb-[50px]">تماس با ما</h1>
          <ul className="border-r-4 border-[#ECC009] mt-6">
            {contactUs.map((item) => (
              <li className="mb-[17px] pr-4 text-slate-100" key={item.id}>
                <span>{item.title}</span>
                <span dir="rtl" lang="fa" className="mr-2">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-slate-500 mt-5">
        copyright @ 2023 All rights reserved
      </div>
      <div className="text-slate-500  flex flex-row-reverse gap-2 items-center mt-2">
        made with <AiFillHeart /> by sina
      </div>
    </footer>
  );
};

export default Footer;
