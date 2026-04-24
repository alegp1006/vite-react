import type { ChangeEvent } from "react";
import type { Filters } from "../context/filter";
import "../styles/filters.css";
interface FilterPriceProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: Filters;
}

export function FilterByPrice({ value, onChange }: FilterPriceProps) {
  return (
    <>
      <div className="price-range">
        <header className="price-header">
          <h2>precio</h2>
          <span>${value.price}</span>
        </header>

        <input
          className="filter-price"
          id="range"
          type="range"
          value={value.price}
          step={0}
          min={0}
          max={1000}
          onChange={onChange}
        />
      </div>
    </>
  );
}
