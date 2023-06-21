import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Back = styled.button`
  position: absolute;
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 2.2rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.colors.back};
`;
