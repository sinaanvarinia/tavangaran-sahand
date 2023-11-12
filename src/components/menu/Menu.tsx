"use client";

import { navbarItems } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BsBriefcase, BsMailbox2 } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
// import { GiGoldMine } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail, MdFax } from "react-icons/md";
import { BsMenuButtonWideFill, BsFillMenuAppFill } from "react-icons/bs";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <i onClick={() => setOpen(true)}>
          <BsMenuButtonWideFill />
        </i>
      ) : (
        <i onClick={() => setOpen(false)}>
          <BsFillMenuAppFill />
        </i>
      )}
      {open && (
        <div className="bg-yellow-700 z-10 text-slate-400 flex flex-col items-center gap-1 absolute w-full h-[calc(90vh)] right-0 top-[52px]">
          {navbarItems.map((item) => (
            <li
              onClick={() => setOpen(false)}
              key={item.id}
              className="p-3 w-10/12 flex flex-row justify-between items-center list-none"
            >
              <Link href={item.href}>{item.title}</Link>
              <item.icon />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
