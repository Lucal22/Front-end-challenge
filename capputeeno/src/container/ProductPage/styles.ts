import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ProductDetails = styled.div`
  background-color: ${theme.background.page};
  min-height: 100vh;
`;

export const Back = styled.button`
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

export const ProductArea = styled.div`
  @media (min-width: 1212px) {
    padding-top: 4.4rem;
    display: flex;
    gap: 3.2rem;
  }
`;

export const ProductImage = styled.figure`
  padding-top: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  img {
    width: 100%;
  }
  @media (min-width: 1212px) {
    width: 64rem;
    height: 58rem;
    padding-top: 0;

    img {
      width: 64rem;
      height: 58rem;
      border-radius: 4px;
    }
  }
`;

export const ProductInfos = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: inherit;
  font-style: normal;
  color: ${theme.colors.products};

  h1 {
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 150%;
  }
  span:nth-child(1) {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
  }
  span:nth-child(3) {
    font-weight: 600;
    font-size: 2rem;
    color: ${theme.colors.black};
    line-height: 150%;
  }
  p:nth-child(4) {
    padding-top: 2.4rem;
    padding-bottom: 5.8rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 150%;
  }
  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 150%;
    color: ${theme.colors.gray};
    padding-bottom: 0.8rem;
  }
  p:nth-child(6) {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 150%;
    padding-bottom: 6rem;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CartAdd = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 43rem;
  height: 4.4rem;
  border-radius: 0.4rem;
  background-color: ${theme.background.blue};
  border: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${theme.colors.light};
  svg {
    color: ${theme.colors.light};
  }
`;
