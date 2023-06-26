import React from 'react';
import * as Styled from '../../styles';

export type PageButtonProps = {
  number: number;
};

export default function PageButton({ number }: PageButtonProps) {
  return <Styled.PageButton isClicked={false}>{number}</Styled.PageButton>;
}
