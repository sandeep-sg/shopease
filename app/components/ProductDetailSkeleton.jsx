import React from "react";

export default function ProductDetailSkeleton() {
  return (
    <div className="container-center">
      <div className="flex gap-16 p-10 animate-pulse">
        {/* Left thumbnails */}
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-20 h-22 bg-gray-200 rounded-md"></div>
          ))}
        </div>

        {/* Main image */}
        <div className="w-[450px] h-[420px] bg-gray-200 rounded-lg"></div>

        {/* Right product details */}
        <div className="flex flex-col flex-1 gap-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-8 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-10 w-40 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
