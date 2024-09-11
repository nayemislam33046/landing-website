import React, { useContext, useEffect, useRef, useState } from "react";
import { BiHeart, BiMenu, BiShoppingBag, BiUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import Search from "./Search/Search";
import Dropdown from "./DropdownLink/Dropdown";
import { ThemeContext } from "../Context/Context";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [modal, setmodal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleModal = (mydata) => {
    setmodal(mydata);
  };
  const { state } = useContext(ThemeContext);
  const [CartItem, setCartItem] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current?.contains(e.target)) {
        setCartItem(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  return (
    <div className="relative z-50">
      <div className="flex items-center xsm:justify-center py-1 sm:px-10 xl:px-32 w-full bg-slate-300 px-10 md:justify-between">
        <p className="font-semibold xsm:text-sm text-center text-[11px] lg:text-base text-gray-600">
          Super Value Deals - Save more with coupons
        </p>
        <select name="" id="" className="bg-transparent hidden md:block">
          <option value="eng">🇬🇧 English</option>
          <option value="eng">🇩🇪 Germany</option>
        </select>
      </div>
      <div className="py-5 border-b px-5 sm:px-10 xl:px-32">
        <div className=" flex justify-between items-center">
          <div>
            <img src="/freshcart-logo.svg" alt="logo" className="w-[100px] xsm:w-auto"/>
          </div>
          <div className="hidden lg:block">
            <Search setmodal={handleModal} />
          </div>
          <div className="flex items-center xsm:gap-6 gap-3">
            <Link to="/watchlist" className="relative">
              <span className="xsm:text-2xl text-lg text-gray-500 cursor-pointer">
                <BiHeart />
              </span>
              <span className="absolute xsm:-top-2 xsm:-right-2 -top-1 -right-1 cursor-pointer xsm:text-sm text-[10px] bg-green-600 text-white px-1 rounded-full">
                {state.watchlist.length}
              </span>
            </Link>
            <div>
              <span className="xsm:text-2xl text-lg text-gray-500 cursor-pointer">
                <BiUser />
              </span>
            </div>
            <div className="relative">
              <div onClick={() => setCartItem(true)}>
                <span className="xsm:text-2xl text-lg text-gray-500 cursor-pointer">
                  <BiShoppingBag />
                </span>
                <span className="absolute xsm:-top-2 xsm:-right-2 -top-1 -right-1 cursor-pointer bg-green-600 xsm:text-sm text-[10px] text-white px-1 rounded-full">
                  {state.cart.length}
                </span>
              </div>
              {CartItem && (
                <div className="z-10 px-5 sm:px-0 fixed inset-0 bg-[#00000075] flex items-center justify-center">
                  <div
                    ref={menuRef}
                    className="sm:w-[470px] xsm:w-[419px] h-full bg-white absolute right-0 px-5"
                  >
                    <div className="flex items-center justify-between py-5">
                      <p className="text-3xl">Shop Cart</p>
                      <button
                        onClick={() => setCartItem(false)}
                        className="text-3xl"
                      >
                        X
                      </button>
                    </div>
                    <hr />
                    <div className="rounded-lg px-2 bg-neutral-400 py-1 my-2 text-sm  border">
                      <p>You’ve got FREE delivery. Start checkout now!</p>
                    </div>
                    <hr />
                    <div>
                      <Cart />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:hidden">
              <span
                className="text-3xl text-gray-500"
                onClick={() => setMenuOpen(true)}
              >
                <BiMenu />
              </span>
            </div>
          </div>
        </div>
        <div>
          <Modal isVisible={modal} onClose={() => setmodal(false)}>
            <div>
              <div>
                <input
                  type="text"
                  name="Search"
                  id="Search"
                  className="w-full py-2 border rounded-lg placeholder:font-semibold ps-5"
                  placeholder="Search Your Area"
                />
              </div>
              <div className="flex items-center justify-between my-5">
                <p className="font-bold">Select Location</p>
                <button className="text-sm font-bold text-gray-500 border px-2 py-1 rounded">
                  Clear All
                </button>
              </div>
              <div className="h-[300px] overflow-y-scroll">
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Alabama</p>
                  <p>Min:$20</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Alaska</p>
                  <p>Min:$30</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Arizona</p>
                  <p>Min:$50</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>California</p>
                  <p>Min:$29</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Colorado</p>
                  <p>Min:$80</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Florida</p>
                  <p>Min:$90</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Arizona</p>
                  <p>Min:$50</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>California</p>
                  <p>Min:$29</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Colorado</p>
                  <p>Min:$80</p>
                </div>
                <div className="flex items-center justify-between font-semibold text-gray-800 border-b hover:bg-slate-400 px-3 py-2">
                  <p>Florida</p>
                  <p>Min:$90</p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="hidden lg:block">
          <Dropdown />
        </div>
      </div>
      <div
        className={`bg-white absolute h-[90vh] w-full top-0 lg:hidden  ${
          menuOpen
            ? "left-0 transition-[.6s]"
            : "-left-[96rem] transition-[.6s]"
        }`}
      >
        <div className=" flex items-center justify-between p-5">
          <img src="/freshcart-logo.svg" alt="" />
          <button
            className="text-2xl text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <Search setmodal={handleModal} />
        <Dropdown />
      </div>
    </div>
  );
};
export default Navbar;