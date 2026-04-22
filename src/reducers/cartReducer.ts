import type { ProductCart } from "../models/product-cart";
type CartAction =
  | { type: "ADD_TO_CART"; payload: ProductCart }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY_BY_ONE"; payload: { id: number } }
  | { type: "DECREASE_QUANTITY_BY_ONE"; payload: { id: number } }
  | { type: "CLEAR_CART" };
export const initialCartState: ProductCart[] = [];

export function reducer(
  state: ProductCart[],
  action: CartAction,
): ProductCart[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;

      const productInCart = state.findIndex((item) => item.id === id);
      console.log(productInCart);
      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity += 1;
        return newState;
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newCart = state.filter((item) => item.id !== id);
      return newCart;
    }
    case "UPDATE_QUANTITY_BY_ONE": {
      const { id } = action.payload;
      const selectedProduct = state.findIndex((item) => item.id === id);
      const productUpdated = structuredClone(state);
      productUpdated[selectedProduct].quantity += 1;

      return productUpdated;
    }
    case "DECREASE_QUANTITY_BY_ONE": {
      const { id } = action.payload;
      const selectedProduct = state.findIndex((item) => item.id === id);
      const productUpdated = structuredClone(state);
      productUpdated[selectedProduct].quantity -= 1;

      return productUpdated;
    }
    case "CLEAR_CART": {
      return initialCartState;
    }
  }
}
