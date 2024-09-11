import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
const Watchlist = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state.watchlist);
  return (
    <div>
      {state.watchlist.length > 0 ? (
        <div className="relative w-full min-h-[100vh] flex md:items-start items-center md:justify-start justify-center mt-10 flex-col px-10">
          {state.watchlist.map((watchlistData) => {
            return (
              <div
                key={watchlistData.id}
                className="mt-5 md:flex md:items-center md:justify-between md:w-full border md:border-none md:p-0 p-3 rounded-md"
              >
                <div className="flex gap-4 items-center w-[200px] md:my-0 my-3 ">
                  <img
                    src={watchlistData.image[0].image}
                    alt={watchlistData.category}
                    className="w-10 rounded-full"
                  />
                  <div className="flex flex-col ">
                    <p className="font-bold">{watchlistData.title}</p>
                    <p>{watchlistData.category}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xl md:my-2 my-0">${watchlistData.price}.00</p>
                </div>
                <Link to={`/products/${watchlistData.id}`}>
                  <AiFillEye />
                </Link>
                <div className="flex gap-2 md:my-0 my-2">
                  <button
                    className="disabled:bg-gray-600 px-3 py-1 rounded text-white bg-green-500"
                    onClick={() =>
                      dispatch({ type: "ADDTOCART", payload: watchlistData })
                    }
                    disabled={state.cart.some((disCart) =>
                      disCart.id === watchlistData.id ? true : false
                    )}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="px-3 py-1 rounded text-white bg-red-500"
                    onClick={() =>
                      dispatch({
                        type: "REMOVEWATCHLIST",
                        payload: watchlistData.id,
                      })
                    }
                  >
                    <span><BiTrashAlt/></span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p className="text-4xl">Watchlist Item Not Found</p>
        </div>
      )}
    </div>
  );
};
export default Watchlist;