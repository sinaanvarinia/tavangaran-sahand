"use client";

import React, { useEffect } from "react";
import { init } from "ityped";

export const Hero = () => {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["توانگران سهند","اکنشاف"],
    });
  }, []);
  return (
    <div className="text-white h-[calc(100vh-4rem)] bg-cover bg-[url('/heroBg.png')] w-full flex items-center justify-center">
      <div id="myElement"></div>
    </div>
  );
};
