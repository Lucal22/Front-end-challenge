import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export type PaginationProps = {
  isClicked: boolean;
};

export const Container = styled.div`
  padding-top: 2.4rem;
  gap: 0.8rem;
  display: flex;
  justify-content: end;
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const PageArrows = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const PageButton = styled.button<PaginationProps>`
  ${({ isClicked }) => css`
    background: ${isClicked
      ? theme.background.white
      : theme.background.pageButton};
    border: ${isClicked ? `1px solid ${theme.colors.orange}` : 'none'};
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    text-align: center;
    font-size: 1.6rem;
    font-family: inherit;
    line-height: 150%;
    text-transform: uppercase;
    color: ${isClicked ? theme.colors.orange : theme.colors.products};
  `}
`;
