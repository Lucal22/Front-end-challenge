import React from 'react';
import * as Styled from './styles';
import useProducts from '@/hooks/useProducts';
import Card from './components/Card';

export default function Products() {
  const { data } = useProducts();
  console.log(data);
  return (
    <Styled.Container>
      {data?.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price_in_cents={product.price_in_cents}
          />
        );
      })}
    </Styled.Container>
  );
}
