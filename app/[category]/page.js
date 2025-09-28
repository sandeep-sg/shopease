"use client";
import React from "react";
import ProductList from "../components/ProductList";
import { useParams } from "next/navigation";
import ProductFilter from "../components/ProductFilter";

const page = () => {
  const params = useParams();
  const { category } = params;
  console.log(category);
  return (
    <section className="container-center">
      <div className="py-6">
        <h2 className="text-xl md:text-3xl text-gray-800 font-bold">
          {category[0].toUpperCase() + category.slice(1, category.length)}{" "}
          Collection's
        </h2>
        <h3 className="mt-2 text-gray-500">
          Home /{" "}
          {category[0].toUpperCase() + category.slice(1, category.length)}{" "}
          Collection's
          {/* {product[0].toUpperCase() + product.slice(1, product.length)} */}
        </h3>
        <div className="flex bg-[#fefefe] mt-6 md:mt-10 border-0 md:border border-gray-200 ">
          {/* filter */}
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default page;
