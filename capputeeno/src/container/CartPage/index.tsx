'use client';

import React from 'react';
import * as Styled from './styles';
import Container from '@/components/container';
import Back from '@/components/BackArrow';

export default function CartPage() {
  return (
    <Container>
      <Back />
      <Styled.Flex>
        <Styled.CartItens>
          <h2>SEU CARRINHO</h2>
          <p>
            {`Total (x produtos) `}
            <span>R$ xxx</span>
          </p>
        </Styled.CartItens>
        <Styled.BuyProducts>
          <h2>RESUMO DO PEDIDO</h2>
          <Styled.SubTotal>
            <p>Subtotal de produtos</p>
            <p>R$ 161,00</p>
          </Styled.SubTotal>
          <Styled.Delivery>
            <p>Entrega</p>
            <p>R$ 40,00</p>
          </Styled.Delivery>
          <Styled.Line></Styled.Line>
          <Styled.Total>
            <p>Total</p>
            <p>R$ 201,00</p>
          </Styled.Total>
          <Styled.Purchase>FINALIZAR COMPRA</Styled.Purchase>
        </Styled.BuyProducts>
      </Styled.Flex>
    </Container>
  );
}
