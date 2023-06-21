'use client';

import Container from '@/components/container';
import Filters from '@/components/Filters';
import Products from '@/container/Products';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Container>
        <Filters />
        <Products />
      </Container>
    </QueryClientProvider>
  );
}
