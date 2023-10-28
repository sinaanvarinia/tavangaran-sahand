import React from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "@/constants";
import Image from "next/image";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div
      className={`w-full justify-center flex ${styles.navbar} opacity-80 fixed`}
    >
      <nav className="container flex flex-row justify-between items-center">
        {/* right side */}
        <div className=" hidden sm:flex">
          <ul className={`flex flex-row ${styles.contentColor}`}>
            {navbarItems.map((item) => (
              <li className="p-5 " key={item.id}>
                <a href="#" className="flex flex-row gap-2  items-center ">
                  <span className="sm:max-md:hidden max-lg:text-xs ">{item.title}</span>
                  <item.icon />
                </a>
                <i></i>
              </li>
            ))}
          </ul>
        </div>
        {/* left side*/}
        <div className="flex flex-row justify-between items-center">
          <div className="sm:hidden flex p-3 text-white">
            <BsMenuButtonWideFill  />
          </div>
          <div className="flex ">
            <Image
              className=""
              width={50}
              height={50}
              src="/logo.svg"
              alt="logo"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
