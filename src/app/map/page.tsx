"use client";
import PicLoading from "@/components/picLoading/PicLoading";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

export default function MyPage() {
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
    <div>
      <Map />
    </div>
  );
}
