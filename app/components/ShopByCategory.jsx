import React from "react";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  return (
    <div className="container-center">
      <div className="py-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-10">Shop By Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-10">
          {Array(5)
            .fill("")
            .map((_,i) => {
              return <CategoryCard key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
