import { createContext, useReducer, type ReactNode } from "react";
import { initialCartState, reducer } from "../reducers/cartReducer";
import type { ProductCart } from "../models/product-cart";
import type { Product } from "../models/product";

interface ProductCartProps {
  product: ProductCart;
}
interface CartProviderProps {
  children: ReactNode;
}
interface CartContextType {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  updateQuantityByOne: (product: ProductCartProps) => void;
  decreeseQuantityByOne: (product: ProductCartProps) => void;
  clearCart: () => void;
  removeProductFromCart: (product: ProductCartProps) => void;
  totalPrice: number;
  totalProducts: number;
}
const initialContextValue: CartContextType = {
  cart: [],
  addToCart: () => {},
  updateQuantityByOne: () => {},
  decreeseQuantityByOne: () => {},
  clearCart: () => {},
  removeProductFromCart: () => {},
  totalPrice: 0,
  totalProducts: 0,
};

export const cartContext = createContext<CartContextType>(initialContextValue);

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialCartState);

  const localStorage = (state: ProductCartProps) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  };

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    //localStorage(state);
  };

  const updateQuantityByOne = (product: ProductCartProps) => {
    dispatch({
      type: "UPDATE_QUANTITY_BY_ONE",
      payload: product,
    });
    localStorage(state);
  };
  const decreeseQuantityByOne = (product: ProductCartProps) => {
    dispatch({
      type: "DECREASE_QUANTITY_BY_ONE",
      payload: product,
    });
    localStorage(state);
  };

  const clearCart = () => {
    dispatch({
      type: "",
    });
    localStorage(state);
  };

  const removeProductFromCart = (product: ProductCartProps) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
    localStorage(state);
  };

  const totalProducts = state.length;
  const totalPrice = state
    .reduce(
      (acc: number, product: ProductCart) =>
        acc + product.price * product.quantity,
      0,
    )
    .toFixed(2);

  return (
    <cartContext.Provider
      value={{
        cart: state,
        addToCart,
        updateQuantityByOne,
        decreeseQuantityByOne,
        clearCart,
        removeProductFromCart,
        totalPrice,
        totalProducts,
      }}>
      {children}
    </cartContext.Provider>
  );
}
