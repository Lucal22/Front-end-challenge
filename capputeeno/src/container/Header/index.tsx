'use client';

import React, { ChangeEvent } from 'react';
import * as Styled from './styles';

import { Cart, Search } from '../../components/Icons';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useFilter } from '@/hooks/useFilter';

export default function Header() {
  const { value } = useLocalStorage('cart-items', []);
  const { setSearch, search } = useFilter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <Styled.Header>
      <div>
        <Styled.Logo href="/" className={Styled.sairaStencil.className}>
          capputeeno
        </Styled.Logo>
      </div>
      <Styled.RightContent>
        <Styled.Form>
          <Styled.Search
            value={search}
            onChange={handleChange}
            placeholder="Procurando por algo específico?"
          />
          <Styled.Button aria-label="Search for item">
            <Search />
          </Styled.Button>
        </Styled.Form>
        <Styled.Cart href="/cart">
          <Cart />
          {value.length > 0 && <Styled.Counter>{value.length}</Styled.Counter>}
        </Styled.Cart>
      </Styled.RightContent>
    </Styled.Header>
  );
}
