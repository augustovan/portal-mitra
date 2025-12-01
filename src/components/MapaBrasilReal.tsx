'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Candidato } from '@/types';
import { formatNumber } from '@/lib/utils';
import { Users, TrendingUp } from 'lucide-react';

interface MapaBrasilRealProps {
  candidatos: Candidato[];
}

interface RegiaoInfo {
  nome: string;
  estados: string[];
  quantidade: number;
}

export default function MapaBrasilReal({ candidatos }: MapaBrasilRealProps) {
  const [selectedView, setSelectedView] = useState<'politico' | 'geografico'>('politico');

  const regioes: RegiaoInfo[] = [
    { nome: 'Norte', estados: ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'], quantidade: 7 },
    { nome: 'Nordeste', estados: ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'], quantidade: 9 },
    { nome: 'Centro-Oeste', estados: ['DF', 'GO', 'MT', 'MS'], quantidade: 4 },
    { nome: 'Sudeste', estados: ['ES', 'MG', 'RJ', 'SP'], quantidade: 4 },
    { nome: 'Sul', estados: ['PR', 'RS', 'SC'], quantidade: 3 },
  ];

  // Função para pegar os 2 primeiros candidatos de uma região
  const getCandidatosPorRegiao = (estados: string[]) => {
    return candidatos
      .filter(c => estados.includes(c.estado))
      .slice(0, 2);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 to-black rounded-missao p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Mapa do Brasil</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setSelectedView('geografico')}
            className={`px-4 py-2 rounded-missao text-sm font-semibold transition-colors ${
              selectedView === 'geografico'
                ? 'bg-missao-yellow text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Geográfico
          </button>
          <button
            onClick={() => setSelectedView('politico')}
            className={`px-4 py-2 rounded-missao text-sm font-semibold transition-colors ${
              selectedView === 'politico'
                ? 'bg-missao-yellow text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Político
          </button>
        </div>
      </div>

      <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: '600px' }}>
        {selectedView === 'geografico' ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917628.62841034!2d-69.44974267158793!3d-14.235003659900224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1733069437123!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Geográfico do Brasil"
          />
        ) : (
          <div className="w-full h-full overflow-y-auto bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Mapa Político do Brasil</h3>
              <p className="text-gray-600 mb-8 text-center">
                Visualização dos estados brasileiros com dados eleitorais
              </p>

              <div className="space-y-6">
                {regioes.map((regiao) => {
                  const candidatosRegiao = getCandidatosPorRegiao(regiao.estados);

                  return (
                    <div key={regiao.nome} className="bg-white rounded-lg shadow-lg p-6">
                      {/* Header da Região */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-missao-yellow">
                        <div>
                          <h4 className="text-2xl font-bold text-missao-blue">{regiao.nome}</h4>
                          <p className="text-sm text-gray-600">
                            {regiao.quantidade} estados: {regiao.estados.join(', ')}
                          </p>
                        </div>
                        <Link
                          href={`/regiao/${regiao.nome.toLowerCase().replace('-', '')}`}
                          className="px-4 py-2 bg-missao-yellow text-black font-semibold rounded-missao hover:bg-yellow-400 transition-colors text-sm"
                        >
                          Ver Região Completa
                        </Link>
                      </div>

                      {/* Candidatos da Região */}
                      {candidatosRegiao.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {candidatosRegiao.map((candidato) => {
                            const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];
                            const totalSeguidores =
                              (candidato.redesSociais.instagram?.seguidores || 0) +
                              (candidato.redesSociais.facebook?.seguidores || 0) +
                              (candidato.redesSociais.twitter?.seguidores || 0);

                            return (
                              <Link
                                key={candidato.id}
                                href={`/candidatos/${candidato.id}`}
                                className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-missao-yellow hover:shadow-md transition-all"
                              >
                                <div className="w-16 h-16 bg-gradient-to-br from-missao-yellow to-missao-blue rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">
                                  {candidato.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-bold text-gray-900 truncate">{candidato.nome}</h5>
                                  <p className="text-sm text-gray-600">{candidato.partido} - {candidato.cargo}</p>
                                  <p className="text-xs text-gray-500 mb-2">{candidato.municipio}/{candidato.estado}</p>

                                  <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1 text-missao-blue">
                                      <TrendingUp className="w-3 h-3" />
                                      <span className="font-semibold">{ultimaPesquisa.intencaoVoto}%</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                      <Users className="w-3 h-3" />
                                      <span>{formatNumber(totalSeguidores)}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-4">
                          Nenhum candidato monitorado nesta região
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          {selectedView === 'geografico'
            ? 'Mapa interativo fornecido pelo Google Maps'
            : 'Clique em "Ver Região Completa" para ver todos os candidatos da região'
          }
        </span>
      </div>
    </div>
  );
}
