import React from "react";
import { filterOptions } from "../constant/FilterOptions";

const ProductFilter = () => {
  return (
    <div className="min-w-[200px] lg:min-w-[240px] hidden md:block border-0 md:border-r border-gray-200">
      <div className="px-6 py-8">
        <h3 className="text-2xl font-bold text-gray-700">Filter</h3>
        {filterOptions.map(({ name, option }, i) => {
          return (
            <div key={i}>
              <div className="font-semibold py-2 text-gray-600">{name}</div>
              {option.map(({ type, value, name }, i) => {
                return (
                  <div className="space-x-2 space-y-3 pl-2" key={i}>
                    <input
                      type={type}
                      id={value}
                      name={name}
                      onChange={() => handleFilter(name, value)}
                    />
                    <label htmlFor={value} className="text-gray-700">
                      {value}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
