import Link from 'next/link';
import { candidatosMock, alertasMock } from '@/data/mockCandidatos';
import { formatNumber, formatPercentage, getCorPorSeveridade } from '@/lib/utils';
import { BarChart3, Users, TrendingUp, AlertTriangle, Instagram, Facebook, Twitter } from 'lucide-react';
import MapaBrasilReal from '@/components/MapaBrasilReal';
import Header from '@/components/Header';

export default function Home() {
  const totalCandidatos = candidatosMock.length;
  const totalSeguidores = candidatosMock.reduce((acc, c) => {
    const instagramSeguidores = c.redesSociais.instagram?.seguidores || 0;
    const facebookSeguidores = c.redesSociais.facebook?.seguidores || 0;
    const twitterSeguidores = c.redesSociais.twitter?.seguidores || 0;
    return acc + instagramSeguidores + facebookSeguidores + twitterSeguidores;
  }, 0);

  const alertasNaoLidos = alertasMock.filter(a => !a.lido).length;

  return (
    <div className="min-h-screen bg-white">
      <Header alertasNaoLidos={alertasNaoLidos} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-missao p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Candidatos</p>
                <p className="text-3xl font-bold text-missao-black">{totalCandidatos}</p>
              </div>
              <Users className="w-12 h-12 text-missao-blue" />
            </div>
          </div>

          <div className="card-missao p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Seguidores</p>
                <p className="text-3xl font-bold text-missao-black">{formatNumber(totalSeguidores)}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-missao-yellow" />
            </div>
          </div>

          <div className="card-missao p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Engajamento Médio</p>
                <p className="text-3xl font-bold text-missao-black">7.2%</p>
              </div>
              <BarChart3 className="w-12 h-12 text-missao-blue" />
            </div>
          </div>

          <div className="card-missao p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alertas Ativos</p>
                <p className="text-3xl font-bold text-missao-black">{alertasNaoLidos}</p>
              </div>
              <AlertTriangle className="w-12 h-12 text-missao-yellow" />
            </div>
          </div>
        </div>

        {/* Mapa do Brasil */}
        <div className="mb-8">
          <MapaBrasilReal candidatos={candidatosMock} />
        </div>

        {/* Candidatos Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-missao-black mb-6">Candidatos Monitorados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatosMock.map((candidato) => {
              const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];
              const totalSeguidoresRedes =
                (candidato.redesSociais.instagram?.seguidores || 0) +
                (candidato.redesSociais.facebook?.seguidores || 0) +
                (candidato.redesSociais.twitter?.seguidores || 0) +
                (candidato.redesSociais.tiktok?.seguidores || 0);

              return (
                <Link
                  key={candidato.id}
                  href={`/candidatos/${candidato.id}`}
                  className="card-missao p-6 hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-missao-yellow to-missao-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                      {candidato.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-missao-black">{candidato.nome}</h3>
                      <p className="text-sm text-gray-600">{candidato.partido} - {candidato.cargo}</p>
                      <p className="text-xs text-gray-500">{candidato.municipio}/{candidato.estado}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Intenção de Voto (IBOPE)</span>
                      <span className="font-semibold text-missao-blue">
                        {formatPercentage(ultimaPesquisa.intencaoVoto)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Seguidores</span>
                      <span className="font-semibold text-missao-black">
                        {formatNumber(totalSeguidoresRedes)}
                      </span>
                    </div>

                    <div className="pt-3 border-t flex gap-4 text-xs text-gray-600">
                      {candidato.redesSociais.instagram && (
                        <div className="flex items-center gap-1">
                          <Instagram className="w-4 h-4" />
                          <span>{formatNumber(candidato.redesSociais.instagram.seguidores)}</span>
                        </div>
                      )}
                      {candidato.redesSociais.facebook && (
                        <div className="flex items-center gap-1">
                          <Facebook className="w-4 h-4" />
                          <span>{formatNumber(candidato.redesSociais.facebook.seguidores)}</span>
                        </div>
                      )}
                      {candidato.redesSociais.twitter && (
                        <div className="flex items-center gap-1">
                          <Twitter className="w-4 h-4" />
                          <span>{formatNumber(candidato.redesSociais.twitter.seguidores)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Alertas Recentes */}
        <div>
          <h2 className="text-3xl font-display font-bold text-missao-black mb-6">Alertas Recentes</h2>
          <div className="card-missao overflow-hidden">
            {alertasMock.slice(0, 5).map((alerta) => {
              const candidato = candidatosMock.find(c => c.id === alerta.candidatoId);
              return (
                <div
                  key={alerta.id}
                  className={`p-4 border-b last:border-b-0 transition-colors ${
                    !alerta.lido ? 'bg-yellow-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: getCorPorSeveridade(alerta.severidade) }}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-missao-black">{alerta.titulo}</h3>
                        <span className="text-xs text-gray-500">{alerta.data}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{alerta.descricao}</p>
                      <div className="flex items-center gap-2 text-xs flex-wrap">
                        <span className="px-3 py-1 bg-missao-yellow text-black font-semibold rounded-full">
                          {candidato?.nome}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-white font-semibold"
                          style={{ backgroundColor: getCorPorSeveridade(alerta.severidade) }}
                        >
                          {alerta.severidade}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 font-medium rounded-full">
                          {alerta.tipo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
