'use client'

import { FilterTypes, FilterPriorityTypes } from "@/types/filters";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: FilterPriorityTypes.POPULARITY,
  setSearch: (value: string)=>{},
  setPage: (value: number)=>{},
  setType: (value: FilterTypes)=>{},
  setPriority: (value: FilterPriorityTypes)=>{},
})

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({children}:ProviderProps){
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.ALL);
  const [priority, setPriority] = useState(FilterPriorityTypes.POPULARITY);

  return(
    <FilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setPriority}}>
      {children}
    </FilterContext.Provider>
  )
}
