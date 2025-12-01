// Funções utilitárias para formatação e cálculos

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatPercentage(num: number): string {
  return num.toFixed(1) + '%';
}

export function formatCurrency(num: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(num);
}

export function calcularTaxaConversao(seguidores: number, votos: number): number {
  if (seguidores === 0) return 0;
  return (votos / seguidores) * 100;
}

export function calcularROI(investimento: number, retorno: number): number {
  if (investimento === 0) return 0;
  return ((retorno - investimento) / investimento) * 100;
}

export function calcularCrescimento(valorAtual: number, valorAnterior: number): number {
  if (valorAnterior === 0) return 0;
  return ((valorAtual - valorAnterior) / valorAnterior) * 100;
}

export function getCorPorEngajamento(engajamento: number): string {
  if (engajamento >= 8) return '#22c55e'; // verde
  if (engajamento >= 5) return '#eab308'; // amarelo
  return '#ef4444'; // vermelho
}

export function getCorPorSeveridade(severidade: 'baixa' | 'media' | 'alta'): string {
  switch (severidade) {
    case 'alta': return '#ef4444';
    case 'media': return '#f59e0b';
    case 'baixa': return '#3b82f6';
  }
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
