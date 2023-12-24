"use client";
import Address from "@/components/address/Address";
import Map from "@/components/map/Map";
import React, { useEffect } from "react";

const Contact = () => {

 
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
