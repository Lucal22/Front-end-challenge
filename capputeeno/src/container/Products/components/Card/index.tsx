import React from 'react';
import * as Styled from './styles';
import { Products } from '@/types/products';
import { centsToReal } from '@/utils/centsToReal';
import { useRouter } from 'next/navigation';

export type CardProps = {
  id: string;
  name: string;
  price: number;
  img: string;
};

export default function Card({
  id,
  name,
  price_in_cents,
  image_url,
}: Products) {
  const router = useRouter();
  const price = centsToReal(price_in_cents);
  return (
    <Styled.Container>
      <Styled.Card onClick={() => router.push(`/${id}`)}>
        <img src={image_url} alt={name} />
        <Styled.Description>
          <p>{name}</p>
          <p>R$ {price}</p>
        </Styled.Description>
      </Styled.Card>
    </Styled.Container>
  );
}
