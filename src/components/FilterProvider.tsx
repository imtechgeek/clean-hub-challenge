import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { Filter } from '../utils/types';

type ContextState = {
  filters: Filter;
  setFilters(value: Filter): void;
};

export const FilterContext = createContext<ContextState | null>(null);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<Filter>({ name: '', active: false });
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Please use filter provider in the parent element');
  }

  return context;
};
