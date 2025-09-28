import React from "react";

const MainLoader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-opacity-70 z-50">
      <div className="w-12 h-12 border-6 border-orange-500 border-t-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};
export default MainLoader;