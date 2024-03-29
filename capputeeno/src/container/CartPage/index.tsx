'use client';

import React from 'react';
import * as Styled from './styles';
import Container from '@/components/container';
import Back from '@/components/BackArrow';
import Card from './components/Card';
import { Products } from '@/types/products';
import { cartPrice } from '@/utils/cartPrice';
import { centsToReal } from '@/utils/centsToReal';
import Link from 'next/link';

export default function CartPage() {
  let cartItems = '';
  let cartItemsArray = [];

  if (typeof localStorage !== 'undefined') {
    cartItems = localStorage.getItem('cart-items') as string;
    cartItemsArray = cartItems ? JSON.parse(cartItems) : '';
  }
  const cartTotalPrice = centsToReal(cartPrice());
  const delivery = cartPrice() > 90000 || cartPrice() === 0 ? 0 : 4000;
  const total = centsToReal(cartPrice() + delivery);
  const disable = cartPrice() === 0;

  function handlePurchase() {
    localStorage.removeItem('cart-items');
    location.href = '/cart';
  }

  return (
    <Container>
      <Back />
      <Styled.Flex>
        <Styled.CartItens>
          <h2>SEU CARRINHO</h2>
          <p>
            {`Total (${
              cartItemsArray
                ? `${cartItemsArray.length} produtos`
                : `0 produtos`
            }) `}
            <span>R$ {cartTotalPrice}</span>
          </p>
          {cartItemsArray
            ? cartItemsArray.map((item: Products) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    img={item.image_url}
                    description={item.description as string}
                    qtd={item.quantity as number}
                    priceInCents={item.price_in_cents}
                  />
                );
              })
            : null}
        </Styled.CartItens>
        <Styled.BuyProducts>
          <div>
            <h2>RESUMO DO PEDIDO</h2>
            <Styled.SubTotal>
              <p>Subtotal de produtos</p>
              <p>R$ {cartTotalPrice}</p>
            </Styled.SubTotal>
            <Styled.Delivery>
              <p>Entrega</p>
              <p>R$ {centsToReal(delivery)}</p>
            </Styled.Delivery>
            <Styled.Line></Styled.Line>
            <Styled.Total>
              <p>Total</p>
              <p>R$ {total}</p>
            </Styled.Total>
            <Styled.Purchase>
              <Styled.PurchaseButton
                onClick={handlePurchase}
                disabled={disable}
              >
                FINALIZAR COMPRA
              </Styled.PurchaseButton>
            </Styled.Purchase>
          </div>
          <Styled.Links>
            <Link href="/">ajuda</Link>
            <Link href="/">reembolso</Link>
            <Link href="/">entregas e frete</Link>
            <Link href="/">trocas e devoluções</Link>
          </Styled.Links>
        </Styled.BuyProducts>
      </Styled.Flex>
    </Container>
  );
}
