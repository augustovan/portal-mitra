'use client';

import { candidatosPorEstado } from '@/data/candidatosPorEstado';
import { formatPercentage } from '@/lib/utils';
import { ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';
import Header from '@/components/Header';

export default function CandidatosPorEstadoPage() {
  // Agrupar candidatos por estado
  const candidatosPorEstadoAgrupado = candidatosPorEstado.reduce((acc, candidato) => {
    if (!acc[candidato.siglaEstado]) {
      acc[candidato.siglaEstado] = {
        estado: candidato.estado,
        sigla: candidato.siglaEstado,
        candidatos: []
      };
    }
    acc[candidato.siglaEstado].candidatos.push(candidato);
    return acc;
  }, {} as Record<string, any>);

  const estados = Object.values(candidatosPorEstadoAgrupado);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-missao-black mb-2">
            CANDIDATOS DO PARTIDO MISSÃO
          </h2>
          <p className="text-gray-600">
            Acompanhe o desempenho dos nossos candidatos contra os adversários diretos
          </p>
        </div>

        {/* Estados Grid */}
        <div className="space-y-8">
          {estados.map((estado) => (
            <div key={estado.sigla} className="card-missao p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-missao-yellow rounded-missao flex items-center justify-center">
                  <span className="text-2xl font-bold text-missao-black">
                    {estado.sigla}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-missao-black">
                    {estado.estado}
                  </h3>
                  <p className="text-gray-600">
                    {estado.candidatos.length} {estado.candidatos.length === 1 ? 'candidato' : 'candidatos'}
                  </p>
                </div>
              </div>

              {/* Candidatos do Estado */}
              <div className="space-y-6">
                {estado.candidatos.map((candidato: any, idx: number) => {
                  const missaoNaFrente = candidato.candidatoMissao.posicao === 1;
                  const diferenca = Math.abs(
                    candidato.candidatoMissao.intencaoVoto - candidato.adversarioDireto.intencaoVoto
                  );

                  return (
                    <div key={idx} className="bg-gray-50 rounded-missao p-6">
                      {/* Cargo */}
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-missao-black">
                          {candidato.cargo}
                        </h4>
                        <div className="text-sm text-gray-500">
                          {candidato.ultimaPesquisa.instituto} • {new Date(candidato.ultimaPesquisa.data).toLocaleDateString('pt-BR')}
                        </div>
                      </div>

                      {/* Head-to-Head */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Candidato Missão */}
                        <div className={`p-4 rounded-missao border-4 ${
                          missaoNaFrente ? 'border-missao-yellow bg-yellow-50' : 'border-gray-300 bg-white'
                        }`}>
                          <div className="flex items-start gap-4">
                            <div className="w-20 h-20 bg-missao-yellow rounded-missao flex items-center justify-center flex-shrink-0">
                              <span className="text-3xl font-bold text-missao-black">
                                {candidato.candidatoMissao.numeroPartido}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xl font-bold text-missao-black">
                                  {candidato.candidatoMissao.nome}
                                </h5>
                                {missaoNaFrente && (
                                  <span className="bg-missao-yellow text-missao-black text-xs font-bold px-2 py-1 rounded">
                                    1º LUGAR
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {candidato.candidatoMissao.partido}
                              </p>

                              {/* Percentual */}
                              <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-missao-black">
                                  {formatPercentage(candidato.candidatoMissao.intencaoVoto)}
                                </span>
                                {missaoNaFrente && (
                                  <div className="flex items-center gap-1 text-green-600 mb-2">
                                    <TrendingUp size={20} />
                                    <span className="text-sm font-bold">
                                      +{diferenca.toFixed(1)}pp
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* VS Divider */}
                        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
                          <div className="bg-missao-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                            VS
                          </div>
                        </div>

                        {/* Adversário Direto */}
                        <div className={`p-4 rounded-missao border-4 ${
                          !missaoNaFrente ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                        }`}>
                          <div className="flex items-start gap-4">
                            <div className="w-20 h-20 bg-gray-300 rounded-missao flex items-center justify-center flex-shrink-0">
                              <span className="text-3xl font-bold text-gray-700">
                                {candidato.adversarioDireto.numeroPartido}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="text-xl font-bold text-gray-900">
                                  {candidato.adversarioDireto.nome}
                                </h5>
                                {!missaoNaFrente && (
                                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    1º LUGAR
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {candidato.adversarioDireto.partido}
                              </p>

                              {/* Percentual */}
                              <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-gray-900">
                                  {formatPercentage(candidato.adversarioDireto.intencaoVoto)}
                                </span>
                                {!missaoNaFrente && (
                                  <div className="flex items-center gap-1 text-red-600 mb-2">
                                    <TrendingUp size={20} />
                                    <span className="text-sm font-bold">
                                      +{diferenca.toFixed(1)}pp
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Informações da Pesquisa */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div>
                            <span className="font-semibold">Margem de erro:</span> ±{candidato.ultimaPesquisa.margem}pp
                          </div>
                          <div>
                            <span className="font-semibold">Amostra:</span> {candidato.ultimaPesquisa.amostra.toLocaleString('pt-BR')} entrevistados
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legenda */}
        <div className="mt-12 card-missao p-6">
          <h3 className="text-xl font-bold text-missao-black mb-4">ℹ️ Informações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Borda Amarela:</span> Candidato do Partido Missão em 1º lugar
            </div>
            <div>
              <span className="font-semibold">Borda Vermelha:</span> Adversário direto em 1º lugar
            </div>
            <div>
              <span className="font-semibold">pp:</span> Pontos percentuais de diferença
            </div>
            <div>
              <span className="font-semibold">VS:</span> Disputa entre 1º e 2º colocados
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
