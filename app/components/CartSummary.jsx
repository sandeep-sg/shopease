import React from "react";

const CartSummary = () => {
  return (
    <div className="w-full md:w-1/3 border border-gray-100 px-3 py-4 text-sm rounded bg-white shadow">
      <h4 className="font-semibold text-gray-800 text-xs mb-2">
        PRICE DETAILS <span>(1 item)</span>
      </h4>
      <div className="flex flex-col gap-2 text-gray-600 my-3">
        <div className="flex justify-between">
          <span>Total MRP</span>
          <span>Rs 2,996</span>
        </div>
        <div className="flex justify-between">
          <span>Discount on MRP</span>
          <span className="text-green-500">-Rs 1,796</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span className="text-red-500">Apply Coupon</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-500">FREE</span>
        </div>
      </div>
      {/* hr  */}
      <div className="w-full h-0.5 bg-gray-100"></div>
      <div className="flex justify-between my-3.5 font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>Rs 1,218</span>
      </div>
      <button className="bg-orange-500 text-white w-full py-2 font-semibold cursor-pointer">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CartSummary;
