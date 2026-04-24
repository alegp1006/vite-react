import {
  useContext,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";

import { useProducts } from "./useProducts";
import { FiltersContext, type Filters } from "../context/filter";
import type { Product } from "../models/product";

export function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);
  const { product } = useProducts();
  const [prodName, setProdName] = useState("");
  const [pagination, setPagination] = useState({ start: 0, end: 21 });

  const localStorage = (filters: Filters) => {
    window.sessionStorage.setItem("filters", JSON.stringify(filters));
  };
  useEffect(() => {
    localStorage(filters);
  }, [filters]);

  const handleNextPage = () => {
    const lastPage = product.length - pagination.end;
    if (pagination.end >= product.length - 1) return;

    lastPage < 20
      ? setPagination((prevState) => ({
          start: (prevState.start += 20),
          end: (prevState.end += lastPage),
        }))
      : setPagination((prevState) => ({
          start: (prevState.start += 20),
          end: (prevState.end += 20),
        }));
  };
  const handlePrevPage = () => {
    if (pagination.start === 0) return;

    setPagination((prevState) => ({
      start: (prevState.start -= 20),
      end: (prevState.end -= 20),
    }));
  };

  const sliceProducts = product.slice(pagination.start, pagination.end);

  const filteredProducts = useMemo(() => {
    return sliceProducts !== undefined
      ? sliceProducts.filter((prod: Product) => {
          return (
            prod.price >= filters.price &&
            (filters.category === "all" ||
              filters.category === prod.category) &&
            prod.rating <= filters.rating &&
            (filters.nameProd === "" || prod.title === prodName)
          );
        })
      : sliceProducts;
  }, [sliceProducts, filters]);

  const sortedProducts = useMemo(() => {
    return filters.sortName
      ? filters.sortName === "price"
        ? filteredProducts.toSorted((a: Product, b: Product) => {
            return a.price - b.price;
          })
        : filters.sortName === "rating"
          ? filteredProducts.toSorted((a: Product, b: Product) => {
              return a.rating - b.rating;
            })
          : filters.sortName === "name"
            ? filteredProducts.toSorted((a: Product, b: Product) => {
                return a.title.localeCompare(b.title);
              })
            : filteredProducts
      : filteredProducts;
  }, [filteredProducts, filters]);

  const handleFindProduct = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilters((prev) => ({
      ...prev,
      nameProd: prodName,
    }));
    console.log(filters.nameProd + "aqui es el nombre del producto");
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setProdName(e.target.value);

    console.log(prodName);
  };

  const handleSortByValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      sortName: e.target.value,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };
  const hanldeChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      rating: Number(e.target.value),
    }));
  };

  return {
    prodName,
    filters,
    setFilters,
    handleChange,
    handleSortByValue,
    handleFindProduct,
    hanldeChangeRating,
    handleChangeName,
    handleNextPage,
    handlePrevPage,
    filteredProducts,
    sortedProducts,
  };
}
