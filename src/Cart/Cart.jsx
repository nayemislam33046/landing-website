import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/Context";
const Cart = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [subtotals, setSubtotal] = useState(0);
  const { subtotal, totalQuantity } = state.cart.reduce(
    (acc, item) => {
      acc.subtotal += item.price * item.amount;
      acc.totalQuantity += item.amount;
      return acc;
    },
    { subtotal: 0, totalQuantity: 0 }
  );
  useEffect(() => {
    setSubtotal(subtotal);
  }, [subtotal]);
  return (
    <div>
      {state.cart.length !== 0 ? (
        <div>
          {state.cart.map((cartData) => {
            const { image, category, id, title, price, amount } = cartData;
            const titleShort = title.substring(0, 13);
            const handleIncrement = (id) => {
              dispatch({ type: "INCREMENT", payload: id });
            };
            const handleDecrement = (id) => {
              dispatch({ type: "DECREMENT", payload: id });
            };
            return (
              <div key={id} className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-3 mt-2 xsm:w-[165px] ">
                  <img src={image[0].image} className="w-10" alt={category} />
                  <div>
                    <p className="xsm:text-base text-sm">
                      {titleShort.length >= 13
                        ? titleShort + "..."
                        : titleShort}
                    </p>
                    <button
                      className="text-green-500 xsm:text-sm text-[11px]"
                      onClick={() =>
                        dispatch({ type: "REMOVECART", payload: id })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="xsm:w-5 w-3 border rounded"
                    onClick={() => handleDecrement(id)}
                    disabled={cartData.amount <= 1 ? true : false}
                  >
                    -
                  </button>
                  <p className="xsm:w-5 w-3 border rounded text-center">
                    {cartData.amount}
                  </p>
                  <button
                    className="xsm:w-5 w-3 border rounded"
                    onClick={() => handleIncrement(id)}
                    disabled={cartData.amount >= 10 ? true : false}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>${price * amount}.00</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-end">
            <div className="my-5 sm:w-48 bg-gray-300 shadow-lg p-2 rounded-md">
              <div className="">
                <p className=" text-sm flex items-center justify-between">
                  <span className="font-bold">Shipping Fee :</span>{" "}
                  <span className="font-semibold">$17</span>
                </p>
                <p className=" text-sm flex items-center justify-between my-2">
                  <span className="font-bold">Total :</span>{" "}
                  <span className="font-semibold">${subtotals + 17}</span>
                </p>
              </div>
              <button className="bg-orange-500 sm:px-3 px-2 sm:py-1 py-1 rounded text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center text-2xl">No Cart Found </p>
        </div>
      )}
    </div>
  );
};
export default Cart;