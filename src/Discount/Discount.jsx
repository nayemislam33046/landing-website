import React from "react";
import Man from "../../public/Man.jpg";
import shopping from "../../public/Shopping.jpg";
const Discount = () => {
  return (
    <div className="my-12 md:flex md:items-center md:justify-between lg:justify-around xl:justify-evenly gap-5">
      <div className="flex items-center justify-between border sm:p-5 px-2">
        <div className="">
          <p className="xsm:text-xl text-base sm:text-2xl font-semibold">T-Shirt & Uniform</p>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Get Upto 30% Off{" "}
          </p>
          <button className="text-white xsm:p-3 p-1 mt-4 bg-slate-900 rounded text-sm xsm:text-base xsm:rounded-xl">
            Shop Now
          </button>
        </div>
        <img src={Man} alt="ManShopping" className="w-44 h-44" />
      </div>
      <div className="flex items-center justify-between border sm:p-5 px-2 md:mt-0 mt-5">
        <div className="">
          <p className="xsm:text-xl text-base sm:text-2xl font-semibold">Hoodies & Shoes</p>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Get Upto 25% Off{" "}
          </p>
          <button className="text-white xsm:p-3 p-1 mt-4 bg-slate-900 rounded text-sm xsm:text-base xsm:rounded-xl">
            Shop Now
          </button>
        </div>
        <img src={shopping} alt="ManShopping" className="w-44 h-44" />
      </div>
    </div>
  );
};
export default Discount;