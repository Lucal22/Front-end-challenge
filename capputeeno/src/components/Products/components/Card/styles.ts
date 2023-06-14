import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Card = styled.a`
  height: 100%;
  width: 25.6rem;

  img {
    width: 100%;
    height: 30rem;
  }
`;

export const Description = styled.div`
  font-style: inherit;
  font-weight: 300;
  font-size: 1.6rem;
  color: ${theme.colors.products};
  background-color: ${theme.background.white};
  padding: 0.8rem 1.2rem;
  line-height: 150%;

  p:nth-child(1) {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${theme.colors.border};
  }

  p:nth-child(2) {
    padding-top: 0.8rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: ${theme.colors.black};
  }
`;
