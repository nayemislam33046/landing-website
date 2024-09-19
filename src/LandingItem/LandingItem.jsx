import React from "react";
import { LandingCard } from "../Api/Api";
const LandingItem = () => {
  return (
    <div className="my-14 px-5">
      <div className="w-full md:w-[480px] md:block md:m-auto md:px-0 sm:px-20">
        <p className="text-3xl text-center mb-7 font-semibold">
          Landing page variants
        </p>
        <p className="text-center text-gray-500">
          Incline comes with several professionally designed landing pages that
          can be easily adapted for any project.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto my-10 md:gap-10 ">
        {LandingCard.map((landing) => {
          return (
            <div
              key={landing.id}
              className="w-[90%] sm:w-96 sm:h-72 mt-20 group"
            >
              <img
                src={`http://localhost:5173/${landing.img}`}
                alt={landing.name}
                className="group-hover:-mt-5 group-hover:shadow-2xl transition-all w-[100%] h-64"
              />
              <p className="my-3 font-bold text-xl flex gap-4">
                {landing.name}
                {landing.new && (
                  <span className="bg-red-500 text-white sm:px-2 flex items-center justify-center rounded text-sm px-1">
                    {landing.new}
                  </span>
                )}
              </p>
              <p className="text-gray-600 font-semibold my-2">{landing.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LandingItem;