import React from 'react';
import * as Styled from './styles';
import { useFilter } from '@/hooks/useFilter';
import { FilterTypes } from '@/types/filters';

export default function Selectors() {
  const { type, setType } = useFilter();

  return (
    <Styled.Container>
      <Styled.ProductFilter
        onClick={() => setType(FilterTypes.ALL)}
        isClicked={type === FilterTypes.ALL ?? false}
      >
        <p>TODOS OS PRODUTOS</p>
      </Styled.ProductFilter>
      <Styled.ProductFilter
        onClick={() => setType(FilterTypes.SHIRT)}
        isClicked={type === FilterTypes.SHIRT ?? false}
      >
        <p>CAMISETAS</p>
      </Styled.ProductFilter>
      <Styled.ProductFilter
        onClick={() => setType(FilterTypes.MUG)}
        isClicked={type === FilterTypes.MUG ?? false}
      >
        <p>CANECAS</p>
      </Styled.ProductFilter>
    </Styled.Container>
  );
}
