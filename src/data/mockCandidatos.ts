import { Candidato, Alerta } from '@/types';

// Dados mocados de candidatos para demonstração
export const candidatosMock: Candidato[] = [
  {
    id: '1',
    nome: 'João Silva',
    nomeCompleto: 'João da Silva Oliveira',
    partido: 'PT',
    numeroPartido: '13',
    cargo: 'Prefeito',
    foto: '/avatars/joao-silva.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '001',
    redesSociais: {
      instagram: {
        handle: '@joaosilvaoficial',
        seguidores: 125000,
        engajamento: 8500,
        curtidas: 45000,
        comentarios: 3200,
        compartilhamentos: 1800,
        alcance: 350000,
        crescimentoSemanal: 3.5,
        taxaEngajamento: 6.8,
        historico: [
          { data: '2024-11-01', valor: 110000 },
          { data: '2024-11-08', valor: 115000 },
          { data: '2024-11-15', valor: 120000 },
          { data: '2024-11-22', valor: 125000 },
        ]
      },
      facebook: {
        handle: 'joaosilvaoficial',
        seguidores: 85000,
        engajamento: 5200,
        curtidas: 28000,
        comentarios: 1900,
        compartilhamentos: 1100,
        alcance: 220000,
        crescimentoSemanal: 2.1,
        taxaEngajamento: 6.1,
        historico: [
          { data: '2024-11-01', valor: 80000 },
          { data: '2024-11-08', valor: 82000 },
          { data: '2024-11-15', valor: 83500 },
          { data: '2024-11-22', valor: 85000 },
        ]
      },
      twitter: {
        handle: '@joaosilva',
        seguidores: 45000,
        engajamento: 3200,
        curtidas: 18000,
        comentarios: 1500,
        compartilhamentos: 900,
        alcance: 120000,
        crescimentoSemanal: 4.2,
        taxaEngajamento: 7.1,
        historico: [
          { data: '2024-11-01', valor: 42000 },
          { data: '2024-11-08', valor: 43000 },
          { data: '2024-11-15', valor: 44000 },
          { data: '2024-11-22', valor: 45000 },
        ]
      },
      tiktok: {
        handle: '@joaosilvasp',
        seguidores: 180000,
        engajamento: 15000,
        curtidas: 95000,
        comentarios: 8500,
        compartilhamentos: 4200,
        alcance: 850000,
        visualizacoes: 2500000,
        crescimentoSemanal: 8.5,
        taxaEngajamento: 8.3,
        historico: [
          { data: '2024-11-01', valor: 155000 },
          { data: '2024-11-08', valor: 165000 },
          { data: '2024-11-15', valor: 172000 },
          { data: '2024-11-22', valor: 180000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      },
      eleicaoAnterior: {
        ano: 2020,
        totalVotos: 245000,
        percentual: 32.5,
        posicao: 2,
        eleito: false,
        votosPorZona: [
          { zona: '001', secao: '0001', votos: 1250, percentual: 45.2, totalEleitores: 2800, latitude: -23.5505, longitude: -46.6333, bairro: 'Centro' },
          { zona: '001', secao: '0002', votos: 980, percentual: 38.1, totalEleitores: 2600, latitude: -23.5489, longitude: -46.6388, bairro: 'República' },
          { zona: '002', secao: '0001', votos: 1580, percentual: 52.3, totalEleitores: 3020, latitude: -23.5629, longitude: -46.6544, bairro: 'Vila Mariana' },
          { zona: '002', secao: '0002', votos: 1120, percentual: 41.5, totalEleitores: 2700, latitude: -23.5678, longitude: -46.6489, bairro: 'Paraíso' },
          { zona: '003', secao: '0001', votos: 890, percentual: 35.6, totalEleitores: 2500, latitude: -23.5334, longitude: -46.6256, bairro: 'Consolação' },
        ]
      }
    },
    pesquisasIbope: [
      { id: '1', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 28.5, rejeicao: 15.2, margem: 3, amostra: 1200 },
      { id: '2', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 30.2, rejeicao: 14.8, margem: 3, amostra: 1200 },
      { id: '3', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 32.8, rejeicao: 13.5, margem: 3, amostra: 1500 },
      { id: '4', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 35.1, rejeicao: 12.9, margem: 2.5, amostra: 1500 },
    ]
  },
  {
    id: '2',
    nome: 'Maria Santos',
    nomeCompleto: 'Maria Santos Ferreira',
    partido: 'PSDB',
    numeroPartido: '45',
    cargo: 'Prefeito',
    foto: '/avatars/maria-santos.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '001',
    redesSociais: {
      instagram: {
        handle: '@mariasantossp',
        seguidores: 95000,
        engajamento: 6800,
        curtidas: 32000,
        comentarios: 2400,
        compartilhamentos: 1200,
        alcance: 280000,
        crescimentoSemanal: 2.8,
        taxaEngajamento: 7.2,
        historico: [
          { data: '2024-11-01', valor: 88000 },
          { data: '2024-11-08', valor: 90500 },
          { data: '2024-11-15', valor: 92800 },
          { data: '2024-11-22', valor: 95000 },
        ]
      },
      facebook: {
        handle: 'mariasantossp',
        seguidores: 110000,
        engajamento: 7200,
        curtidas: 38000,
        comentarios: 2800,
        compartilhamentos: 1500,
        alcance: 310000,
        crescimentoSemanal: 3.2,
        taxaEngajamento: 6.5,
        historico: [
          { data: '2024-11-01', valor: 102000 },
          { data: '2024-11-08', valor: 105000 },
          { data: '2024-11-15', valor: 107500 },
          { data: '2024-11-22', valor: 110000 },
        ]
      },
      twitter: {
        handle: '@mariasantos45',
        seguidores: 52000,
        engajamento: 4100,
        curtidas: 21000,
        comentarios: 1800,
        compartilhamentos: 1100,
        alcance: 145000,
        crescimentoSemanal: 3.8,
        taxaEngajamento: 7.9,
        historico: [
          { data: '2024-11-01', valor: 48000 },
          { data: '2024-11-08', valor: 49500 },
          { data: '2024-11-15', valor: 50800 },
          { data: '2024-11-22', valor: 52000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      },
      eleicaoAnterior: {
        ano: 2020,
        totalVotos: 198000,
        percentual: 26.3,
        posicao: 3,
        eleito: false,
        votosPorZona: [
          { zona: '001', secao: '0001', votos: 980, percentual: 35.0, totalEleitores: 2800, latitude: -23.5505, longitude: -46.6333, bairro: 'Centro' },
          { zona: '001', secao: '0002', votos: 1180, percentual: 45.4, totalEleitores: 2600, latitude: -23.5489, longitude: -46.6388, bairro: 'República' },
          { zona: '002', secao: '0001', votos: 850, percentual: 28.1, totalEleitores: 3020, latitude: -23.5629, longitude: -46.6544, bairro: 'Vila Mariana' },
          { zona: '002', secao: '0002', votos: 1380, percentual: 51.1, totalEleitores: 2700, latitude: -23.5678, longitude: -46.6489, bairro: 'Paraíso' },
          { zona: '003', secao: '0001', votos: 1200, percentual: 48.0, totalEleitores: 2500, latitude: -23.5334, longitude: -46.6256, bairro: 'Consolação' },
        ]
      }
    },
    pesquisasIbope: [
      { id: '5', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 24.2, rejeicao: 18.5, margem: 3, amostra: 1200 },
      { id: '6', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 25.8, rejeicao: 17.9, margem: 3, amostra: 1200 },
      { id: '7', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 27.5, rejeicao: 16.8, margem: 3, amostra: 1500 },
      { id: '8', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 29.3, rejeicao: 15.5, margem: 2.5, amostra: 1500 },
    ]
  },
  {
    id: '3',
    nome: 'Carlos Mendes',
    nomeCompleto: 'Carlos Eduardo Mendes',
    partido: 'PL',
    numeroPartido: '22',
    cargo: 'Prefeito',
    foto: '/avatars/carlos-mendes.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '001',
    redesSociais: {
      instagram: {
        handle: '@carlosmendespl',
        seguidores: 68000,
        engajamento: 4200,
        curtidas: 22000,
        comentarios: 1500,
        compartilhamentos: 800,
        alcance: 185000,
        crescimentoSemanal: 1.8,
        taxaEngajamento: 6.2,
        historico: [
          { data: '2024-11-01', valor: 64000 },
          { data: '2024-11-08', valor: 65500 },
          { data: '2024-11-15', valor: 66800 },
          { data: '2024-11-22', valor: 68000 },
        ]
      },
      facebook: {
        handle: 'carlosmendespl',
        seguidores: 72000,
        engajamento: 3800,
        curtidas: 19000,
        comentarios: 1200,
        compartilhamentos: 700,
        alcance: 165000,
        crescimentoSemanal: 1.5,
        taxaEngajamento: 5.3,
        historico: [
          { data: '2024-11-01', valor: 69000 },
          { data: '2024-11-08', valor: 70000 },
          { data: '2024-11-15', valor: 71000 },
          { data: '2024-11-22', valor: 72000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '9', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 18.5, rejeicao: 22.3, margem: 3, amostra: 1200 },
      { id: '10', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 19.2, rejeicao: 21.8, margem: 3, amostra: 1200 },
      { id: '11', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 20.1, rejeicao: 20.9, margem: 3, amostra: 1500 },
      { id: '12', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 21.5, rejeicao: 19.8, margem: 2.5, amostra: 1500 },
    ]
  },
  {
    id: '4',
    nome: 'Ana Costa',
    nomeCompleto: 'Ana Paula Costa',
    partido: 'PSOL',
    numeroPartido: '50',
    cargo: 'Prefeito',
    foto: '/avatars/ana-costa.jpg',
    municipio: 'Rio de Janeiro',
    estado: 'RJ',
    zonaEleitoral: '005',
    redesSociais: {
      instagram: {
        handle: '@anacostario',
        seguidores: 145000,
        engajamento: 9200,
        curtidas: 52000,
        comentarios: 3800,
        compartilhamentos: 2100,
        alcance: 420000,
        crescimentoSemanal: 4.2,
        taxaEngajamento: 6.3,
        historico: [
          { data: '2024-11-01', valor: 130000 },
          { data: '2024-11-08', valor: 136000 },
          { data: '2024-11-15', valor: 140000 },
          { data: '2024-11-22', valor: 145000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '13', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 22.5, rejeicao: 16.2, margem: 3, amostra: 1200 },
      { id: '14', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 24.8, rejeicao: 15.5, margem: 3, amostra: 1200 },
      { id: '15', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 26.5, rejeicao: 14.8, margem: 3, amostra: 1500 },
      { id: '16', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 28.3, rejeicao: 14.1, margem: 2.5, amostra: 1500 },
    ]
  },
  {
    id: '5',
    nome: 'Pedro Alves',
    nomeCompleto: 'Pedro Henrique Alves',
    partido: 'MDB',
    numeroPartido: '15',
    cargo: 'Prefeito',
    foto: '/avatars/pedro-alves.jpg',
    municipio: 'Belo Horizonte',
    estado: 'MG',
    zonaEleitoral: '012',
    redesSociais: {
      instagram: {
        handle: '@pedroalvesbh',
        seguidores: 78000,
        engajamento: 5200,
        curtidas: 28000,
        comentarios: 2100,
        compartilhamentos: 950,
        alcance: 215000,
        crescimentoSemanal: 2.3,
        taxaEngajamento: 6.7,
        historico: [
          { data: '2024-11-01', valor: 72000 },
          { data: '2024-11-08', valor: 74500 },
          { data: '2024-11-15', valor: 76200 },
          { data: '2024-11-22', valor: 78000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '17', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 19.8, rejeicao: 18.5, margem: 3, amostra: 1000 },
      { id: '18', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 21.2, rejeicao: 17.9, margem: 3, amostra: 1000 },
      { id: '19', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 22.8, rejeicao: 17.2, margem: 3, amostra: 1200 },
      { id: '20', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 24.1, rejeicao: 16.5, margem: 2.5, amostra: 1200 },
    ]
  },
  {
    id: '6',
    nome: 'Juliana Rocha',
    nomeCompleto: 'Juliana Rocha Santos',
    partido: 'PDT',
    numeroPartido: '12',
    cargo: 'Prefeito',
    foto: '/avatars/juliana-rocha.jpg',
    municipio: 'Porto Alegre',
    estado: 'RS',
    zonaEleitoral: '008',
    redesSociais: {
      instagram: {
        handle: '@julianarochapoa',
        seguidores: 92000,
        engajamento: 6500,
        curtidas: 35000,
        comentarios: 2800,
        compartilhamentos: 1400,
        alcance: 265000,
        crescimentoSemanal: 3.1,
        taxaEngajamento: 7.1,
        historico: [
          { data: '2024-11-01', valor: 85000 },
          { data: '2024-11-08', valor: 87800 },
          { data: '2024-11-15', valor: 89900 },
          { data: '2024-11-22', valor: 92000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '21', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 26.2, rejeicao: 14.8, margem: 3, amostra: 900 },
      { id: '22', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 27.5, rejeicao: 14.2, margem: 3, amostra: 900 },
      { id: '23', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 29.1, rejeicao: 13.5, margem: 3, amostra: 1100 },
      { id: '24', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 30.8, rejeicao: 12.9, margem: 2.5, amostra: 1100 },
    ]
  },
  {
    id: '7',
    nome: 'Roberto Dias',
    nomeCompleto: 'Roberto Carlos Dias',
    partido: 'PODE',
    numeroPartido: '20',
    cargo: 'Prefeito',
    foto: '/avatars/roberto-dias.jpg',
    municipio: 'Salvador',
    estado: 'BA',
    zonaEleitoral: '015',
    redesSociais: {
      instagram: {
        handle: '@robertodiasssa',
        seguidores: 105000,
        engajamento: 7100,
        curtidas: 39000,
        comentarios: 3100,
        compartilhamentos: 1650,
        alcance: 295000,
        crescimentoSemanal: 2.9,
        taxaEngajamento: 6.8,
        historico: [
          { data: '2024-11-01', valor: 98000 },
          { data: '2024-11-08', valor: 100800 },
          { data: '2024-11-15', valor: 102900 },
          { data: '2024-11-22', valor: 105000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '25', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 23.5, rejeicao: 17.2, margem: 3, amostra: 1100 },
      { id: '26', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 25.1, rejeicao: 16.5, margem: 3, amostra: 1100 },
      { id: '27', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 26.8, rejeicao: 15.9, margem: 3, amostra: 1300 },
      { id: '28', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 28.5, rejeicao: 15.2, margem: 2.5, amostra: 1300 },
    ]
  },
  {
    id: '8',
    nome: 'Fernanda Lima',
    nomeCompleto: 'Fernanda Lima Souza',
    partido: 'REDE',
    numeroPartido: '18',
    cargo: 'Prefeito',
    foto: '/avatars/fernanda-lima.jpg',
    municipio: 'Recife',
    estado: 'PE',
    zonaEleitoral: '009',
    redesSociais: {
      instagram: {
        handle: '@fernandalimape',
        seguidores: 88000,
        engajamento: 6200,
        curtidas: 32000,
        comentarios: 2600,
        compartilhamentos: 1250,
        alcance: 245000,
        crescimentoSemanal: 3.4,
        taxaEngajamento: 7.0,
        historico: [
          { data: '2024-11-01', valor: 81000 },
          { data: '2024-11-08', valor: 83800 },
          { data: '2024-11-15', valor: 85900 },
          { data: '2024-11-22', valor: 88000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '29', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 21.8, rejeicao: 16.5, margem: 3, amostra: 950 },
      { id: '30', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 23.2, rejeicao: 15.9, margem: 3, amostra: 950 },
      { id: '31', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 24.9, rejeicao: 15.2, margem: 3, amostra: 1150 },
      { id: '32', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 26.5, rejeicao: 14.5, margem: 2.5, amostra: 1150 },
    ]
  },
  {
    id: '9',
    nome: 'Arthur do Val',
    nomeCompleto: 'Arthur Moledo do Val',
    partido: 'NOVO',
    numeroPartido: '30',
    cargo: 'Deputado Estadual',
    foto: '/avatars/arthur-val.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '003',
    redesSociais: {
      instagram: {
        handle: '@arthurdoval',
        seguidores: 850000,
        engajamento: 68000,
        curtidas: 420000,
        comentarios: 28000,
        compartilhamentos: 15000,
        alcance: 2100000,
        crescimentoSemanal: 5.2,
        taxaEngajamento: 8.0,
        historico: [
          { data: '2024-11-01', valor: 780000 },
          { data: '2024-11-08', valor: 805000 },
          { data: '2024-11-15', valor: 825000 },
          { data: '2024-11-22', valor: 850000 },
        ]
      },
      twitter: {
        handle: '@arthurdoval',
        seguidores: 320000,
        engajamento: 25000,
        curtidas: 185000,
        comentarios: 12000,
        compartilhamentos: 8500,
        alcance: 950000,
        crescimentoSemanal: 4.8,
        taxaEngajamento: 7.8,
        historico: [
          { data: '2024-11-01', valor: 295000 },
          { data: '2024-11-08', valor: 305000 },
          { data: '2024-11-15', valor: 312000 },
          { data: '2024-11-22', valor: 320000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      },
      eleicaoAnterior: {
        ano: 2022,
        totalVotos: 125000,
        percentual: 3.8,
        posicao: 12,
        eleito: true,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '33', data: '2024-10-15', instituto: 'Datafolha', intencaoVoto: 8.5, rejeicao: 22.3, margem: 3, amostra: 2000 },
      { id: '34', data: '2024-11-01', instituto: 'Datafolha', intencaoVoto: 9.2, rejeicao: 21.8, margem: 3, amostra: 2000 },
      { id: '35', data: '2024-11-15', instituto: 'Datafolha', intencaoVoto: 10.1, rejeicao: 20.5, margem: 3, amostra: 2500 },
      { id: '36', data: '2024-11-28', instituto: 'Datafolha', intencaoVoto: 11.5, rejeicao: 19.2, margem: 2.5, amostra: 2500 },
    ]
  },
  {
    id: '10',
    nome: 'Kim Kataguiri',
    nomeCompleto: 'Kim Kataguiri',
    partido: 'UNIÃO',
    numeroPartido: '44',
    cargo: 'Deputado Federal',
    foto: '/avatars/kim-kataguiri.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '002',
    redesSociais: {
      instagram: {
        handle: '@kimkataguiri',
        seguidores: 780000,
        engajamento: 62000,
        curtidas: 385000,
        comentarios: 26000,
        compartilhamentos: 13500,
        alcance: 1900000,
        crescimentoSemanal: 4.5,
        taxaEngajamento: 7.9,
        historico: [
          { data: '2024-11-01', valor: 720000 },
          { data: '2024-11-08', valor: 745000 },
          { data: '2024-11-15', valor: 762000 },
          { data: '2024-11-22', valor: 780000 },
        ]
      },
      twitter: {
        handle: '@kim_kataguiri',
        seguidores: 425000,
        engajamento: 32000,
        curtidas: 225000,
        comentarios: 15000,
        compartilhamentos: 9800,
        alcance: 1150000,
        crescimentoSemanal: 5.1,
        taxaEngajamento: 7.5,
        historico: [
          { data: '2024-11-01', valor: 390000 },
          { data: '2024-11-08', valor: 405000 },
          { data: '2024-11-15', valor: 415000 },
          { data: '2024-11-22', valor: 425000 },
        ]
      },
      facebook: {
        handle: 'kimkataguirioficial',
        seguidores: 520000,
        engajamento: 38000,
        curtidas: 295000,
        comentarios: 18000,
        compartilhamentos: 11200,
        alcance: 1450000,
        crescimentoSemanal: 3.8,
        taxaEngajamento: 7.3,
        historico: [
          { data: '2024-11-01', valor: 485000 },
          { data: '2024-11-08', valor: 498000 },
          { data: '2024-11-15', valor: 509000 },
          { data: '2024-11-22', valor: 520000 },
        ]
      },
      tiktok: {
        handle: '@kimkataguiri',
        seguidores: 1200000,
        engajamento: 98000,
        curtidas: 725000,
        comentarios: 45000,
        compartilhamentos: 28000,
        alcance: 5800000,
        visualizacoes: 18500000,
        crescimentoSemanal: 9.2,
        taxaEngajamento: 8.2,
        historico: [
          { data: '2024-11-01', valor: 1050000 },
          { data: '2024-11-08', valor: 1110000 },
          { data: '2024-11-15', valor: 1155000 },
          { data: '2024-11-22', valor: 1200000 },
        ]
      },
      youtube: {
        handle: '@KimKataguiri',
        seguidores: 650000,
        engajamento: 52000,
        curtidas: 420000,
        comentarios: 35000,
        compartilhamentos: 15000,
        alcance: 2850000,
        visualizacoes: 12500000,
        crescimentoSemanal: 4.1,
        taxaEngajamento: 8.0,
        historico: [
          { data: '2024-11-01', valor: 610000 },
          { data: '2024-11-08', valor: 625000 },
          { data: '2024-11-15', valor: 638000 },
          { data: '2024-11-22', valor: 650000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      },
      eleicaoAnterior: {
        ano: 2022,
        totalVotos: 156000,
        percentual: 0.8,
        posicao: 45,
        eleito: true,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '37', data: '2024-10-15', instituto: 'Datafolha', intencaoVoto: 12.5, rejeicao: 18.2, margem: 3, amostra: 2000 },
      { id: '38', data: '2024-11-01', instituto: 'Datafolha', intencaoVoto: 13.8, rejeicao: 17.5, margem: 3, amostra: 2000 },
      { id: '39', data: '2024-11-15', instituto: 'Datafolha', intencaoVoto: 15.2, rejeicao: 16.8, margem: 3, amostra: 2500 },
      { id: '40', data: '2024-11-28', instituto: 'Datafolha', intencaoVoto: 16.5, rejeicao: 15.9, margem: 2.5, amostra: 2500 },
    ],
    financiamento: {
      receitas: {
        doacoesPessoaFisica: 850000,
        doacoesPessoaJuridica: 0,
        fundoEleitoral: 2500000,
        fundoPartidario: 450000,
        recursosProprios: 320000,
        total: 4120000
      },
      despesas: {
        redesSociais: 1200000,
        midiaFisica: 450000,
        midiaTelevisiva: 850000,
        eventos: 380000,
        pessoal: 520000,
        materialCampanha: 280000,
        outros: 195000,
        total: 3875000
      },
      saldo: 245000
    }
  },
  {
    id: '11',
    nome: 'Renan Santos',
    nomeCompleto: 'Renan Santos de Oliveira',
    partido: 'NOVO',
    numeroPartido: '30',
    cargo: 'Vereador',
    foto: '/avatars/renan-santos.jpg',
    municipio: 'Rio de Janeiro',
    estado: 'RJ',
    zonaEleitoral: '008',
    redesSociais: {
      instagram: {
        handle: '@renansantosmbl',
        seguidores: 285000,
        engajamento: 22000,
        curtidas: 145000,
        comentarios: 9500,
        compartilhamentos: 5200,
        alcance: 820000,
        crescimentoSemanal: 6.2,
        taxaEngajamento: 7.7,
        historico: [
          { data: '2024-11-01', valor: 250000 },
          { data: '2024-11-08', valor: 263000 },
          { data: '2024-11-15', valor: 274000 },
          { data: '2024-11-22', valor: 285000 },
        ]
      },
      twitter: {
        handle: '@renan_mbl',
        seguidores: 125000,
        engajamento: 9800,
        curtidas: 68000,
        comentarios: 5200,
        compartilhamentos: 3100,
        alcance: 385000,
        crescimentoSemanal: 5.5,
        taxaEngajamento: 7.8,
        historico: [
          { data: '2024-11-01', valor: 112000 },
          { data: '2024-11-08', valor: 117000 },
          { data: '2024-11-15', valor: 121000 },
          { data: '2024-11-22', valor: 125000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '41', data: '2024-10-15', instituto: 'IBOPE', intencaoVoto: 7.8, rejeicao: 12.5, margem: 3, amostra: 1200 },
      { id: '42', data: '2024-11-01', instituto: 'IBOPE', intencaoVoto: 8.5, rejeicao: 11.8, margem: 3, amostra: 1200 },
      { id: '43', data: '2024-11-15', instituto: 'IBOPE', intencaoVoto: 9.8, rejeicao: 11.2, margem: 3, amostra: 1500 },
      { id: '44', data: '2024-11-28', instituto: 'IBOPE', intencaoVoto: 11.2, rejeicao: 10.5, margem: 2.5, amostra: 1500 },
    ]
  },
  {
    id: '12',
    nome: 'Fernando Holiday',
    nomeCompleto: 'Fernando Holiday de Oliveira',
    partido: 'NOVO',
    numeroPartido: '30',
    cargo: 'Vereador',
    foto: '/avatars/fernando-holiday.jpg',
    municipio: 'São Paulo',
    estado: 'SP',
    zonaEleitoral: '004',
    redesSociais: {
      instagram: {
        handle: '@fernandoholiday',
        seguidores: 420000,
        engajamento: 32000,
        curtidas: 210000,
        comentarios: 14000,
        compartilhamentos: 7500,
        alcance: 1250000,
        crescimentoSemanal: 4.8,
        taxaEngajamento: 7.6,
        historico: [
          { data: '2024-11-01', valor: 385000 },
          { data: '2024-11-08', valor: 398000 },
          { data: '2024-11-15', valor: 409000 },
          { data: '2024-11-22', valor: 420000 },
        ]
      },
      twitter: {
        handle: '@fernandoholiday',
        seguidores: 195000,
        engajamento: 15000,
        curtidas: 105000,
        comentarios: 7200,
        compartilhamentos: 4300,
        alcance: 580000,
        crescimentoSemanal: 4.2,
        taxaEngajamento: 7.7,
        historico: [
          { data: '2024-11-01', valor: 178000 },
          { data: '2024-11-08', valor: 185000 },
          { data: '2024-11-15', valor: 190000 },
          { data: '2024-11-22', valor: 195000 },
        ]
      }
    },
    dadosEleitorais: {
      eleicaoAtual: {
        ano: 2024,
        totalVotos: 0,
        percentual: 0,
        posicao: 0,
        eleito: false,
        votosPorZona: []
      },
      eleicaoAnterior: {
        ano: 2020,
        totalVotos: 48000,
        percentual: 1.2,
        posicao: 8,
        eleito: true,
        votosPorZona: []
      }
    },
    pesquisasIbope: [
      { id: '45', data: '2024-10-15', instituto: 'Datafolha', intencaoVoto: 9.5, rejeicao: 15.8, margem: 3, amostra: 1800 },
      { id: '46', data: '2024-11-01', instituto: 'Datafolha', intencaoVoto: 10.8, rejeicao: 15.2, margem: 3, amostra: 1800 },
      { id: '47', data: '2024-11-15', instituto: 'Datafolha', intencaoVoto: 12.1, rejeicao: 14.5, margem: 3, amostra: 2200 },
      { id: '48', data: '2024-11-28', instituto: 'Datafolha', intencaoVoto: 13.5, rejeicao: 13.8, margem: 2.5, amostra: 2200 },
    ]
  }
];

export const alertasMock: Alerta[] = [
  {
    id: '1',
    candidatoId: '1',
    tipo: 'oportunidade',
    titulo: 'Alto engajamento na Zona Leste',
    descricao: 'O candidato João Silva apresenta 45% mais engajamento digital na Zona Leste em comparação com votação anterior. Oportunidade de conversão.',
    severidade: 'media',
    data: '2024-11-28',
    lido: false
  },
  {
    id: '2',
    candidatoId: '2',
    tipo: 'discrepancia',
    titulo: 'Discrepância entre redes e IBOPE',
    descricao: 'Maria Santos tem crescimento de 8% nas redes sociais mas apenas 3% nas pesquisas IBOPE no último mês.',
    severidade: 'alta',
    data: '2024-11-27',
    lido: false
  },
  {
    id: '3',
    candidatoId: '3',
    tipo: 'baixo-engajamento',
    titulo: 'Baixo engajamento no Centro',
    descricao: 'Carlos Mendes apresenta engajamento 60% inferior na região Centro comparado à média da cidade.',
    severidade: 'media',
    data: '2024-11-26',
    lido: true
  },
  {
    id: '4',
    candidatoId: '1',
    tipo: 'fake-followers',
    titulo: 'Possível presença de seguidores falsos',
    descricao: 'Detectado padrão suspeito: crescimento de 15k seguidores em 24h no Instagram sem campanhas correspondentes.',
    severidade: 'alta',
    data: '2024-11-25',
    lido: false
  }
];
