'use client';

import ProductPage from '@/components/ProductPage';
import { QueryClient, QueryClientProvider } from 'react-query';

type ProductProps = {
  params: {
    slug: string;
  };
};

export default function Product({ params }: ProductProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ProductPage id={params.slug} />
    </QueryClientProvider>
  );
}
