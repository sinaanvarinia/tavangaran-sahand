"use client";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <div className="container m-auto flex flex-col justify-center items-center">

      <h1 className="text-3xl font-bold my-5 ">گالری عکس</h1>
      <div className="mb-10">

      <ImageGallery  items={images} />
      </div>
    </div>
  );
};

export default Gallery;
