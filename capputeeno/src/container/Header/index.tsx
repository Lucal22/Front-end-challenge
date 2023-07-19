'use client';

import React, { ChangeEvent } from 'react';
import * as Styled from './styles';

import { Cart, CoffeIcon, Search } from '../../components/Icons';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useFilter } from '@/hooks/useFilter';
import Link from 'next/link';

export default function Header() {
  const { value } = useLocalStorage('cart-items', []);
  const { setSearch, search } = useFilter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <Styled.Header>
      <Styled.Logo>
        <Link href="/" className={Styled.sairaStencil.className}>
          <h1>CAPPUTEENO</h1>
          <CoffeIcon />
        </Link>
      </Styled.Logo>
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
        <Styled.Cart>
          <Link href="/cart">
            <Cart />
            {value.length > 0 && (
              <Styled.Counter>{value.length}</Styled.Counter>
            )}
          </Link>
        </Styled.Cart>
      </Styled.RightContent>
    </Styled.Header>
  );
}
