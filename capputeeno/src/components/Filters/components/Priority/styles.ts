import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface PriorityStyleProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  font-size: 1.4rem;
  color: ${theme.colors.gray};
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
  gap: 0.8rem;
  align-items: center;
  font-family: inherit;
  font-size: 1.4rem;
  color: ${theme.colors.gray};
`;

export const DropMenu = styled.ul<PriorityStyleProps>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    cursor: pointer;
    position: absolute;
    top: 100%;
    right: 0;
    width: 20rem;
    padding: 1.2rem 1.6rem;
    background-color: ${theme.background.white};
    line-height: 22px;
    list-style: none;
    z-index: 1;
  `}
`;
