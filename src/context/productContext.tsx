//import { createContext, useState } from "react";
import { createContext, type ReactNode } from "react";
import { useProducts } from "../hooks/useProducts";

interface ProductContextProps {
  children: ReactNode;
}

export const productContext = createContext({});

export function ProductProvider({ children }: ProductContextProps) {
  const { product, getAllProducts, error, loading } = useProducts();

  return (
    <productContext.Provider
      value={{
        product: product,
        getAllProducts,
        error,
        loading,
      }}>
      {children}
    </productContext.Provider>
  );
}
