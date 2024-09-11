import React, { useState } from "react";
import { BiCategoryAlt, BiDownArrowAlt } from "react-icons/bi";
import { links } from "./Navlink";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <div className="px-5 lg:px-0 lg:flex-row flex flex-col lg:items-center lg:justify-start lg:gap-5 pt-3 bg-white pb-5 lg:pb-0">
      {links.map((dropLink, index) => {
        return (
          <div key={index} className="lg:relative group">
            <Link
              to="/"
              className={`group flex items-center justify-between lg:border-none border-b py-2 gap-3`}
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {!dropLink.st && dropLink.name}{" "}
              {dropLink.st ? (
                <>
                  <button className="flex items-center px-3 gap-2 justify-center w-full bg-green-500 py-1 text-white rounded-md ">
                    <BiCategoryAlt /> {dropLink.name}
                  </button>
                </>
              ) : (
                <BiDownArrowAlt />
              )}
            </Link>
            {openDropdown === index && dropLink.submenu && (
              <div>
                <div
                  className="p-5 z-30 shadow-lg lg:absolute lg:left-0 lg:right-0 leading-8 lg:min-w-60 bg-white hover:block group-hover:block"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {dropLink.sublinks.map((DropLinks, i) => {
                    return (
                      <Link
                        to={DropLinks.link}
                        className="flex flex-col"
                        key={i}
                      >
                        {DropLinks.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Dropdown;
