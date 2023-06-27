import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem(item);
      if (value) setValue(JSON.parse(value));
    }
    return;
  }, [item]);

  const postValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    postValue,
  };
}
