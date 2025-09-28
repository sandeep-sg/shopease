"use client";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductById } from "../utils/getProductById";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import axios from "axios";
import useProfile from "../hook/useUser";
import useUser from "../hook/useUser";

const ProductDetails = ({ productId }) => {
  const queryClient = useQueryClient();
  const [productSize, setProductSize] = useState("");
  console.log({ productSize });
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    staleTime: 1000000,
    select: (data) => data.product,
  });
  const { data: user } = useUser();
  const userId = user?._id;
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = async (productId) => {
    if (!productSize) {
      alert("Select product size");
      return;
    }
    if (!user) {
      alert("Please login or signup to add to cart")
      return
    }
    if (user) {
      const data = {
        userId,
        productId,
        size: productSize,
        quantity: 1,
      };
      try {
        setIsAdding(true);
        const res = await axios.post(`/api/cart`, data, {
          withCredentials: true,
        });
        await queryClient.invalidateQueries({ queryKey: ["cart", userId] });
        setIsAdding(false);
      } catch (error) {
        console.error("Failed to add to cart", error);
      }
    }
  };

  if (isLoading) return <ProductDetailSkeleton />;
  if (isError) return <div>Failed to load product details</div>;
  const { sellingPrice, netPrice, description, imageUrl, size } = product;
  // console.log(size, "size");
  return (
    <section className="container-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between my-6 md:my-10 md:px-10">
        {/* left */}
        <div className="flex flex-col-reverse md:flex-row  gap-6">
          {/* small image */}
          <div className="flex flex-row md:flex-col gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div className="w-20 md:w-24 h-20 md:h-24" key={i}>
                <img
                  className="w-full h-full aspect-auto"
                  src={imageUrl}
                  alt=""
                />
              </div>
            ))}
          </div>
          {/* large image */}
          <div className="w-full h-[300px] md:h-[455px]">
            <img className="w-full h-full aspect-auto" src={imageUrl} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="md:pl-10">
          {/* <h2 className="text-2xl font-bold text-gray-700 mb-3">{title}</h2> */}
          <p className="text-xl text-gray-500">{description}</p>
          <div className="mt-4 mb-3 flex gap-2 border border-gray-300  text-gray-500  rounded px-3 py-0.5 w-fit">
            <span className="font-bold">4.2</span>
            <span>|</span>
            <span>538 Ratings</span>
          </div>
          <div className="flex gap-4 text-xl text-gray-500 my-4">
            <span>
              MRP <del>{netPrice}</del>
            </span>
            <span className="font-bold text-gray-700">{sellingPrice}</span>
            <span className="font-semibold text-orange-500">(73% OFF)</span>
          </div>
          <div className="space-y-4">
            {/* size */}
            <h3 className="text-lg font-bold text-gray-700">Select size</h3>
            <div className="flex gap-3">
              {size?.map((s, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => setProductSize(s)}
                    className={`px-4 py-2 ${productSize == s ? "bg-orange-500 text-white" : ""
                      } border-2 border-gray-200  rounded-xl`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            {/* add to cart */}
            <button
              onClick={() => handleAddToCart(productId)}
              // onClick={() => alert()}
              className="bg-orange-500 text-white px-16 py-3 rounded font-bold cursor-pointer"
            >
              {isAdding ? "Adding..." : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
