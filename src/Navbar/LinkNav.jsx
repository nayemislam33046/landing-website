import React from "react";
import { BiLogoGithub, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { Link } from "react-router-dom";
const LinkNav = ({ handleMenu }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <span
          className={`text-xl hidden lg:block ${
            handleMenu ? "text-black" : "text-white"
          }`}
        >
          |
        </span>
        <div
          className={`flex lg:items-center gap-2 mt-1 lg:flex-row ${
            handleMenu ? "flex-col" : "flex-row"
          }`}
        >
          <Link
            className={`lg:text-xl text-lg flex items-center hover:text-orange-400 gap-2 ${
              handleMenu ? "text-black mt-3 lg:mt-0" : "text-white"
            }`}
            to="/"
          >
            <span>
              <BiLogoGithub />
            </span>
            <span className={`${handleMenu ? "block" : "hidden"} lg:hidden`}>
              GitHub
            </span>
          </Link>
          <Link
            className={`lg:text-xl text-lg flex items-center hover:text-orange-400 gap-2 ${
              handleMenu ? "text-black mt-3 lg:mt-0" : "text-white"
            }`}
            to="/"
          >
            <span>
              <BiLogoTwitter />
            </span>{" "}
            <span className={`${handleMenu ? "block" : "hidden"} lg:hidden `}>
              Twitter
            </span>
          </Link>
          <Link
            className={`lg:text-xl text-lg flex items-center hover:text-orange-400 gap-2 ${
              handleMenu ? "text-black mt-3 lg:mt-0" : "text-white"
            }`}
            to="/"
          >
            <span>
              <BiLogoInstagram />
            </span>{" "}
            <span className={`${handleMenu ? "block" : "hidden"} lg:hidden`}>
              Instagram
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LinkNav;
