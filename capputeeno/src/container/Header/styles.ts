import styled from 'styled-components';
import { Saira, Saira_Stencil_One } from 'next/font/google';
import { theme } from '@/styles/theme';

export const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

export const saira = Saira({
  weight: ['400'],
  subsets: ['latin'],
});

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 2rem;
  gap: 1rem;
  @media (min-width: 1212px) {
    padding: 1.9rem 16rem;
  }
`;

export const Logo = styled.div`
  h1 {
    display: none;
    font-size: 2rem;
    color: ${theme.colors.title};
  }
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.title};
  }

  @media (min-width: 768px) {
    h1 {
      display: block;
      font-size: 4rem;
      line-height: 6rem;
    }
    svg {
      display: none;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
`;

export const Form = styled.form`
  position: relative;
`;

export const Search = styled.input`
  width: 24rem;
  background-color: ${theme.background.search};
  padding: 1rem 4.5rem 1rem 1.6rem;
  color: ${theme.colors.gray};
  border: none;
  border-radius: 0.8rem;
  font-family: inherit;
  font-size: 1.4rem;
  @media (min-width: 480px) {
    width: 35.2rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 0.9rem;
  right: 1.6rem;
  cursor: pointer;
`;

export const Cart = styled.div`
  position: relative;
`;

export const Counter = styled.div`
  position: absolute;
  top: 1.1rem;
  left: 1.6rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: ${theme.background.red};
  text-align: center;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.white};
`;
