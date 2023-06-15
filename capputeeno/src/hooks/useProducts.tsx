import { ProductsFetchResponse } from '@/types/products';
import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';
import { useFilter } from './useFilter';
import { filterQuery } from '@/utils/graphql-querry';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export default function useProducts() {
  const { type, priority } = useFilter();
  const query = filterQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetch(query),
    queryKey: ['products', type, priority],
  });
  return {
    data: data?.data?.data?.allProducts,
  };
}
