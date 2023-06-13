import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: inherit;
  justify-content: space-between;
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: ${theme.colors.gray};
`;
