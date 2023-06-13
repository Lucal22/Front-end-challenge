import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Card = styled.a`
  height: 37.8rem;
  width: 25.6rem;
  margin-bottom: 2.4rem;

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  font-style: inherit;
  font-weight: 300;
  font-size: 1.6rem;
  color: ${theme.colors.products};
  background-color: ${theme.background.white};
  padding: 0.8rem 1.2rem;

  p:nth-child(2) {
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
