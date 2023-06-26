import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export type PaginationProps = {
  isClicked: boolean;
};

export const PageButton = styled.button<PaginationProps>`
  ${({ isClicked }) => css`
    background: ${isClicked
      ? theme.background.white
      : theme.background.pageButton};
    border: ${isClicked ? `1px solid ${theme.colors.orange}` : 'none'};
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    text-align: center;
    font-size: 1.6rem;
    font-family: inherit;
    line-height: 150%;
    text-transform: uppercase;
    color: ${isClicked ? theme.colors.orange : theme.colors.products};
    cursor: pointer;
  `}
`;
