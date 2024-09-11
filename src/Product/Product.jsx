import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/Context";
import Rating from "../Rating";
import { BiGitCompare, BiHeart } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = () => {
  const { getData, dispatch,state } = useContext(ThemeContext);
  return (
    <div>
      <p className="text-2xl font-semibold py-5">Popular Products</p>
      <div className="">
        <div className="flex flex-wrap justify-center gap-3">
          {getData?.map((products) => {
            const { category, title, id, image, price, rating } = products;
            const titleShort = title.substring(0, 17);
            return (
              <div
                key={id}
                className="p-3 relative hover:border-green-500 rounded-md border leading-7 xl:w-48 w-56 sm:w-60 md:w-52 group"
               >
                <img
                  src={image[0].image}
                  alt={category}
                  className="h-36 block mx-auto"
                />
                <p className="text-gray-600 text-sm mt-1">{category}</p>
                <p className="">
                  {titleShort.length >= 17 ? titleShort + "..." : titleShort}
                </p>
                <div className="flex items-center gap-2">
                  <Rating rating={rating[0].rate} />{" "}
                  <span className="text-gray-600 text-sm">
                    {rating[0].rate} ({rating[1].count})
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p>${price}</p>
                  <button onClick={()=>dispatch({type:"ADDTOCART",payload:products})} disabled={state.cart.some((disCart)=>disCart.id === id ? true:false)} className="bg-green-500 hover:bg-green-800 text-white px-3 rounded-md cursor-pointer z-20 disabled:bg-gray-700">
                    + Add
                  </button>
                </div>
                <div className="absolute top-0 left-0 bottom-0 right-0 translate-y-[30%] translate-x-[0%]">
                  <div className="hidden group-hover:block">
                    <div className="flex justify-center gap-2">
                      <Link to={`/products/${id}`} className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg">
                        <FaEye />
                      </Link>
                      <button className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg" onClick={()=>dispatch({type:"ADDTOWATCH",payload:products})}>
                        <BiHeart />
                      </button>
                      <button className="p-2 bg-white border-black hover:text-white hover:bg-green-500 text-gray-600 border rounded-lg shadow-lg">
                        <BiGitCompare />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;