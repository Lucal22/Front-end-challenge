'use client'

import React from 'react';
import * as Styled from './styles';
import Selectors from './components/Selectors';
import Priority from './components/Priority';

export default function Filters() {
  return (
    <Styled.Container>
      <Selectors />
      <Priority />
    </Styled.Container>
  );
}
