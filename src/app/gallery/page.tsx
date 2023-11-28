"use client";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import './style.css'

import { images } from "@/constants";
 
const Gallery = () => {
  

  return (
    <div className="container m-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold md:my-5 ">گالری عکس</h1>
      <div className="md:mb-10 w-full" dir="ltr">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Gallery;
