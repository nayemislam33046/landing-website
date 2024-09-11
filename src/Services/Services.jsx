import React from "react";
import {
  AiFillBoxPlot,
  AiFillGift,
  AiOutlineClockCircle,
  AiOutlineGift,
} from "react-icons/ai";
import { BiBox, BiCube, BiRefresh } from "react-icons/bi";
import ServicesContext from "./ServicesContext";
const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      <ServicesContext
        icon={<AiOutlineClockCircle />}
        title={"10 minute grocery now"}
        text={
          "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
        }
      />
      <ServicesContext
        icon={<AiOutlineGift />}
        title={"Best Prices & Offers"}
        text={
          "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."
        }
      />
      <ServicesContext
        icon={<BiCube />}
        title={"Wide Assortment"}
        text={
          "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."
        }
      />
      <ServicesContext
        icon={<BiRefresh />}
        title={"Easy Returns"}
        text={`Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.`}
      />
    </div>
  );
};
export default Services;
