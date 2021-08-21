import { useState, useCallback } from "react";

export function useInput<T>(
  initialValue: T
): [T, (e?: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<T>(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}
