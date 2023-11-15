import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="container flex-col gap-10 m-auto justify-center flex items-center w-full h-screen ">
      <Image width={200} height={100} className="bg-slate-700 p-1 rounded-xl shadow-xl object-contain" src="/logo.svg" alt="logo" />

      <h1 className="text-center text-3xl  mx-auto text-slate-500">
        صفحه مورد نظر پیدا نشد.
      </h1>
      <div className="w-400  h-300 ">
        <Image
          alt="notfound page"
          src="/notFound.gif"
          className="rounded-xl shadow-xl"
          width={800}
          height={300}
        />
      </div>
    </div>
  );
};

export default NotFound;
