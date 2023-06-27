import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(item);
      if (value) setValue(JSON.parse(value));
    }
    return;
  }, []);

  const postValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    postValue,
  };
}
