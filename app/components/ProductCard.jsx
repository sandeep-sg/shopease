
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ product }) => {
  const { title, imageUrl, sellingPrice, netPrice } = product;


  return (
    <Link
      href={`${product.categoryId.category}/${product._id}`}
      key={product._id}
      className="w-full"
    >
      <div className="max-w-sm bg-white  rounded-xl shadow hover:shadow-lg overflow-hidden transition-transform duration-300">
        <div className="w-full h-44 md:h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={250}
            className="w-full h-full "
          />
        </div>
        <div className="p-2.5">
          <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
          {/* Price Section */}
          <div className="mt-1">
            <span className="md:text-xl font-bold text-green-600">
              ₹{sellingPrice}
            </span>
            <span className="ml-2 text-sm line-through text-gray-500">
              ₹{netPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
