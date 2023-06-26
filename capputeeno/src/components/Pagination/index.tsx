import React from 'react';
import * as Styled from './styles';
import useProductCounter from '@/hooks/useProductCounter';

export default function Pagination() {
  const { data } = useProductCounter();
  if (data) {
    const pages = (data / 12).toFixed(0);

    return <Styled.Container></Styled.Container>;
  }
}
