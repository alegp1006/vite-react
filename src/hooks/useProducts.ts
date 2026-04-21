import { useState } from "react";
import { products } from "../mocks/product.json";
import { usePersistedState } from "./usePersistedState";
import { getProducts } from "../services/product";

export function useProducts() {
  const [product, setProduct] = usePersistedState({
    key: "product",
    initialValue: products,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | boolean>(null);
  const controller = new AbortController();

  const getAllProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const product = await getProducts();
      setProduct(product);
    } catch (e) {
      const error = e as Error;
      setError(true);
      throw new Error("Error to fetch: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    controller,
    product,
    loading,
    error,
    getAllProducts,
  };
}
