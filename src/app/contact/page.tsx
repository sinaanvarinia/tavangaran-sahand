import Address from "@/components/address/Address";
import Map from "@/components/map/Map";
import React from "react";

const contactUsPage = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <Address/>
      <Map/>
    </div>
  );
};

export default contactUsPage;
