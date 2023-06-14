export function useCentsToReal(cents: number) {
  const reais = cents / 100;
  return reais.toFixed(2).replace('.', ',');
}
