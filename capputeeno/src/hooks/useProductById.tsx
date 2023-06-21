import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';
import { filterProductQuery } from '@/utils/graphql-querry';
import { ProductFetchResponse } from '@/types/products';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query });
};

export default function useProductById(id: string) {
  const query = filterProductQuery(id);
  const { data } = useQuery({
    queryFn: () => fetch(query),
    queryKey: ['product', id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: data?.data?.data?.Product,
  };
}
