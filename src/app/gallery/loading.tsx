import LoadingComponent from "@/components/loading/Loading";
import PicLoading from "@/components/picLoading/PicLoading";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="m-auto flex flex-col justify-center items-center h-screen bg-gray-200 opacity-70">
              <PicLoading />
              {/* <LoadingComponent/> */}
      </div>
    </div>
  );
};

export default Loading;
