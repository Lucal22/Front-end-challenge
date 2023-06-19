import axios, { AxiosPromise } from 'axios';
import { useQuery } from 'react-query';
import { filterProductQuery } from '@/utils/graphql-querry';
import { ProductsFetchResponse } from '@/types/products';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export default function useProductById(id: string) {
  const query = filterProductQuery(id);
  const { data } = useQuery({
    queryFn: () => fetch(query),
    queryKey: ['product'],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
