'use client'

import React from 'react';
import * as Styled from './styles';
import Selectors from './components/Selectors';
import Organizers from './components/Organizers';

export default function Filters() {
  return (
    <Styled.Container>
      <Selectors />
      <Organizers />
    </Styled.Container>
  );
}
