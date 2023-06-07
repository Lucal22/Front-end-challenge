import React, { useState } from 'react';
import * as Styled from './styles';
import { ArrowDown } from '@/components/Icons';



export default function Organizers() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Styled.Container>
      <Styled.Button onClick={()=>setIsOpen(!isOpen)}>Organizar por<ArrowDown /></Styled.Button>
      <Styled.DropMenu isOpen={isOpen}>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais vendidos</li>
      </Styled.DropMenu>
    </Styled.Container>
  );
}
