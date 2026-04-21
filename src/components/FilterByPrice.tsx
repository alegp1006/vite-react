import type { ChangeEvent } from "react";
import type { Filters } from "../context/filter";

interface FilterPriceProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: Filters;
}

export function FilterByPrice({ value, onChange }: FilterPriceProps) {
  return (
    <>
      <label htmlFor="range">precio</label>
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
      <span>${value.price}</span>
    </>
  );
}
