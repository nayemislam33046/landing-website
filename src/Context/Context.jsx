import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Reducer } from "./Reducer";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [getData, setgetData] = useState([]);
  const port = import.meta.env.VITE_PORT
  const Api = `${port}/Api`;
  const getProduct = async (Api) => {
    const res = await axios.get(Api);
    const data = await res.data;
    setgetData(data);
  };
  useEffect(() => {
    getProduct(Api);
  }, [Api]);
  const initialState = {
    cart: [],
    watchlist: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ThemeContext.Provider value={{ getData, Api, dispatch, state }}>
      {children}
    </ThemeContext.Provider>
  );
};