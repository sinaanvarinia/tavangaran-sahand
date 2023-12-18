"use client";

import React, { useState } from "react";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Head from "next/head";
import { LatLngExpression } from "leaflet";

const Map = () => {
  // const position = [38.058, 46.209];
 const [position, setPosition] = useState<LatLngExpression>([38.058, 46.209]);
  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          شرکت توانگران سهند <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
