"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getProducts } from "../utils/getProducts";
import ProductListSkeleton from "./ProductListSkeleton";

const BestSeller = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000000,
    select: (data) => data.product,
  });
  // console.log(products);
  if (isLoading)
    return (
      <div className="container-center">
        <ProductListSkeleton numberOfProduct={4} />
      </div>
    );

  return (
    <div className="container-center">
      <div className="py-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-10">Best Seller</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-10">
          {products?.slice(0, 4)?.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
