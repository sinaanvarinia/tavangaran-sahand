import LoadingComponent from "@/components/loading/Loading";
import PicLoading from "@/components/picLoading/PicLoading";
import React from "react";

export default function Loading() {
  return (
    <div>
      {/* loading... */}
      <div className="m-auto flex flex-col justify-center items-center h-screen bg-gray-200 opacity-70">
        {/* <PicLoading /> */}
        <LoadingComponent/>
        {/* <div>Loading...</div> */}
      </div>
    </div>
  );
}
