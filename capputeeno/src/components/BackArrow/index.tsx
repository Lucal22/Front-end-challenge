import React from 'react';
import * as Styled from './styles';
import { ArrowBack } from '../Icons';
import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();

  return (
    <Styled.Back onClick={() => router.push('/')}>
      <ArrowBack />
      <span>Voltar</span>
    </Styled.Back>
  );
}
