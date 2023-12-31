"use client";
import Address from "@/components/address/Address";
import React, { useMemo } from "react";
import PicLoading from "@/components/picLoading/PicLoading";
import dynamic from "next/dynamic";

const Contact = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/MapComponent"), {
        loading: () => (
          <p>
            <PicLoading />
          </p>
        ),
        ssr: false,
      }),
    []
  );
  return (
    <div className="flex min-h-screen  md:p-20 p-5  bg-cover flex-col   bg-[url('/globe.jpg')]">
      <div className="container mx-auto flex flex-col items-end opacity-90">
        <Address />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
