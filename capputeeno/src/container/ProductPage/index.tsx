import React from 'react';
import * as Styled from './styles';
import Container from '../../components/container';
import { CartLight } from '../../components/Icons';
import useProductById from '@/hooks/useProductById';
import { centsToReal } from '@/utils/centsToReal';
import { productToCart } from '@/utils/productToCart';
import Back from '@/components/BackArrow';

type ProductPageProps = {
  id: string;
};

export default function ProductPage({ id }: ProductPageProps) {
  const { data } = useProductById(id);

  function handleAddClick() {
    data ? productToCart(id, data) : null;
    location.href = '/';
  }

  if (data) {
    const price = centsToReal(data.price_in_cents);

    return (
      <Styled.ProductDetails>
        <Container>
          <Back />
          <Styled.ProductArea>
            <Styled.ProductImage>
              <img alt={data.name} src={data.image_url} />
            </Styled.ProductImage>
            <Styled.ProductInfos>
              <span>{data.category === 'mugs' ? 'Caneca' : 'Camisa'}</span>
              <h1>{data.name}</h1>
              <span>R$ {price}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <h2>Descrição</h2>
              <p>{data.description}</p>
              <Styled.CartAdd onClick={handleAddClick}>
                <CartLight /> ADICIONAR AO CARRINHO
              </Styled.CartAdd>
            </Styled.ProductInfos>
          </Styled.ProductArea>
        </Container>
      </Styled.ProductDetails>
    );
  }
}
