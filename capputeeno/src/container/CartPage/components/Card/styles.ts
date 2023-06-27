import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 3.1rem;
  border-radius: 0.8rem;
  background-color: ${theme.background.white};
  font-family: inherit;
  max-height: 21.1rem;
  margin-bottom: 1.6rem;
  p {
    padding: 0;
  }
`;

export const Img = styled.div`
  img {
    width: 12.8rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    @media (min-width: 768px) {
      width: 25.6rem;
      height: 21.1rem;
    }
  }
`;

export const Informations = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1.6rem 1.6rem 2.4rem 0;
  font-weight: 300;
  line-height: 150%;
  color: ${theme.colors.products};

  h2 {
    font-size: 1.4rem;
    font-weight: 300;
    padding-bottom: 1.2rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    display: none;
    font-size: 1.2rem;
    @media (min-width: 768px) {
      display: block;
      padding-bottom: 2.5rem;
    }
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 150%;
    text-align: end;
    padding: 0;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
`;

export const SelectQtd = styled.select`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 6.5rem;
  height: 4rem;
  padding: 0.8rem 0.4rem 0.8rem 1.2rem;
  background: ${theme.background.buttonQtd};
  border-radius: 0.8rem;
  border: 0.1rem solid ${theme.colors.borderQtd};
`;
