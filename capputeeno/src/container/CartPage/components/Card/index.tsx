import React from 'react';
import * as Styled from './styles';
import { centsToReal } from '@/utils/centsToReal';
import { ArrowDown, Trash } from '@/components/Icons';
import { Products } from '@/types/products';

type CardProps = {
  id: string;
  name: string;
  img: string;
  description: string;
  qtd: number;
  priceInCents: number;
};

export default function Card({
  id,
  img,
  description,
  qtd,
  priceInCents,
  name,
}: CardProps) {
  const price = centsToReal(priceInCents);

  function handleDelete() {
    const cartProducts = localStorage.getItem('cart-items');
    const cartProductArray = cartProducts ? JSON.parse(cartProducts) : [];
    const index = cartProductArray.findIndex(
      (item: Products) => item.id === id,
    );
    if (index > -1) {
      cartProductArray.splice(index, 1);
      localStorage.setItem('cart-items', JSON.stringify(cartProductArray));
      location.href = '/cart';
    }
  }

  return (
    <Styled.Container>
      <Styled.Img>
        <img src={img} />
      </Styled.Img>
      <Styled.Informations>
        <Styled.Trash onClick={handleDelete}>
          <Trash />
        </Styled.Trash>
        <h2>{name}</h2>
        <p>{description}</p>
        <Styled.ProductQtd>
          <Styled.ButtonQtd>
            <span>{qtd}</span>
            <ArrowDown />
          </Styled.ButtonQtd>
          <p>R$ {price}</p>
        </Styled.ProductQtd>
      </Styled.Informations>
    </Styled.Container>
  );
}
