import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbars from "../Navbar/Navbars";
const Headers = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className='bg-[url("../buisnessman.jpg")] h-[100vh] bg-cover '>
      <div className="bg-[#22222265] h-[100vh]">
        <Navbars />
        <div className="h-full w-full flex justify-center items-center px-8 ">
          <div className="text-center w-96 md:w-[450px] lg:w-[550px] xl:w-[700px]">
            <p
              data-aos="fade-up"
              className="transition-all text-gray-300 font-bold text-sm py-5"
            >
              BY SIMPLEQODE
            </p>
            <p
              data-aos="fade-up"
              className="transition-all text-white text-4xl pb-5"
            >
              Landing pages for any occasion{" "}
            </p>
            <p
              data-aos="fade-up"
              className="transition-all  text-lg text-gray-300 font-semibold my-3"
            >
              Incline is set of landing and support pages aimed at helping
              companies promote new products and business launches.{" "}
            </p>
            <div data-aos="fade-up">
              <button className="border border-orange-300 px-7 py-3 text-white font-bold mt-5 transition-all hover:bg-orange-400">
                PURCHASE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headers;
