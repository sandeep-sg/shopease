import React from "react";
import CrossIcon from "../assests/icons/CrossIcon";
import Image from "next/image";
const CartItem = ({ cartData, handleRemoveCart }) => {
  const { product, quantity, size } = cartData;
  return (
    <div className="w-full border rounded border-gray-100 p-2 bg-white shadow ">
      <div className="relative flex gap-4 w-full">
        {/* left */}
        <div className="w-[30%] max-w-40 max-h-32">
          <Image
            width={100}
            height={200}
            className="w-full h-full object-center"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        {/* right */}
        <div className="w-[90%] text-sm">
          {/* <h4 className="font-bold mb-1 text-gray-700"> HIGHLANDER</h4> */}
          <p className="text-gray-600 w-[90%]">{product?.description}</p>
          <div className="flex gap-4 my-2 font-semibold">
            <div className="bg-gray-100 p-1 rounded">
              Size: <span>{size}</span>
            </div>
            <div className="bg-gray-100 p-1 rounded">
              <label htmlFor="qty">Qty</label> <span>{quantity}</span>
              {/* <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select> */}
            </div>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">₹{product.sellingPrice}</span>
            <del className="text-gray-500">{product.netPrice}</del>
            <span className="text-orange-500">(73% OFF)</span>
          </div>
        </div>
        {/* cross icon */}
        <button
          onClick={() => handleRemoveCart(cartData._id)}
          className="absolute right-0 top-0 cursor-pointer"
        >
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
