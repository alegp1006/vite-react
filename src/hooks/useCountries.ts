import { usePersistedState } from "./usePersistedState";
import { data } from "../mocks/country.json";
import { useEffect, useState } from "react";
import { getCountries } from "../services/countries";

export function useCountries() {
  const [countries, setCountries] = usePersistedState({
    key: "countries-api",
    initialValue: data,
  });
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<null | boolean>(null);
  const controller = new AbortController();

  useEffect(() => {
    getCountries();
  }, [countries]);
  const getAllCountries = async () => {
    try {
      isLoading(true);
      setError(null);

      const countries = await getCountries();
      setCountries(countries);
    } catch (error) {
      setError(true);
    } finally {
      isLoading(false);
    }
  };
  return {
    countries,
    loading,
    error,
    getAllCountries,
    controller,
  };
}
