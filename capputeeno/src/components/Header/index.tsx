'use client'

import React from 'react';
import * as Styled from './styles';

import { Cart, Search } from '../Icons';

export default function Header() {
  return (
    <Styled.Header>
      <div>
        <Styled.Logo className={Styled.sairaStencil.className}>capputeeno</Styled.Logo>
      </div>
      <Styled.RightContent>
        <Styled.Form>
        <Styled.Search placeholder='Procurando por algo específico?' />
        <Styled.Button aria-label='Search for item'>
          <Search />
          </Styled.Button>
        </Styled.Form>
        <Styled.Cart href='/cart'>
          <Cart />
          <Styled.Counter>1</Styled.Counter>
        </Styled.Cart>
      </Styled.RightContent>
    </Styled.Header>
  );
}
