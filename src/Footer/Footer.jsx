import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-5 sm:px-10 xl:px-32 bg-gray-200 py-10">
      <div className="grid justify-around items-start lg:flex">
        <div className="flex items-center justify-between lg:justify-around w-[250px] xsm:w-[350px] md:w-[500px] lg:w-[300px]">
          <div className="flex flex-col leading-7">
            <p className="font-bold text-gray-900 my-3">Categories</p>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              T-Shirts
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Shirts
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Uniform
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Towser
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Men Pant
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Ladies Shirts
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Shows
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Men Shows
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 text-gray-700 font-semibold"
            >
              Ladies Shows
            </Link>
          </div>
          <div className="flex flex-col mt-5">
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Punjabi
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Sharee
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              SunGlases
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Baby T-Shirt
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Ladies Pant
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Ladies Cap
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Ladies T-Shirt
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Ladies Hijab
            </Link>
            <Link
              to="/"
              className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
            >
              Men Cap
            </Link>
          </div>
        </div>
        <div className="md:flex md:gap-10 md:mt-3">
          <div className="flex items-center justify-between lg:justify-around w-[260px] xsm:w-[350px] lg:w-[300px]  md:mt-0 mt-5">
            <div className="flex flex-col ">
              <p className="font-bold text-gray-900 my-3">Get To Know Us</p>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Company
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                About
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Help Center
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Our Value
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 my-3">For Consumers</p>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Payments
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Shipping
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Product Returns
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                FAQ
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Shop Checkout
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between xsm:w-[350px] w-[250px] mt-10 md:mt-0">
            <div className="flex flex-col ">
              <p className="font-bold text-gray-900 my-3">Become a Shopper</p>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Shopper Opportunities
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Become a Shopper
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold "
              >
                Earnings
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Ideas & Guides
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                New Retailers
              </Link>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-gray-900 my-3">Freshcart Programs</p>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Freshcart Programs
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Gift Cards
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Promos & Coupons
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Freshcart Ads
              </Link>
              <Link
                to="/"
                className="hover:text-green-500 mt-1 text-gray-700 font-semibold"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className=" py-5 flex items-center lg:justify-between flex-col lg:flex-row gap-5">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-sm xsm:text-base">Payment Partnes</p>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg"
              alt="amazononpay"
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg"
              alt="americal-express"
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg"
              alt="mastercard"
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg"
              alt="paypal"
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/visa.svg"
              alt="visa"
            />
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-semibold xsm:text-base text-sm">Get deliveries with FreshCart</p>
          <a href="/">
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg"
              alt="appstore"
              className="w-32 xsm:w-28"
            />
          </a>
          <a href="/">
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg"
              alt="playstore"
              className="w-32 xsm:w-28"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className="my-5 flex md:items-center md:justify-between flex-col md:flex-row gap-2">
        <p className="text-gray-500 text-sm sm:w-[400px] lg:w-[500px]">
          © 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved.
          Powered by{" "}
          <a href="/" className="text-green-700 font-semibold">
            Codescandy
          </a>.
        </p>
        <div className="flex items-center gap-2 mt-2 lg:mt-0">
          <p>Follow Us On </p>
          <div className="flex gap-2">
            <div className="text-gray-500 hover:text-green-500 cursor-pointer hover:border-green-500 border p-1 rounded-xl text-2xl inline-block">
              <BiLogoFacebookCircle />
            </div>
            <div className="text-gray-500 hover:text-green-500 cursor-pointer hover:border-green-500 border p-1 rounded-xl text-2xl inline-block">
              <BiLogoTwitter />
            </div>
            <div className="text-gray-500 hover:text-green-500 cursor-pointer hover:border-green-500 border p-1 rounded-xl text-2xl inline-block">
              <BiLogoInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;