import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import Product from "./Product/Product";
import Bestsell from "./Bestsell/Bestsell";
import Services from "./Services/Services";
import { ThemeContext } from "./Context/Context";
const App = () => {
  const {state,dispatch} = useContext(ThemeContext)
  useEffect(() => {
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})
  }, [])
  
  return (
    <div className="px-5 sm:px-10 xl:px-32">
      <Banner />
      <Category />
      <Discount />
      <Product />
      <Bestsell />
      <Services />
    </div>
  );
};
export default App;