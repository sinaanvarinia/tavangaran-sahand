import Address from "@/components/address/Address";
import Map from "@/components/map/Map";
import React from "react";

const contactUsPage = () => {
  return (
    <div className="flex min-h-screen  md:p-20 p-5  bg-cover flex-col   bg-[url('/smartphone.jpg')]">
      <div className="container mx-auto flex flex-col items-end">
        <Address />
        <Map />
      </div>
    </div>
  );
};

export default contactUsPage;
