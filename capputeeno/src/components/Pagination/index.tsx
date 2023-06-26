import React from 'react';
import * as Styled from './styles';
import useProductCounter from '@/hooks/useProductCounter';
import PageButton from './components/PageButton';

export default function Pagination() {
  const { data } = useProductCounter();
  if (data) {
    const pages = Number((data / 12).toFixed(0));
    const numberOfPages = Array.from({ length: Number(pages) }, (_, index) => (
      <PageButton key={index} number={index + 1} />
    ));

    return <Styled.Container>{numberOfPages}</Styled.Container>;
  }
}
