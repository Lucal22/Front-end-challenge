import React from 'react';
import * as Styled from '../../styles';
import { useFilter } from '@/hooks/useFilter';

export type PageButtonProps = {
  number: number;
};

export default function PageButton({ number }: PageButtonProps) {
  const { page, setPage } = useFilter();

  function handlePageChange() {
    setPage(number - 1);
  }

  return (
    <Styled.PageButton
      onClick={handlePageChange}
      isClicked={page === number - 1}
    >
      {number}
    </Styled.PageButton>
  );
}
