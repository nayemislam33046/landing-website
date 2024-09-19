import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "./Navlink";
import { BiMenu, BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import LinkNav from "./LinkNav";
const Navbars = () => {
  const menuRef = useRef();
  const [handleMenu, sethandleMenu] = useState(false);
  const [NavEffect, setNavEffect] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [toggleDropdownDeep, settoggleDropdownDeep] = useState(false);
  const [openDropdownDeep, setOpenDropdownDeep] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef?.current.contains(e.target)) {
        settoggleDropdown(false);
        settoggleDropdownDeep(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavEffect(true);
    } else if (window.scrollY <= 20) {
      setNavEffect(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`${
        NavEffect ? "bg-white" : "bg-[#22222265]"
      } transition-all py-10 px-5 lg:py-2 md:px-16 lg:px-10 xl:px-20 fixed left-0 right-0 z-50`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className={`text-2xl ${
              NavEffect ? "text-black" : "text-white"
            } font-bold`}
          >
            incline.
          </Link>
          <div className="hidden lg:block">
            <LinkNav />
          </div>
        </div>
        <div>
          <span
            className={`text-3xl lg:hidden ${
              NavEffect ? "text-black" : "text-white"
            } cursor-pointer`}
            onClick={() => sethandleMenu(true)}
          >
            <BiMenu />
          </span>
          <div
            className={`lg:flex p-10 items-center gap-4 lg:bg-transparent bg-white h-[95vh] top-0 z-10 w-full lg:h-auto absolute no-scrollbar overflow-scroll left-0 lg:relative ${
              handleMenu ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between fixed right-10 lg:hidden bg-white left-10 top-0 py-5 z-50 border-b">
              <Link to="/" className="text-2xl font-bold lg:hidden">
                incline.
              </Link>
              <span
                className="text-end block text-3xl cursor-pointer lg:hidden"
                onClick={() => sethandleMenu(false)}
              >
                X
              </span>
            </div>
            <div className={`lg:hidden ${handleMenu ? "mt-10" : "mt-0"}`}>
              <LinkNav handleMenu={handleMenu} NavEffect={NavEffect} />
            </div>
            {navlink.map((mylink, index) => {
              return (
                <div key={index} className="leading-10 relative">
                  <Link
                    to={mylink.link}
                    onClick={() => {
                      settoggleDropdown(!toggleDropdown);
                      setOpenDropdown(index);
                    }}
                    className={` text-black ${
                      NavEffect ? "text-black" : "lg:text-white"
                    } flex items-center gap-1 lg:text-sm xl:text-base lg:mt-0 mt-3 hover:text-orange-500`}
                  >
                    {mylink.title}{" "}
                    {mylink.drodownfalse !== "true" && <BiDownArrowAlt />}
                  </Link>
                  <div>
                    {openDropdown === index &&
                      mylink.subLink &&
                      toggleDropdown && (
                        <div>
                          <div
                            className="p-5 z-30 shadow-lg lg:absolute lg:left-0 lg:right-0 leading-8 lg:min-w-60 lg:mt-5 bg-white"
                            ref={menuRef}
                          >
                            {mylink.subLink.length >= 0 &&
                              mylink.subLink.map((DropLinks, ind) => {
                                return (
                                  <Link
                                    to={DropLinks.link}
                                    className="flex flex-col border-b"
                                    key={ind}
                                  >
                                    <div className=" relative">
                                      <Link
                                        to={DropLinks.link}
                                        className="flex items-center justify-between"
                                        onClick={() => {
                                          setOpenDropdownDeep(ind);
                                          settoggleDropdownDeep(
                                            !toggleDropdownDeep
                                          );
                                        }}
                                      >
                                        {DropLinks.name}
                                        {DropLinks.subcategory && (
                                          <BiRightArrowAlt />
                                        )}
                                      </Link>
                                      {openDropdownDeep === ind &&
                                        toggleDropdownDeep && (
                                          <div className="lg:absolute border bg-white lg:top-0 lg:-right-[212px] px-10 py-2 lg:px-0 lg:py-0">
                                            {DropLinks.subcategory.map(
                                              (cateLink, i) => {
                                                console.log(cateLink);
                                                return (
                                                  <div
                                                    key={i}
                                                    className=" w-48 lg:px-5 lg:border-b lg:py-1"
                                                  >
                                                    <Link
                                                      to={cateLink.link}
                                                      className="lg:text-sm"
                                                    >
                                                      {cateLink.name}
                                                    </Link>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
            <div className="lg:flex lg:items-center gap-4 mt-5 lg:mt-0">
              <span
                className={` text-black ${
                  NavEffect ? "text-black" : "lg:text-white"
                } lg:text-sm xl:text-base lg:mt-0 mt-3 hidden lg:block`}
              >
                |
              </span>
              <span
                className={` text-black ${
                  NavEffect ? "text-black" : "lg:text-white"
                } lg:text-sm xl:text-base lg:mt-0 mt-3 hover:text-orange-500 cursor-pointer`}
              >
                PRODUCT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbars;