// Tipos principais do domínio Portal Mitra

export interface Candidato {
  id: string;
  nome: string;
  nomeCompleto: string;
  partido: string;
  numeroPartido: string;
  cargo: 'Prefeito' | 'Vereador' | 'Governador' | 'Deputado Estadual' | 'Deputado Federal' | 'Senador' | 'Presidente';
  foto: string;
  municipio: string;
  estado: string;
  zonaEleitoral: string;
  redesSociais: RedesSociais;
  dadosEleitorais: DadosEleitorais;
  pesquisasIbope: PesquisaIbope[];
  financiamento?: FinanciamentoCampanha;
}

export interface RedesSociais {
  instagram?: RedeSocialMetrics;
  facebook?: RedeSocialMetrics;
  twitter?: RedeSocialMetrics;
  tiktok?: RedeSocialMetrics;
  youtube?: RedeSocialMetrics;
}

export interface RedeSocialMetrics {
  handle: string;
  seguidores: number;
  engajamento: number;
  curtidas: number;
  comentarios: number;
  compartilhamentos: number;
  alcance: number;
  visualizacoes?: number;
  crescimentoSemanal: number;
  taxaEngajamento: number;
  historico: HistoricoMetrica[];
}

export interface HistoricoMetrica {
  data: string;
  valor: number;
}

export interface DadosEleitorais {
  eleicaoAtual: ResultadoEleicao;
  eleicaoAnterior?: ResultadoEleicao;
}

export interface ResultadoEleicao {
  ano: number;
  totalVotos: number;
  percentual: number;
  posicao: number;
  eleito: boolean;
  votosPorZona: VotosPorZona[];
  votosPorMunicipio?: VotosPorMunicipio[];
}

export interface VotosPorZona {
  zona: string;
  secao: string;
  votos: number;
  percentual: number;
  totalEleitores: number;
  latitude: number;
  longitude: number;
  bairro?: string;
}

export interface VotosPorMunicipio {
  municipio: string;
  votos: number;
  percentual: number;
  latitude: number;
  longitude: number;
}

export interface PesquisaIbope {
  id: string;
  data: string;
  instituto: string;
  intencaoVoto: number;
  rejeicao: number;
  margem: number;
  amostra: number;
}

export interface EngajamentoPorRegiao {
  regiao: string;
  latitude: number;
  longitude: number;
  engajamento: number;
  seguidores: number;
  alcance: number;
}

export interface ComparacaoMetricas {
  candidatoId: string;
  periodo: string;
  metricas: {
    crescimentoSeguidores: number;
    crescimentoPesquisa: number;
    taxaConversao: number;
    roi: number;
  };
}

export interface HeatmapData {
  latitude: number;
  longitude: number;
  intensity: number;
  tipo: 'engajamento' | 'votos' | 'discrepancia';
  label: string;
  valor: number;
}

export interface DashboardStats {
  totalCandidatos: number;
  totalEngajamento: number;
  taxaConversaoMedia: number;
  alertasAtivos: number;
}

export interface Alerta {
  id: string;
  candidatoId: string;
  tipo: 'discrepancia' | 'baixo-engajamento' | 'fake-followers' | 'oportunidade';
  titulo: string;
  descricao: string;
  severidade: 'baixa' | 'media' | 'alta';
  data: string;
  lido: boolean;
}

export interface FinanciamentoCampanha {
  receitas: {
    doacoesPessoaFisica: number;
    doacoesPessoaJuridica: number;
    fundoEleitoral: number;
    fundoPartidario: number;
    recursosProprios: number;
    total: number;
  };
  despesas: {
    redesSociais: number;
    midiaFisica: number;
    midiaTelevisiva: number;
    eventos: number;
    pessoal: number;
    materialCampanha: number;
    outros: number;
    total: number;
  };
  saldo: number;
}
