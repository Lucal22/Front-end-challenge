import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface SelectorStyleProps {
  isClicked: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 4rem;
`;

export const ProductFilter = styled.div<SelectorStyleProps>`
  ${({ isClicked }) => css`
    p {
      cursor: pointer;
      font-weight: ${isClicked ? `600` : `400`};
      font-size: 1.6rem;
      color: ${isClicked ? `${theme.colors.products}` : `${theme.colors.gray}`};
    }
    border-bottom: ${isClicked ? `solid 0.4rem ${theme.colors.orange}` : null};
  `}
`;
