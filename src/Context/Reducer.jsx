export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case "REMOVECART":
      return {
        ...state,
        cart: state.cart.filter((cartData) => cartData.id !== action.payload),
      };
    case "ADDTOWATCH":
      return {
        ...state,
        watchlist: [...state.watchlist, { ...action.payload }],
      };
    case "REMOVEWATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (cartData) => cartData.id !== action.payload
        ),
      };
    case "INCREMENT":
      const incrementProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount + 1;
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: incrementProduct,
      };
    case "DECREMENT":
      const decrementProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: decrementProduct,
      };
    default:
      return state;
  }
};