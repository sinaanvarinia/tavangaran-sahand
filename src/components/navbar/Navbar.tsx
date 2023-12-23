import React from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "@/constants";
import Image from "next/image";
import Menu from "../menu/Menu";

const Navbar = () => {
  return (
    <div
      className={`font-IranYekan w-full justify-center flex ${styles.navbar}  `}
    >
      <nav className="container flex flex-row justify-between items-center">
        {/* desktop menu */}
        <div className=" hidden sm:flex sm:w-full mx-auto">
          <ul className={`flex flex-row ${styles.contentColor}`}>
            {navbarItems.map((item) => (
              <li className="p-3 hover:text-slate-400" key={item.id}>
                <a
                  href={`${item.href}`}
                  className="flex flex-row gap-2  items-center "
                >
                  <span className="sm:max-md:hidden max-lg:text-xs ">
                    {item.title}
                  </span>
                  <i className="">
                    <item.icon />
                  </i>
                </a>
                <i></i>
              </li>
            ))}
          </ul>
        </div>
        <i className="hidden sm:flex ">
          <Image width={50} height={50} src="/logo.svg" alt="logo" />
        </i>

        {/* mobile menu */}
        <div className="  sm:w-2/12 sm:hidden p-3 text-white flex flex-row justify-between items-center w-full">
          <Menu />
          <Image
            className=""
            width={50}
            height={50}
            src="/logo.svg"
            alt="logo"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
