import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="relative bg-white rounded-lg flex flex-col overflow-hidden">
      <Skeleton height={200} />
      <div className="px-4 py-6">
        <div>
          <Skeleton height={30} width={"40%"} />
        </div>
        <div className="mt-4">
          <Skeleton height={18} width={"35%"} />
        </div>
        <div className="mt-6">
          <Skeleton height={30} width={"90%"} />
          <div className="mt-4">
            <Skeleton height={40} />
          </div>
          <div className="mt-4">
            <Skeleton height={18} width={"30%"} />
          </div>
          <div className="mt-4">
            <Skeleton height={42} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
