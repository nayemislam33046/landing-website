import React, { useContext } from "react";
import {
  BiGitCompare,
  BiHeart,
  BiRightArrow,
  BiRightArrowAlt,
} from "react-icons/bi";
import { ThemeContext } from "../Context/Context";
import { FaEye } from "react-icons/fa";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import CountDown from "../Countdown/CountDown";
const Bestsell = () => {
  const { getData, state, dispatch } = useContext(ThemeContext);
  return (
    <div className="my-20">
      <p className="my-3 text-3xl">Daily Best Sells</p>
      <div className="flex lg:justify-around gap-2 flex-col lg:flex-row">
        <div className='bg-[url("https://i.pinimg.com/236x/31/7d/3b/317d3bbbb57f1562dd7807aa14668801.jpg")] bg-no-repeat h-[70vh] lg:w-[16rem] rounded-md overflow-hidden p-5 xsm:p-10 sm:p-20 lg:p-5 bg-cover bg-center'>
          <h1 className="sm:text-5xl text-2xl lg:text-2xl text-white font-bold">
            100% Organic Coffee Beans.
          </h1>
          <p className="text-white font-bold sm:text-2xl text-lg lg:text-base">
            Get the best deal before close.
          </p>
          <button className="bg-green-600 flex items-center gap-1 px-3 py-2 rounded mt-5 text-white">
            Shop Now <BiRightArrowAlt />
          </button>
        </div>
        <div className="flex gap-2 justify-center items-center sm:flex-row flex-col">
          {getData.slice(1, 4).map((Mydata) => {
            const { id, image, category, title, rating, price, countdown } =
              Mydata;
            const titleShort = title.substring(0, 17);
            return (
              <div
                key={id}
                className="p-3 relative hover:border-green-500 rounded-md border leading-7 xl:w-64 xsm:w-80 sm:w-64 md:w-60 group hover:shadow-lg"
              >
                <img
                  src={image[0].image}
                  alt={category}
                  className="h-48 block mx-auto"
                />
                <p className="text-gray-600 text-sm mt-1">{category}</p>
                <p className="">
                  {titleShort.length >= 17 ? titleShort + "..." : titleShort}
                </p>
                <div className="flex items-center justify-between">
                  <p>${price}</p>
                  <div className="flex items-center gap-2">
                    <Rating rating={rating[0].rate} />{" "}
                    <span className="text-gray-600 text-sm">
                      {rating[0].rate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "ADDTOCART", payload: Mydata })
                    }
                    disabled={state.cart.some((disCart) =>
                      disCart.id === id ? true : false
                    )}
                    className="bg-green-500 hover:bg-green-800 text-white px-3 rounded-md cursor-pointer z-20 disabled:bg-gray-700 w-full py-1"
                  >
                    + Add To Cart
                  </button>
                </div>
                <div className="absolute top-0 left-0 bottom-0 right-0 translate-y-[30%] translate-x-[0%]">
                  <div className="hidden group-hover:block">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/products/${id}`}
                        className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg"
                      >
                        <FaEye />
                      </Link>
                      <button
                        className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg"
                        onClick={() =>
                          dispatch({ type: "ADDTOWATCH", payload: Mydata })
                        }
                      >
                        <BiHeart />
                      </button>
                      <button className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg">
                        <BiGitCompare />
                      </button>
                    </div>
                  </div>
                </div>
                <CountDown targetDate={new Date(countdown)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Bestsell;