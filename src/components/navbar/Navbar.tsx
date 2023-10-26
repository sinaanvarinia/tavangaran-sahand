import React from "react";
import styles from "./Navbar.module.css";

import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { GiGoldMine } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";

import Image from "next/image";

const Navbar = () => {
    return (
      <div className={`w-full justify-center flex ${styles.navbar} opacity-90`}>
        <nav className="container  flex flex-row justify-between items-center">
          <div className="right">
            <ul className={`flex flex-row ${styles.contentColor}`}>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2  items-center ">
                  <span>خانه</span>
                  <AiOutlineHome />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>خدمات</span>
                  <BsBriefcase />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>پروژه ها</span>
                  <LuConstruction />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>معادن</span>
                  <GiGoldMine />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>درباره ما</span>
                  <AiOutlineInfoCircle />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>تماس با ما</span>
                  <FiPhoneCall />
                </a>
                <i></i>
              </li>
              <li className="p-5 ">
                <a href="#" className="flex flex-row gap-2 items-center">
                  <span>کاتالوگ شرکت</span>
                  <GiNewspaper />
                </a>
                <i></i>
              </li>
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
