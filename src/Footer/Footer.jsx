import React from "react";
import { Link } from "react-router-dom";
import { BiLogoGithub, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-[#343A40] py-16 px-5 md:px-10 lg:px-16">
      <div className="md:flex md:items-center md:justify-between">
        <p className="text-white font-bold  text-2xl">incline.</p>
        <div className="flex items-center gap-4 py-5">
          <Link to="/" className="text-white hover:underline">
            Terms and conditions
          </Link>
          <Link to="/" className="text-white hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="text-white hover:underline">
            Contact us
          </Link>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between">
        <p className="text-gray-300 text-sm font-semibold">
          © Copyright 2024 Simpleqode. All rights reserved.{" "}
        </p>
        <div className="flex gap-5 mt-10 ">
          <span className="text-lg text-yellow-500 hover:text-yellow-600">
            <BiLogoGithub />
          </span>
          <span className="text-lg text-yellow-500 hover:text-yellow-600">
            <BiLogoTwitter />
          </span>
          <span className="text-lg text-yellow-500 hover:text-yellow-600">
            <BiLogoInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
