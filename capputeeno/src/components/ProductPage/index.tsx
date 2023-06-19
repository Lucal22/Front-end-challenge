import React from 'react';
import * as Styled from './styles';
import Container from '../container';
import { ArrowBack, Cart, CartLight } from '../Icons';
import useProductById from '@/hooks/useProductById';
import { centsToReal } from '@/utils/centsToReal';

type ProductPageProps = {
  id: string;
};

export default function ProductPage({ id }: ProductPageProps) {
  const { data } = useProductById(id);

  if (data) {
    const price = centsToReal(data[0].price_in_cents);

    return (
      <Styled.ProductDetails>
        <Container>
          <Styled.Back href="/">
            <ArrowBack />
            <span>Voltar</span>
          </Styled.Back>
          <Styled.ProductArea>
            <Styled.ProductImage>
              <img alt={data[0].name} src={data[0].image_url} />
            </Styled.ProductImage>
            <Styled.ProductInfos>
              <span>{data[0].category === 'mugs' ? 'Caneca' : 'Camisa'}</span>
              <h1>{data[0].name}</h1>
              <span>R$ {price}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <h2>Descrição</h2>
              <p>{data[0].description}</p>
              <Styled.CartAdd>
                <CartLight /> ADICIONAR AO CARRINHO
              </Styled.CartAdd>
            </Styled.ProductInfos>
          </Styled.ProductArea>
        </Container>
      </Styled.ProductDetails>
    );
  }
}
