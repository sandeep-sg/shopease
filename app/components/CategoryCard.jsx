import React from "react";

const CategoryCard = () => {
  return (
    <div className="w-full max-h-fit rounded bg-orange-100">
      <div className="relative p-1.5">
        {/* <img className="aspect-auto w-full h-52" src={product.image} alt="" /> */}
        <img
          className="aspect-auto w-full h-48"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgqOwFmJGGIcjjaCTgroZ1LFMFyN1V4X7qF7APi31x_bYGLuaH5Nz3OU-ADGzIF28LyfIA08l73Uynnrz8iqrEPqJ7nKOavpN-OebuVBBCZCoozmiEmWDlQNsGLk9MIfM_M6OVvCyMzA&usqp=CAc"
          alt=""
        />
      </div>
      <div className="flex flex-col  items-center py-2 px-3  ">
        <h3 className="text-sm text-gray-600 font-semibold">T-shirt</h3>
        <p className="text-gray-900 text-xl font-bold">50-70% OFF</p>
        {/* <p className="text-gray-500 text-sm">{product.description}</p> */}
        <span className="text-sm text-gray-600 font-semibold ">
          {/* Rs. {product.price} */}
          Shop Now
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
