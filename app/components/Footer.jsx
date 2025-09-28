import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-100 ">
      <div className="container-center">
        <div className="py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {/* first */}
            <div className="text-red-500 font-bold text-2xl">ShopEase</div>
            {/* second */}
            <div>
              <span className="font-bold text-gray-700">ONLINE SHOPPING</span>
              <ul className="text-gray-500 mt-3 space-y-1">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            {/* third */}
            <div>
              <span className="font-bold text-gray-700">Contact Us</span>
              <ul className="text-gray-500 mt-3 space-y-1">
                <li>+91 9821324817</li>
                <li>ShopEase2025@gmail.com</li>
              </ul>
            </div>
            {/* forth */}
            <div>
              <span className="font-bold text-gray-700">Policy</span>
              <ul className="text-gray-500 mt-3 space-y-1">
                <li className="w-3/4">Return within 7 days of receiving product</li>
              </ul>
            </div>
          </div>

          <div className="font-semibold text-gray-500 text-center mt-4">
            © 2025 ShopEase. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
