// Mock de notícias recentes dos candidatos

export interface Noticia {
  id: string;
  candidatoId: string;
  titulo: string;
  resumo: string;
  fonte: string;
  dataPublicacao: string;
  url: string;
  categoria: 'politica' | 'redes-sociais' | 'pesquisa' | 'evento' | 'imprensa';
  destaque: boolean;
}

export const noticiasMock: Noticia[] = [
  // Kim Kataguiri
  {
    id: 'not-001',
    candidatoId: 'kim-kataguiri',
    titulo: 'Kim Kataguiri lidera pesquisa para governo de SP com 32,5%',
    resumo: 'Última pesquisa IBOPE mostra deputado do Partido Missão à frente na corrida eleitoral paulista, com vantagem de 4 pontos sobre adversário.',
    fonte: 'Portal G1',
    dataPublicacao: '2024-11-25',
    url: '#',
    categoria: 'pesquisa',
    destaque: true
  },
  {
    id: 'not-002',
    candidatoId: 'kim-kataguiri',
    titulo: 'Crescimento nas redes: Kim ultrapassa 850 mil seguidores no Instagram',
    resumo: 'Deputado registra crescimento expressivo de 15% no último mês, consolidando presença digital como principal ferramenta de campanha.',
    fonte: 'Folha de S.Paulo',
    dataPublicacao: '2024-11-23',
    url: '#',
    categoria: 'redes-sociais',
    destaque: false
  },
  {
    id: 'not-003',
    candidatoId: 'kim-kataguiri',
    titulo: 'Kim Kataguiri apresenta plano de governo focado em educação e tecnologia',
    resumo: 'Candidato divulga propostas para modernização do ensino público e incentivo ao empreendedorismo digital em São Paulo.',
    fonte: 'O Estado de S.Paulo',
    dataPublicacao: '2024-11-20',
    url: '#',
    categoria: 'politica',
    destaque: false
  },
  {
    id: 'not-004',
    candidatoId: 'kim-kataguiri',
    titulo: 'MBL e Partido Missão ampliam apoio a Kim Kataguiri em SP',
    resumo: 'Movimento Brasil Livre mobiliza militância digital para impulsionar campanha do deputado ao governo paulista.',
    fonte: 'UOL Notícias',
    dataPublicacao: '2024-11-18',
    url: '#',
    categoria: 'politica',
    destaque: false
  },
  {
    id: 'not-005',
    candidatoId: 'kim-kataguiri',
    titulo: 'Entrevista exclusiva: "São Paulo precisa de gestão moderna", afirma Kim',
    resumo: 'Em entrevista ao Roda Viva, candidato defende reformas estruturais e critica gestões anteriores do estado.',
    fonte: 'TV Cultura',
    dataPublicacao: '2024-11-15',
    url: '#',
    categoria: 'imprensa',
    destaque: true
  },
  {
    id: 'not-006',
    candidatoId: 'kim-kataguiri',
    titulo: 'Kim Kataguiri participa de debate sobre segurança pública',
    resumo: 'Candidato propõe integração entre polícias e investimento em inteligência para combater criminalidade.',
    fonte: 'CNN Brasil',
    dataPublicacao: '2024-11-12',
    url: '#',
    categoria: 'evento',
    destaque: false
  }
];

export function getNoticiasByCandidato(candidatoId: string): Noticia[] {
  return noticiasMock.filter(noticia => noticia.candidatoId === candidatoId);
}

export function getNoticiasDestaque(candidatoId: string): Noticia[] {
  return noticiasMock.filter(noticia =>
    noticia.candidatoId === candidatoId && noticia.destaque
  );
}
