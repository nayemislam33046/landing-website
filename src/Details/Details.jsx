import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../Context/Context";
import Myimg from "./Myimg";
import Rating from "../Rating";
const Details = () => {
  const { id } = useParams();
  const [productData, setproductData] = useState([]);
  const [selectSize, setSelectSize] = useState("M");
  const { Api, state, dispatch } = useContext(ThemeContext);
  const { title, image, price, category, rating, description } = productData;
  const getSingleProduct = async (Api) => {
    const res = await axios.get(`${Api}/${id}`);
    const data = await res.data;
    setproductData(data);
  };
  useEffect(() => {
    getSingleProduct(Api);
  }, [Api]);
  return (
    <div>
      {productData.id === id ? (
        <div className="py-16">
          <div className="flex md:items-start justify-center flex-col md:flex-row gap-12 p-10 ">
            <div>
              <Myimg imgs={image} />
            </div>
            <div>
              <h1 className="text-3xl font-bold my-5">{title}</h1>
              <span className="text-gray-500">
                <span className="text-black font-bold">Category : </span>{" "}
                {category}
              </span>
              <p className="mt-2 text-gray-600 w-[300px]">
                <span className="text-black font-bold">Description : </span>{" "}
                {description}
              </p>
              <p className="text-3xl mt-5 text-green-900">Price : ${price}</p>
              <div className="flex items-center gap-2 mt-2">
                {rating && rating.length > 0 ? (
                  <div className="flex items-center gap-2">
                    <Rating rating={rating[0].rate} />
                    <span className="text-gray-600 text-sm">
                      {rating[0].rate} ({rating[1].count})
                    </span>
                  </div>
                ) : (
                  <p>Loading rating...</p>
                )}
              </div>
              <div>
                <div className="flex gap-2 mt-5">
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("38"):("SM"))}
                  >
                    {category==="shoes"?("38"):("SM")}
                  </button>
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("39"):("M"))}
                  >
                    {category==="shoes"?("39"):("M")}
                  </button>
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("40"):("L"))}
                  >
                    {category==="shoes"?("40"):("L")}
                  </button>
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("41"):("XL"))}
                  >
                    {category==="shoes"?("41"):("XL")}
                  </button>
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("42"):("XXL"))}
                  >
                    {category==="shoes"?("42"):("XL")}
                  </button>
                  <button
                    className="p-1 w-12 border rounded-md"
                    onClick={() => setSelectSize(category==="shoes"?("43"):("XXXL"))}
                  >
                    {category==="shoes"?("42"):("XXXL")}
                  </button>
                </div>
                <p className="my-3">Select Size : {selectSize}</p>
              </div>
              <div className="flex gap-2 mt-5">
                <button
                  className=" px-3 py-1 bg-green-600 rounded text-white disabled:bg-slate-600"
                  onClick={() =>
                    dispatch({ type: "ADDTOCART", payload: productData })
                  }
                  disabled={state.cart.some((disCart) =>
                    disCart.id === id ? true : false
                  )}
                >
                  Add To Cart
                </button>
                <button className=" px-3 py-1 bg-orange-500 rounded text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-5xl h-[70vh]">
          Not Found Product
        </div>
      )}
    </div>
  );
};
export default Details;