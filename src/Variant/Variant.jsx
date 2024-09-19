import React from "react";
const Variant = () => {
  return (
    <div className="bg-[#F8F9FA] relative mt-52 mb-14 min-h-32">
      <span className="w-[2px] h-32 absolute mx-auto -top-16 left-0 block right-0 bg-[#F5BA4B]"></span>
      <div className="py-36 w-full px-10 block mx-auto sm:w-[450px] md:w-[600px] lg:w-[700px]">
        <p className=" text-3xl font-semibold text-center">Header variants</p>
        <p className="text-center text-gray-600 mt-3">
          Polish your landing page with one of the header options below to
          impress your visitors at first glance.{" "}
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className="lg:w-96 w-96 md:w-80">
          <div className="group">
            <img
              src={"http://localhost:5173/laptop.jpg"}
              alt="laptop"
              className="h-56 w-full group-hover:-mt-5 group-hover:shadow-2xl transition-all"
            />
            <div className="my-5 ps-10">
              <p className="font-bold text-lg ">Carousel header</p>
              <p>
                Switch between multiple slides with full cover background
                images.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-96 md:w-80 w-96 ">
          <div className="group">
            <img
              src={"http://localhost:5173/laptop2.jpg"}
              alt="laptop"
              className="h-56 w-full group-hover:-mt-5 group-hover:shadow-2xl transition-all"
            />
            <div className="my-5 ps-10">
              <p className="font-bold text-lg ">Carousel header</p>
              <p>
                Switch between multiple slides with full cover background
                images.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-96 w-96 md:w-80">
          <div className="group ">
            <img
              src={"http://localhost:5173/laptop3.jpg"}
              alt="laptop"
              className="h-56 w-full group-hover:-mt-5 group-hover:shadow-2xl transition-all"
            />
            <div className="my-5 ps-10">
              <p className="font-bold text-lg ">Carousel header</p>
              <p>
                Switch between multiple slides with full cover background
                images.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Variant;
