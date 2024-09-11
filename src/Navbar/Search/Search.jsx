import React, { useEffect, useState } from "react";
import { BiLocationPlus, BiSearchAlt } from "react-icons/bi";
const Search = ({ setmodal }) => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-3 px-5">
          <div className="lg:w-[400px] flex items-center border rounded-lg transition-all ">
            <input
              type="search"
              name="search"
              id="search"
              className="placeholder:font-semibold py-2 ps-4 w-[90%] focus:outline-none group"
              placeholder="Search For Product"
            />
            <span className="text-2xl text-gray-400 cursor-pointer w-[10%]">
              <BiSearchAlt />
            </span>
          </div>
          <button
            onClick={() => setmodal(true)}
            className=" flex items-center gap-3 font-semibold text-gray-400 py-2 px-3 rounded-md border "
          >
            <span className="mt-1">
              <BiLocationPlus />
            </span>
            <span>
              <span className="lg:hidden">Pick</span> Location
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
