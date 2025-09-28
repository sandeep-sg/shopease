import React from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductListSkeleton = ({ numberOfProduct }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-4 w-full">
      {Array.from({ length: numberOfProduct }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
