import { useFilter } from "../hooks/useFilter";
import { FilterByCategory } from "./FilterByCategory";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByRating } from "./FilterByRating";
import { FilterBySort } from "./filterBySort";
import "../styles/filters.css";
import type { ChangeEvent } from "react";
export function Filters() {
  const {
    filters,
    hanldeChangeRating,
    handleChange,
    setFilters,
    handleSortByValue,
  } = useFilter();

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      price: Number(e.target.value),
    }));
  };

  return (
    <section className="filters">
      <section className="filters-section">
        <FilterBySort value={filters} onChange={handleSortByValue} />
        <FilterByCategory onChange={handleChange} />

        <FilterByPrice value={filters} onChange={handleChangePrice} />

        <FilterByRating onChange={hanldeChangeRating} />
      </section>
      <aside className="filters-aside">
        <div className="filters-aside-content">
          categoria: {filters.category}
        </div>
        <span>|</span>
        <div className="filters-aside-content">rating: {filters.rating}</div>
      </aside>
    </section>
  );
}
