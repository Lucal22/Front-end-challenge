import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface SelectorStyleProps {
  isClicked: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const ProductFilter = styled.div<SelectorStyleProps>`
  ${({ isClicked }) => css`
    p {
      cursor: pointer;
      font-weight: ${isClicked ? `600` : `400`};
      font-size: 1.4rem;
      color: ${isClicked ? `${theme.colors.products}` : `${theme.colors.gray}`};
      span {
        display: none;
      }
      @media (min-width: 768px) {
        font-size: 1.6rem;
        span {
        }
      }
    }
    border-bottom: ${isClicked ? `solid 0.4rem ${theme.colors.orange}` : null};
  `}
`;
