import React from 'react';
import * as Styled from '../../styles';
import { ArrowLeft, ArrowRight } from '@/components/Icons';
import { useFilter } from '@/hooks/useFilter';
import useProductCounter from '@/hooks/useProductCounter';

export default function PageArrows() {
  const { page, setPage } = useFilter();
  const { data } = useProductCounter();

  if (data) {
    return (
      <>
        <Styled.PageButton
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          isClicked={false}
        >
          <ArrowLeft />
        </Styled.PageButton>
        <Styled.PageButton
          onClick={() => setPage(page + 1)}
          disabled={page === Number((data / 12 - 1).toFixed(0))}
          isClicked={false}
        >
          <ArrowRight />
        </Styled.PageButton>
      </>
    );
  }
}
