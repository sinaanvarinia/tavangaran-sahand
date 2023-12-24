"use client";
import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";



const MapComponent = (props: any) => {
  const position: LatLngExpression = [38.058, 46.209];

  return (
    <div id="map" style={{ height: "400px" }}>
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
            {/* <Tooltip direction="top" offset={[100, 0]} opacity={1} permanent>
              شرکت توانگران سهند
            </Tooltip> */}
          </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
