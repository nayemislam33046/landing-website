import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mt-10 -z-10 h-[65vh] lg:h-[75vh] xl:h-[80vh] md:h-[70vh]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <div className='bg-[url("https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?ga=GA1.1.806586258.1725958473&semt=ais_hybrid")] w-[100%] h-[60vh] xl:h-[80vh] lg:h-[75vh] md:h-[70vh] bg-cover flex items-center rounded-lg '>
            <div className="ps-10 ">
              <p className="bg-orange-500 inline-block px-2 rounded">
                Opening Sale Discount 50%
              </p>
              <p className="text-4xl font-bold mt-3 md:text-6xl lg:text-7xl">
                SuperMarket
              </p>
              <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded mt-6 lg:mt-12">
                Shop Now <BiArrowToRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[url("https://img.freepik.com/premium-photo/vibrant-black-friday-sale-banner_925613-48067.jpg?ga=GA1.1.806586258.1725958473&semt=ais_hybrid")] w-[100%] h-[60vh] lg:h-[75vh] xl:h-[80vh] md:h-[70vh] sm:bg-center bg-cover flex items-center '>
            <div className="ps-10 bg-[#00000091] py-2 lg:py-5 px-3 rounded-lg">
              <p className="bg-orange-500 inline-block px-2 rounded">
                Opening Sale Discount 50%
              </p>
              <p className="text-4xl font-bold mt-3 md:text-4xl lg:text-5xl text-white">
                Free Shipping on Order Over{" "}
                <span className="text-green-500">$100</span>
              </p>
              <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded mt-6 lg:mt-12">
                Shop Now <BiArrowToRight />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
