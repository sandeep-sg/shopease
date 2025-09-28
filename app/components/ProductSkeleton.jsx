import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="w-full">
      <div className="shadow rounded-lg  bg-white animate-pulse">
        {/* Image Placeholder */}
        <div className="w-full h-40 md:h-60 bg-gray-200 rounded-t-lg mb-1 md:mb-4"></div>
        <div className="p-2">
          {/* Title Placeholder */}
          <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          {/* Price Placeholder */}
          <div className="h-4 md:h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
        </div>
      </div>
    </div>
  );
}
