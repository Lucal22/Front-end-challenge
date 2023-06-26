import React from 'react';
import * as Styled from '../../styles';
import { ArrowLeft, ArrowRight } from '@/components/Icons';

export default function PageArrows() {
  return (
    <>
      <Styled.PageButton isClicked={false}>
        <ArrowLeft />
      </Styled.PageButton>
      <Styled.PageButton isClicked={false}>
        <ArrowRight />
      </Styled.PageButton>
    </>
  );
}
