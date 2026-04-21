import { createContext, useState, type ReactNode } from "react";

export interface Filters {
  category: string;
  price: number;
  rating: number;
  nameProd: string;
  sortName: string;
}

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const initialValue = {
  category: "all",
  price: 0,
  rating: 5,
  nameProd: "",
  sortName: "",
};

const defaultFiltersContentType: FilterContextType = {
  filters: initialValue,
  setFilters: () => {},
};

interface FiltersProvider {
  children: ReactNode;
}

export const FiltersContext = createContext<FilterContextType>(
  defaultFiltersContentType,
);

export function Filteredprovider({ children }: FiltersProvider) {
  const [filters, setFilters] = useState<Filters>(initialValue);
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
