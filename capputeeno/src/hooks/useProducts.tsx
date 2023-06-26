import { ProductsFetchResponse } from '@/types/products';
import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';
import { useFilter } from './useFilter';
import { filterQuery } from '@/utils/graphql-querry';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export default function useProducts() {
  const { type, page, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = filterQuery(type, priority, page);
  const { data } = useQuery({
    queryFn: () => fetch(query),
    queryKey: ['products', type, priority, page],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase()),
  );

  return {
    data: filteredProducts,
  };
}
