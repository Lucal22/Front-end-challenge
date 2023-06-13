import React from 'react';
import * as Styled from './styles';
import useProducts from '@/hooks/useProducts';

export default function Products() {
  const {data} = useProducts();
  console.log(data)
  return (
    <Styled.Container>
      {data?.map((product)=>{
        return(
        <a href={`/${product.id}`} key={product.id}>
          <img src={product.image_url} alt={product.name} />
         <p>{product.name}</p>
         <p>{product.price_in_cents}</p>
        </a>)
      })}
    </Styled.Container>
  );
}
