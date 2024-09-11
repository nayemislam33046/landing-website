import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ThemeContext } from "../Context/Context";
const Category = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const { getData } = useContext(ThemeContext);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };
  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <p className="xsm:text-2xl text-base font-bold xsm:font-normal">Featured Categories</p>
        <div className="flex items-center gap-3 mt-2 md:mt-4">
          <button
            className="bg-gray-500 p-1 rounded-full text-gray-300"
            onClick={prevHandler}
          >
            <BiLeftArrow />
          </button>
          <button
            className="bg-gray-500 p-1 rounded-full text-gray-300"
            onClick={nextHandler}
          >
            <BiRightArrow />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        loop={true}
      >
        {getData.map((Data) => {
          const cateTitle = Data.category.substring(0, 5);
          return (
            <SwiperSlide
              key={Data.id}
              className="hover:border p-5 rounded-lg transition-all border hover:border-green-500 mt-10"
            >
              <img
                src={Data.image[0].image}
                alt={Data.category}
                className="xsm:h-36 h-28 block mx-auto"
              />
              <p className="text-center text-gray-500 pt-2 ">{cateTitle}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Category;
