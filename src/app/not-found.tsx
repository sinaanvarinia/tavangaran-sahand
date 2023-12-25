import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="container flex-col gap-10 m-auto justify-center flex w-full h-screen ">
      <div className="w-400  h-300 ">
        <Image
          alt="notfound page"
          src="/not_found.svg"
          className="rounded-xl shadow-xl"
          width={800}
          height={300}
        />
      </div>
      <div className="flex flex-row-reverse items-center justify-between">
        <Image
          width={100}
          height={100}
          className="bg-slate-300 p-1 rounded-xl shadow-xl object-contain"
          src="/logo.svg"
          alt="logo"
        />

        <h1 className=" text-xl text-slate-500">
          صفحه مورد نظر پیدا نشد.
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
