import React from "react";
import styles from "./Navbar.module.css";
import { navbarItems } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={`w-full justify-center flex ${styles.navbar} opacity-90`}>
      <nav className="container  flex flex-row justify-between items-center">
        <div className="right">
          <ul className={`flex flex-row ${styles.contentColor}`}>
            {navbarItems.map((item) => (
              <li className="p-5 " key={item.id}>
                <a href="#" className="flex flex-row gap-2  items-center ">
                  <span>{item.title}</span>
                  <item.icon />
                </a>
                <i></i>
              </li>
            ))}
          </ul>
        </div>
        <div className="left ">
          <Image
            className=""
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
