import React from 'react';
import * as Styled from './styles';



export default function Selectors() {
  return (
    <Styled.Container>
      <Styled.ProductFilter isClicked={true}><p>TODOS OS PRODUTOS</p></Styled.ProductFilter>
      <Styled.ProductFilter isClicked={false}><p>CAMISETAS</p></Styled.ProductFilter>
      <Styled.ProductFilter isClicked={false}><p>CANECAS</p></Styled.ProductFilter>
    </Styled.Container>
  );
}
