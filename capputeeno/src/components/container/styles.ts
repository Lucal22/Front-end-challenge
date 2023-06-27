import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${theme.background.page};
  min-height: 100vh;
  padding: 3.4rem 2rem;
  @media (min-width: 1212px) {
    padding: 3.4rem 16rem;
  }
`;
