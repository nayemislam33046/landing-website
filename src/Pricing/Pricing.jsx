import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div className="px-5 my-24 md:my-28">
      <div>
        <p className="text-center text-3xl pb-6">Pricing options </p>
        <p className="text-center text-gray-500">
          Secure payment via Stripe or Paypal. 100% money back guarantee.{" "}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
        <div className="w-96 h-auto border hover:shadow-xl transition-all">
          <div className="border border-t-orange-400 p-12 border-t-2">
            <p className="text-center text-xl font-semibold">
              Standard license{" "}
            </p>
            <p className="text-2xl text-center text-orange-400 py-5">$49.00 </p>
            <div className="flex items-center gap-3">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Use for a single product{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Paying users allowed{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 my-5 pb-5">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Read{" "}
                <Link to="/" className="text-orange-400">
                  full description
                </Link>{" "}
              </p>
            </div>
            <button className="p-4 mx-auto border block border-orange-400 hover:text-orange-400">
              PURCHASE NOW
            </button>
          </div>
        </div>
        <div className="w-96 h-auto ">
          <div className="border p-12 hover:shadow-xl transition-all">
            <p className="text-center text-xl font-semibold">
              Standard license{" "}
            </p>
            <p className="text-2xl text-center text-orange-400 py-5">$49.00 </p>
            <div className="flex items-center gap-3">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Use for a single product{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 my-5">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Paying users allowed{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 my-5 pb-5">
              <span className="text-orange-400">
                <BiRightArrowAlt />
              </span>
              <p className="text-gray-700 font-semibold">
                Read{" "}
                <Link to="/" className="text-orange-400">
                  full description
                </Link>{" "}
              </p>
            </div>
            <button className="p-4 mx-auto border block border-orange-400 hover:text-orange-400">
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
