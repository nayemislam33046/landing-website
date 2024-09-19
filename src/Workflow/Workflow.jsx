import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const Workflow = () => {
  return (
    <div className="my-20 px-5 md:flex gap-10 md:px-10 lg:px-28 xl:px-36">
      <div className="my-32 w-full flex-[6] order-2">
        <div className="bg-[#ECBF6A] w-full h-44 relative sm:h-56">
          <img
            src={`http://localhost:5173/47.jpg`}
            alt=""
            className="w-64 sm:w-72 md:w-64 absolute mx-auto left-0 right-0 -top-24"
          />
        </div>
      </div>
      <div className="flex-[6] order-1 md:mt-10">
        <p className="text-3xl">Intuitive workflow</p>
        <div className="flex items-center justify-start my-5">
          <div className="flex items-center gap-3">
            <span className="text-orange-400">
              <BiRightArrowAlt />
            </span>
            <p className="text-gray-700 font-semibold">
              Speed up your development process with Gulp and BrowserSync live
              browser reload{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start my-5">
          <div className="flex items-center gap-3">
            <span className="text-orange-400">
              <BiRightArrowAlt />
            </span>
            <p className="text-gray-700 font-semibold">
              Easily adjust the look of any component with tons of additional
              SASS variables included{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start my-5">
          <div className="flex items-center gap-3">
            <span className="text-orange-400">
              <BiRightArrowAlt />
            </span>
            <p className="text-gray-700 font-semibold">
              Easily make global changes with HTML file @includes{" "}
            </p>
          </div>
        </div>
        <button className="border hover:text-orange-400 border-orange-400 p-5 text-sm font-semibold mt-5">
          DOCUMENTATION
        </button>
      </div>
    </div>
  );
};
export default Workflow;
