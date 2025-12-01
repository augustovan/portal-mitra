// Candidatos do Partido Missão e seus adversários diretos por estado

export interface CandidatoEstadual {
  estado: string;
  siglaEstado: string;
  cargo: 'Governador' | 'Senador';
  candidatoMissao: {
    nome: string;
    partido: string;
    numeroPartido: string;
    foto: string;
    intencaoVoto: number;
    posicao: number;
  };
  adversarioDireto: {
    nome: string;
    partido: string;
    numeroPartido: string;
    foto: string;
    intencaoVoto: number;
    posicao: number;
  };
  ultimaPesquisa: {
    instituto: string;
    data: string;
    margem: number;
    amostra: number;
  };
}

export const candidatosPorEstado: CandidatoEstadual[] = [
  // São Paulo - Governador
  {
    estado: 'São Paulo',
    siglaEstado: 'SP',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Kim Kataguiri',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/kim-kataguiri.jpg',
      intencaoVoto: 32.5,
      posicao: 1
    },
    adversarioDireto: {
      nome: 'Fernando Haddad',
      partido: 'PT',
      numeroPartido: '13',
      foto: '/candidatos/haddad.jpg',
      intencaoVoto: 28.3,
      posicao: 2
    },
    ultimaPesquisa: {
      instituto: 'IBOPE',
      data: '2024-11-25',
      margem: 2.5,
      amostra: 2000
    }
  },
  // São Paulo - Senador
  {
    estado: 'São Paulo',
    siglaEstado: 'SP',
    cargo: 'Senador',
    candidatoMissao: {
      nome: 'Amanda Vetorazzo',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/amanda-vetorazzo.jpg',
      intencaoVoto: 29.8,
      posicao: 1
    },
    adversarioDireto: {
      nome: 'Márcio França',
      partido: 'PSB',
      numeroPartido: '40',
      foto: '/candidatos/marcio-franca.jpg',
      intencaoVoto: 26.1,
      posicao: 2
    },
    ultimaPesquisa: {
      instituto: 'IBOPE',
      data: '2024-11-25',
      margem: 2.5,
      amostra: 2000
    }
  },
  // Rio de Janeiro - Governador
  {
    estado: 'Rio de Janeiro',
    siglaEstado: 'RJ',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Rafa Luz',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/rafa-luz.jpg',
      intencaoVoto: 24.7,
      posicao: 2
    },
    adversarioDireto: {
      nome: 'Eduardo Paes',
      partido: 'PSD',
      numeroPartido: '55',
      foto: '/candidatos/eduardo-paes.jpg',
      intencaoVoto: 31.2,
      posicao: 1
    },
    ultimaPesquisa: {
      instituto: 'Datafolha',
      data: '2024-11-23',
      margem: 3.0,
      amostra: 1800
    }
  },
  // Paraná - Governador
  {
    estado: 'Paraná',
    siglaEstado: 'PR',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Luis França',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/luis-franca.jpg',
      intencaoVoto: 27.3,
      posicao: 2
    },
    adversarioDireto: {
      nome: 'Ratinho Jr.',
      partido: 'PSD',
      numeroPartido: '55',
      foto: '/candidatos/ratinho-jr.jpg',
      intencaoVoto: 35.8,
      posicao: 1
    },
    ultimaPesquisa: {
      instituto: 'Paraná Pesquisas',
      data: '2024-11-24',
      margem: 2.8,
      amostra: 1500
    }
  },
  // Paraná - Senador
  {
    estado: 'Paraná',
    siglaEstado: 'PR',
    cargo: 'Senador',
    candidatoMissao: {
      nome: 'Will Balada',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/will-balada.jpg',
      intencaoVoto: 30.1,
      posicao: 1
    },
    adversarioDireto: {
      nome: 'Álvaro Dias',
      partido: 'PODE',
      numeroPartido: '19',
      foto: '/candidatos/alvaro-dias.jpg',
      intencaoVoto: 25.4,
      posicao: 2
    },
    ultimaPesquisa: {
      instituto: 'Paraná Pesquisas',
      data: '2024-11-24',
      margem: 2.8,
      amostra: 1500
    }
  },
  // Rio Grande do Sul - Governador
  {
    estado: 'Rio Grande do Sul',
    siglaEstado: 'RS',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Jota',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/jota.jpg',
      intencaoVoto: 26.9,
      posicao: 2
    },
    adversarioDireto: {
      nome: 'Eduardo Leite',
      partido: 'PSDB',
      numeroPartido: '45',
      foto: '/candidatos/eduardo-leite.jpg',
      intencaoVoto: 33.5,
      posicao: 1
    },
    ultimaPesquisa: {
      instituto: 'Real Time Big Data',
      data: '2024-11-22',
      margem: 3.2,
      amostra: 1600
    }
  },
  // Rio Grande do Norte - Governador
  {
    estado: 'Rio Grande do Norte',
    siglaEstado: 'RN',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Matheus Faustino',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/matheus-faustino.jpg',
      intencaoVoto: 28.6,
      posicao: 1
    },
    adversarioDireto: {
      nome: 'Fátima Bezerra',
      partido: 'PT',
      numeroPartido: '13',
      foto: '/candidatos/fatima-bezerra.jpg',
      intencaoVoto: 25.2,
      posicao: 2
    },
    ultimaPesquisa: {
      instituto: 'Instituto Inteligência',
      data: '2024-11-26',
      margem: 3.5,
      amostra: 1200
    }
  },
  // Bahia - Governador
  {
    estado: 'Bahia',
    siglaEstado: 'BA',
    cargo: 'Governador',
    candidatoMissao: {
      nome: 'Quercia',
      partido: 'MISSÃO',
      numeroPartido: '30',
      foto: '/candidatos/quercia.jpg',
      intencaoVoto: 23.4,
      posicao: 2
    },
    adversarioDireto: {
      nome: 'Jerônimo Rodrigues',
      partido: 'PT',
      numeroPartido: '13',
      foto: '/candidatos/jeronimo-rodrigues.jpg',
      intencaoVoto: 30.7,
      posicao: 1
    },
    ultimaPesquisa: {
      instituto: 'Quaest',
      data: '2024-11-21',
      margem: 3.0,
      amostra: 1700
    }
  }
];
