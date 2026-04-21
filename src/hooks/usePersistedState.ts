import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { getItem, setItem } from "../utils/localStorage";

export function usePersistedState<T>({
  key,
  initialValue,
}: {
  key: string;
  initialValue: T;
}): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return item || initialValue;
  });

  useEffect(() => {
    setItem({ key, value });
  }, [value]);

  return [value, setValue];
}
