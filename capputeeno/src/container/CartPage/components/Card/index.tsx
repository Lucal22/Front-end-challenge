import React from 'react';
import * as Styled from './styles';
import { centsToReal } from '@/utils/centsToReal';
import { Trash } from '@/components/Icons';
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
  const cartProducts = localStorage.getItem('cart-items');
  const cartProductArray = cartProducts ? JSON.parse(cartProducts) : [];

  function handleDelete() {
    const index = cartProductArray.findIndex(
      (item: Products) => item.id === id,
    );

    if (index > -1) {
      cartProductArray.splice(index, 1);
      localStorage.setItem('cart-items', JSON.stringify(cartProductArray));
      location.href = '/cart';
    }
  }

  function handleAddMoreProducts(e: React.ChangeEvent<HTMLSelectElement>) {
    const updateQtd = cartProductArray.map((item: Products) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        quantity: Number(e.target.value),
      };
    });
    localStorage.setItem('cart-items', JSON.stringify(updateQtd));
    location.href = '/cart';
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
          <Styled.SelectQtd
            value={qtd}
            onChange={(e) => handleAddMoreProducts(e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Styled.SelectQtd>
          <p>R$ {price}</p>
        </Styled.ProductQtd>
      </Styled.Informations>
    </Styled.Container>
  );
}
