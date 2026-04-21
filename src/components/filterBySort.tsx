import { useId, type ChangeEvent } from "react";
import "../styles/filters.css";
import type { Filters } from "../context/filter";

interface FilterSortProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: Filters;
}

export function FilterBySort({ value, onChange }: FilterSortProps) {
  const selectFilterSortId = useId();
  return (
    <>
      <select
        id={selectFilterSortId}
        className="filter-sort"
        value={value.sortName}
        onChange={onChange}>
        <option value="">ordenar por</option>
        <option value="rating">rating</option>
        <option value="name">nombre</option>
        <option value="price">precio</option>
      </select>
    </>
  );
}
