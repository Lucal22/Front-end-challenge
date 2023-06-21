import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 3.1rem;
  border-radius: 0.8rem;
  background-color: ${theme.background.white};
  font-family: inherit;
  height: 21.1rem;
  margin-bottom: 1.6rem;
  p {
    padding: 0;
  }
`;

export const Img = styled.div`
  img {
    width: 25.6rem;
    height: 21.1rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
`;

export const Informations = styled.div`
  position: relative;
  padding: 1.6rem 1.6rem 2.4rem 0;

  font-weight: 300;
  line-height: 150%;
  color: ${theme.colors.products};

  h2 {
    font-size: 2rem;
    font-weight: 300;
    padding-bottom: 1.2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const Trash = styled.button`
  position: absolute;
  right: 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ProductQtd = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2.4rem;
  display: flex;
  justify-content: space-between;
  padding-right: 1.6rem;
  p {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 150%;
  }
`;
