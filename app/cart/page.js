"use client";
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import MainLoader from "../components/MainLoader";
import CartSummary from "../components/CartSummary";
import CartIcon from "../assests/icons/CartIcon";
import useUser from "../hook/useUser";
export const getcart = async (userId) => {
  const res = await axios.get(`/api/cart/${userId}`);
  return res.data.cart;
};
const page = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const [isCartLoading, setIsCartLoading] = useState(false);
  const userId = user?._id;
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getcart(userId),
    staleTime: 1000000,
    enabled: !!user,
  });

  const handleRemoveCart = async (cartItemId) => {
    try {
      setIsCartLoading(true);
      const res = await axios.delete(`/api/cart/${userId}/${cartItemId}`);
      console.log({ res }, "cart delete res");
      if (res.status == 200) {
        await queryClient.invalidateQueries({ queryKey: ["cart", userId] });
        setIsCartLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading || isCartLoading) return <MainLoader />;
  console.log(cart);
  if (cart?.length == 0 || !user)
    return (
      <div className="flex flex-col items-center justify-center py-44">
        <CartIcon />
        <p className="text-2xl font-semibold  my-2 bg-orange-200 py-2 px-8 rounded-2xl text-orange-600 ">
          Your cartitem is empty
        </p>
      </div>
    );
  return (
    <div className="container-center">
      <div className="py-3 md:py-8   lg:px-32">
        <h3 className="text-gray-700 font-bold text-center md:text-left text-lg md:text-2xl ">
          Shopping Cart Items
        </h3>
        <div className="flex justify-between flex-col md:flex-row items-start gap-4 my-3 md:my-4">
          {/* left */}
          <div className="md:w-1/2 flex flex-col gap-3">
            {cart?.map((cartData) => {
              return (
                <CartItem
                  cartData={cartData}
                  key={cartData._id}
                  handleRemoveCart={handleRemoveCart}
                />
              );
            })}
          </div>
          {/* right */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default page;
