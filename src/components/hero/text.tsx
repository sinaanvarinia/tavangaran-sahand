'use client'
import { init } from "ityped";
import React, { useEffect } from "react";

const Text = () => {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["Use with React.js!", "Yeah!"],
    });
  }, []);
  return (
    <div>
      {" "}
      <div id="myElement"></div>
    </div>
  );
};

export default Text;
