import React, { useState } from 'react';
import * as Styled from './styles';
import { ArrowDown } from '@/components/Icons';
import { useFilter } from '@/hooks/useFilter';
import { FilterPriorityTypes } from '@/types/filters';

export default function Priority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  function handleClick(filter: FilterPriorityTypes) {
    setPriority(filter);
    setIsOpen(!isOpen);
  }

  return (
    <Styled.Container>
      <Styled.Button onClick={() => setIsOpen(!isOpen)}>
        Organizar por
        <ArrowDown />
      </Styled.Button>
      <Styled.DropMenu isOpen={isOpen}>
        <li onClick={() => handleClick(FilterPriorityTypes.NEW)}>Novidades</li>
        <li onClick={() => handleClick(FilterPriorityTypes.BIGGEST_PRICE)}>
          Preço: Maior - menor
        </li>
        <li onClick={() => handleClick(FilterPriorityTypes.MINOR_PRICE)}>
          Preço: Menor - maior
        </li>
        <li onClick={() => handleClick(FilterPriorityTypes.POPULARITY)}>
          Mais vendidos
        </li>
      </Styled.DropMenu>
    </Styled.Container>
  );
}
