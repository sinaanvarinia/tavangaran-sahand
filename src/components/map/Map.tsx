"use client";

import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import Image from "next/image";

const Map = () => {
  const position: LatLngExpression = [38.058, 46.209];

  return (
    <>
      {/* <MapContainer
        className="h-full w-full rounded-3xl"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} title="Tavangaran Sahand Co">
          <Popup>
            شرکت توانگران سهند <br />
          </Popup>
          <Tooltip direction="top" offset={[100, 0]} opacity={1} permanent>
            شرکت توانگران سهند{" "}
          </Tooltip>
        </Marker>
      </MapContainer>{" "} */}
      <div className=" rounded-3xl shadow-md min-h-[360px] justify-center items-center md:my-12 ">
        <Image src="/map.png" alt="map" width={700} height={500} />
      </div>
    </>
  );
};

export default Map;
