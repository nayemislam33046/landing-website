import React from "react";
const Purchasepara = () => {
  return (
    <div className="bg-[#F8F9FA] py-20 px-8 md:px-14 lg:px-20 md:flex md:items-center md:justify-between lg:justify-around xl:justify-evenly gap-10">
      <div>
        <p className="text-2xl mb-5">
          Download it from the Bootstrap marketplace{" "}
        </p>
        <p className="text-gray-500 md:w-96 lg:w-[450px]">
          Each theme featured at the Bootstrap marketplace has been reviewed by
          Bootstraps creators. Six month technical support by the theme author
          is provided.{" "}
        </p>
      </div>
      <button className="p-3 border border-orange-400 text-sm font-semibold mt-7 hover:text-orange-400">
        PURCHASE NOW
      </button>
    </div>
  );
};
export default Purchasepara;
