
import ProductDetails from "@/app/components/ProductDetails";
import React from "react";

const page = async ({ params }) => {
  // console.log(await params);
  const { productId } = await params;
  console.log("productId", productId);

  return <ProductDetails productId={productId} />;
};

export default page;
