'use client';

import { Candidato } from '@/types';
import { formatNumber } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface MapaBrasilProps {
  candidatos: Candidato[];
}

interface RegiaoInfo {
  nome: string;
  estados: string[];
  candidatos: Candidato[];
  totalSeguidores: number;
  posicao: { top: string; left: string };
}

export default function MapaBrasil({ candidatos }: MapaBrasilProps) {
  // Agrupar candidatos por região
  const regioes: Record<string, RegiaoInfo> = {
    'Sudeste': {
      nome: 'Sudeste',
      estados: ['SP', 'RJ', 'MG', 'ES'],
      candidatos: [],
      totalSeguidores: 0,
      posicao: { top: '55%', left: '70%' }
    },
    'Sul': {
      nome: 'Sul',
      estados: ['RS', 'SC', 'PR'],
      candidatos: [],
      totalSeguidores: 0,
      posicao: { top: '75%', left: '60%' }
    },
    'Nordeste': {
      nome: 'Nordeste',
      estados: ['BA', 'CE', 'PE', 'MA', 'RN', 'PB', 'SE', 'AL', 'PI'],
      candidatos: [],
      totalSeguidores: 0,
      posicao: { top: '30%', left: '65%' }
    },
    'Norte': {
      nome: 'Norte',
      estados: ['AM', 'PA', 'RO', 'AC', 'RR', 'AP', 'TO'],
      candidatos: [],
      totalSeguidores: 0,
      posicao: { top: '20%', left: '40%' }
    },
    'Centro-Oeste': {
      nome: 'Centro-Oeste',
      estados: ['GO', 'MT', 'MS', 'DF'],
      candidatos: [],
      totalSeguidores: 0,
      posicao: { top: '50%', left: '45%' }
    }
  };

  // Distribuir candidatos por região
  candidatos.forEach(candidato => {
    Object.values(regioes).forEach(regiao => {
      if (regiao.estados.includes(candidato.estado)) {
        regiao.candidatos.push(candidato);
        const seguidores =
          (candidato.redesSociais.instagram?.seguidores || 0) +
          (candidato.redesSociais.facebook?.seguidores || 0) +
          (candidato.redesSociais.twitter?.seguidores || 0) +
          (candidato.redesSociais.tiktok?.seguidores || 0);
        regiao.totalSeguidores += seguidores;
      }
    });
  });

  const maxSeguidores = Math.max(...Object.values(regioes).map(r => r.totalSeguidores));

  const getIntensidadeCor = (totalSeguidores: number) => {
    const intensidade = (totalSeguidores / maxSeguidores);
    if (intensidade >= 0.8) return 'bg-missao-blue';
    if (intensidade >= 0.6) return 'bg-sky-500';
    if (intensidade >= 0.4) return 'bg-missao-yellow';
    if (intensidade >= 0.2) return 'bg-yellow-300';
    return 'bg-yellow-100';
  };

  return (
    <div className="card-missao p-6">
      <h2 className="text-3xl font-display font-bold text-missao-black mb-6">
        Mapa de Calor - Candidatos por Região
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mapa Visual Simplificado */}
        <div className="relative h-[500px] bg-gradient-to-br from-yellow-50 to-blue-50 rounded-missao border-2 border-missao-yellow overflow-hidden">
          {/* Ilustração simplificada do Brasil */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 400 500" className="w-full h-full opacity-10">
              {/* Forma simplificada do Brasil */}
              <path
                d="M200,50 L250,100 L280,150 L300,200 L310,250 L300,300 L280,350 L250,400 L200,450 L150,400 L120,350 L100,300 L90,250 L100,200 L120,150 L150,100 Z"
                fill="#fcbe26"
                stroke="#0099ff"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Marcadores de Região */}
          {Object.values(regioes).map((regiao) => {
            if (regiao.candidatos.length === 0) return null;

            return (
              <div
                key={regiao.nome}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: regiao.posicao.top, left: regiao.posicao.left }}
              >
                <div className="relative group cursor-pointer">
                  {/* Ponto no mapa */}
                  <div
                    className={`w-16 h-16 rounded-full ${getIntensidadeCor(regiao.totalSeguidores)}
                      opacity-80 flex items-center justify-center text-white font-bold shadow-lg
                      hover:scale-110 transition-transform animate-pulse`}
                  >
                    {regiao.candidatos.length}
                  </div>

                  {/* Tooltip ao hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-missao-black text-white text-xs rounded-missao py-2 px-3 whitespace-nowrap shadow-missao">
                      <p className="font-semibold text-missao-yellow">{regiao.nome}</p>
                      <p>{regiao.candidatos.length} candidato(s)</p>
                      <p>{formatNumber(regiao.totalSeguidores)} seguidores</p>
                    </div>
                  </div>

                  {/* Label da região */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <p className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                      {regiao.nome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lista de Regiões */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Distribuição de candidatos e engajamento por região</span>
          </div>

          {Object.values(regioes)
            .filter(r => r.candidatos.length > 0)
            .sort((a, b) => b.totalSeguidores - a.totalSeguidores)
            .map((regiao) => {
              const percentual = (regiao.totalSeguidores / maxSeguidores) * 100;

              return (
                <div key={regiao.nome} className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{regiao.nome}</h3>
                      <p className="text-sm text-gray-600">
                        {regiao.candidatos.length} candidato(s) monitorado(s)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">
                        {formatNumber(regiao.totalSeguidores)}
                      </p>
                      <p className="text-xs text-gray-600">seguidores totais</p>
                    </div>
                  </div>

                  {/* Barra de progresso */}
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full ${getIntensidadeCor(regiao.totalSeguidores)} transition-all`}
                      style={{ width: `${percentual}%` }}
                    />
                  </div>

                  {/* Lista de candidatos da região */}
                  <div className="space-y-2">
                    {regiao.candidatos.map(candidato => {
                      const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];
                      const totalSeguidores =
                        (candidato.redesSociais.instagram?.seguidores || 0) +
                        (candidato.redesSociais.facebook?.seguidores || 0) +
                        (candidato.redesSociais.twitter?.seguidores || 0) +
                        (candidato.redesSociais.tiktok?.seguidores || 0);

                      return (
                        <div key={candidato.id} className="flex items-center justify-between text-sm bg-white rounded-lg p-2 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-missao-yellow to-missao-blue rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                              {candidato.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            <div>
                              <p className="font-semibold text-missao-black">{candidato.nome}</p>
                              <p className="text-xs text-gray-600">
                                {candidato.municipio}/{candidato.estado} - {candidato.partido}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-missao-blue">
                              {formatNumber(totalSeguidores)}
                            </p>
                            <p className="text-xs text-gray-600">
                              {ultimaPesquisa.intencaoVoto.toFixed(1)}% IBOPE
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          {/* Legenda */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-missao border border-missao-yellow">
            <p className="text-xs font-semibold text-missao-black mb-2">Legenda de Intensidade:</p>
            <div className="flex gap-2 items-center text-xs">
              <span className="text-gray-600">Baixo</span>
              <div className="flex gap-1">
                <div className="w-6 h-4 bg-yellow-100 rounded"></div>
                <div className="w-6 h-4 bg-yellow-300 rounded"></div>
                <div className="w-6 h-4 bg-missao-yellow rounded"></div>
                <div className="w-6 h-4 bg-sky-500 rounded"></div>
                <div className="w-6 h-4 bg-missao-blue rounded"></div>
              </div>
              <span className="text-gray-600">Alto</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              * Intensidade baseada no total de seguidores por região
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
