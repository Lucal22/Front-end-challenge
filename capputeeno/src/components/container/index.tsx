'use client'

import React from 'react';
import * as Styled from './styles';

export type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <Styled.Container>
    {children}
    </Styled.Container>
  );
}
