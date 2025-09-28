"use client";
import { useParams } from "next/navigation";
import React from "react";
import { getCategory } from "../utils/getCategory";
import { getProductsByCategory } from "../utils/getProductByCategory";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import ProductListSkeleton from "./ProductListSkeleton";

const ProductList = () => {
  const params = useParams();
  const { category } = params;
  console.log(category);
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
    staleTime: 1000000,
    select: (data) => data.category,
  });
  const categoriesIds = categories?.reduce((acc, curr) => {
    acc[curr.category.toLowerCase()] = curr._id;
    return acc;
  }, {});
  // console.log(categoriesIds);
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(categoriesIds[category]),
    staleTime: 1000000,
    select: (data) => data.product || [],
  });
  console.log(products, "product");
  if (isLoading) return <ProductListSkeleton numberOfProduct={8} />;
  if (isError) return <div>{error}</div>;
  return (
    <div className="w-full">
      {products?.length !== 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-4 gap-4 w-full">
          {products?.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="text-red-500 text-2xl  mx-auto ">
          <p className="text-center mt-6"> Product not available</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
