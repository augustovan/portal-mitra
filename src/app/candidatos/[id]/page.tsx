'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { candidatosMock } from '@/data/mockCandidatos';
import { noticiasMock, getNoticiasByCandidato } from '@/data/mockNoticias';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Instagram, Facebook, Twitter, TrendingUp, Users, Eye, Youtube, DollarSign, Wallet, TrendingDown, PieChart } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

interface PageProps {
  params: {
    id: string;
  };
}

export default function CandidatoDetalhePage({ params }: PageProps) {
  const router = useRouter();
  const [candidatoId, setCandidatoId] = useState(params.id);
  
  const candidato = candidatosMock.find(c => c.id === candidatoId);
  const noticias = getNoticiasByCandidato(candidatoId);

  if (!candidato) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold">Candidato não encontrado</h1>
        </div>
      </div>
    );
  }

  const handleCandidatoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setCandidatoId(newId);
    router.push(`/candidatos/${newId}`);
  };

  // Dados para gráfico de evolução de seguidores (Instagram)
  const seguidoresData = candidato.redesSociais.instagram?.historico.map(h => ({
    data: new Date(h.data).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }),
    seguidores: h.valor
  })) || [];

  // Dados para gráfico de pesquisas
  const pesquisasData = candidato.pesquisasIbope.map(p => ({
    data: new Date(p.data).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }),
    intencao: p.intencaoVoto,
    rejeicao: p.rejeicao
  }));

  const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];

  const getCategoriaColor = (categoria: string) => {
    const colors: Record<string, string> = {
      'politica': 'bg-blue-100 text-blue-800',
      'redes-sociais': 'bg-purple-100 text-purple-800',
      'pesquisa': 'bg-green-100 text-green-800',
      'evento': 'bg-orange-100 text-orange-800',
      'imprensa': 'bg-red-100 text-red-800'
    };
    return colors[categoria] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Seletor de Candidato */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selecionar Candidato:
          </label>
          <select
            value={candidatoId}
            onChange={handleCandidatoChange}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-missao bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-missao-yellow"
          >
            {candidatosMock.map(c => (
              <option key={c.id} value={c.id}>
                {c.nome} - {c.cargo} ({c.estado})
              </option>
            ))}
          </select>
        </div>

        {/* Header do Candidato */}
        <div className="bg-white rounded-missao shadow-missao p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={candidato.foto}
              alt={candidato.nome}
              className="w-32 h-32 rounded-full object-cover border-4 border-missao-yellow"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="bg-missao-yellow text-black font-bold text-2xl px-4 py-2 rounded-missao">
                  {candidato.numeroPartido}
                </span>
                <h1 className="text-4xl font-display font-bold">{candidato.nome}</h1>
              </div>
              <p className="text-xl text-gray-600 mb-2">
                {candidato.partido} - {candidato.cargo}
              </p>
              <p className="text-gray-500">{candidato.municipio}, {candidato.estado}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 rounded-missao p-4">
                <p className="text-sm text-gray-600 mb-1">Intenção de Voto</p>
                <p className="text-3xl font-bold text-green-600">{ultimaPesquisa.intencaoVoto}%</p>
              </div>
              <div className="bg-red-50 rounded-missao p-4">
                <p className="text-sm text-gray-600 mb-1">Rejeição</p>
                <p className="text-3xl font-bold text-red-600">{ultimaPesquisa.rejeicao}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6">
          {/* Instagram */}
          {candidato.redesSociais.instagram && (
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-missao shadow-missao p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Instagram size={32} />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  +{candidato.redesSociais.instagram.crescimentoSemanal.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <p className="text-3xl font-bold mb-1">
                {(candidato.redesSociais.instagram.seguidores / 1000).toFixed(1)}k
              </p>
              <p className="text-sm opacity-90">seguidores</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="opacity-75">Engajamento</p>
                  <p className="font-semibold">{(candidato.redesSociais.instagram.engajamento / 1000).toFixed(1)}k</p>
                </div>
                <div>
                  <p className="opacity-75">Taxa</p>
                  <p className="font-semibold">{candidato.redesSociais.instagram.taxaEngajamento.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}

          {/* Facebook */}
          {candidato.redesSociais.facebook && (
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-missao shadow-missao p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Facebook size={32} />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  +{candidato.redesSociais.facebook.crescimentoSemanal.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Facebook</h3>
              <p className="text-3xl font-bold mb-1">
                {(candidato.redesSociais.facebook.seguidores / 1000).toFixed(1)}k
              </p>
              <p className="text-sm opacity-90">seguidores</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="opacity-75">Engajamento</p>
                  <p className="font-semibold">{(candidato.redesSociais.facebook.engajamento / 1000).toFixed(1)}k</p>
                </div>
                <div>
                  <p className="opacity-75">Taxa</p>
                  <p className="font-semibold">{candidato.redesSociais.facebook.taxaEngajamento.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}

          {/* Twitter */}
          {candidato.redesSociais.twitter && (
            <div className="bg-gradient-to-br from-sky-400 to-sky-600 rounded-missao shadow-missao p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Twitter size={32} />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  +{candidato.redesSociais.twitter.crescimentoSemanal.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Twitter</h3>
              <p className="text-3xl font-bold mb-1">
                {(candidato.redesSociais.twitter.seguidores / 1000).toFixed(1)}k
              </p>
              <p className="text-sm opacity-90">seguidores</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="opacity-75">Engajamento</p>
                  <p className="font-semibold">{(candidato.redesSociais.twitter.engajamento / 1000).toFixed(1)}k</p>
                </div>
                <div>
                  <p className="opacity-75">Taxa</p>
                  <p className="font-semibold">{candidato.redesSociais.twitter.taxaEngajamento.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}

          {/* TikTok */}
          {candidato.redesSociais.tiktok && (
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-missao shadow-missao p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <SiTiktok size={32} />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  +{candidato.redesSociais.tiktok.crescimentoSemanal.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">TikTok</h3>
              <p className="text-3xl font-bold mb-1">
                {candidato.redesSociais.tiktok.seguidores >= 1000000
                  ? `${(candidato.redesSociais.tiktok.seguidores / 1000000).toFixed(1)}M`
                  : `${(candidato.redesSociais.tiktok.seguidores / 1000).toFixed(1)}k`
                }
              </p>
              <p className="text-sm opacity-90">seguidores</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="opacity-75">Engajamento</p>
                  <p className="font-semibold">{(candidato.redesSociais.tiktok.engajamento / 1000).toFixed(1)}k</p>
                </div>
                <div>
                  <p className="opacity-75">Taxa</p>
                  <p className="font-semibold">{candidato.redesSociais.tiktok.taxaEngajamento.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}

          {/* YouTube */}
          {candidato.redesSociais.youtube && (
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-missao shadow-missao p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Youtube size={32} />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  +{candidato.redesSociais.youtube.crescimentoSemanal.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">YouTube</h3>
              <p className="text-3xl font-bold mb-1">
                {(candidato.redesSociais.youtube.seguidores / 1000).toFixed(1)}k
              </p>
              <p className="text-sm opacity-90">inscritos</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="opacity-75">Engajamento</p>
                  <p className="font-semibold">{(candidato.redesSociais.youtube.engajamento / 1000).toFixed(1)}k</p>
                </div>
                <div>
                  <p className="opacity-75">Taxa</p>
                  <p className="font-semibold">{candidato.redesSociais.youtube.taxaEngajamento.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Evolução de Seguidores */}
          <div className="bg-white rounded-missao shadow-missao p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-missao-blue" />
              Evolução de Seguidores (Instagram)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={seguidoresData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="seguidores" stroke="#0099ff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Evolução de Pesquisas */}
          <div className="bg-white rounded-missao shadow-missao p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-green-600" />
              Evolução de Pesquisas (IBOPE)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={pesquisasData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="intencao" stackId="1" stroke="#10b981" fill="#10b981" name="Intenção de Voto" />
                <Area type="monotone" dataKey="rejeicao" stackId="2" stroke="#ef4444" fill="#ef4444" name="Rejeição" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Financiamento de Campanha */}
        {candidato.financiamento && (
          <div className="bg-white rounded-missao shadow-missao p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wallet className="text-green-600" />
              Financiamento de Campanha
            </h3>

            {/* Resumo Geral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-missao p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-600" size={20} />
                  <p className="text-sm font-medium text-gray-600">Total de Receitas</p>
                </div>
                <p className="text-2xl font-bold text-green-600">
                  R$ {(candidato.financiamento.receitas.total / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-red-50 rounded-missao p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="text-red-600" size={20} />
                  <p className="text-sm font-medium text-gray-600">Total de Despesas</p>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  R$ {(candidato.financiamento.despesas.total / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-blue-50 rounded-missao p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="text-blue-600" size={20} />
                  <p className="text-sm font-medium text-gray-600">Saldo em Caixa</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  R$ {(candidato.financiamento.saldo / 1000).toFixed(0)}k
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Receitas */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={20} />
                  Origem das Receitas
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Fundo Eleitoral</span>
                    <span className="font-bold text-green-600">
                      R$ {(candidato.financiamento.receitas.fundoEleitoral / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Doações Pessoa Física</span>
                    <span className="font-bold text-green-600">
                      R$ {(candidato.financiamento.receitas.doacoesPessoaFisica / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Fundo Partidário</span>
                    <span className="font-bold text-green-600">
                      R$ {(candidato.financiamento.receitas.fundoPartidario / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Recursos Próprios</span>
                    <span className="font-bold text-green-600">
                      R$ {(candidato.financiamento.receitas.recursosProprios / 1000).toFixed(0)}k
                    </span>
                  </div>
                  {candidato.financiamento.receitas.doacoesPessoaJuridica > 0 && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Doações Pessoa Jurídica</span>
                      <span className="font-bold text-green-600">
                        R$ {(candidato.financiamento.receitas.doacoesPessoaJuridica / 1000).toFixed(0)}k
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Despesas */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <PieChart className="text-red-600" size={20} />
                  Destino das Despesas
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Redes Sociais</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.redesSociais / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Mídia Televisiva</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.midiaTelevisiva / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Pessoal</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.pessoal / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Mídia Física</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.midiaFisica / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Eventos</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.eventos / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Material de Campanha</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.materialCampanha / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Outros</span>
                    <span className="font-bold text-red-600">
                      R$ {(candidato.financiamento.despesas.outros / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Últimas Notícias */}
        <div className="bg-white rounded-missao shadow-missao p-6">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="text-missao-yellow" />
            Últimas Notícias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map(noticia => (
              <div
                key={noticia.id}
                className={`border rounded-missao p-4 hover:shadow-lg transition-shadow ${
                  noticia.destaque ? 'border-missao-yellow border-2 bg-yellow-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoriaColor(noticia.categoria)}`}>
                    {noticia.categoria}
                  </span>
                  {noticia.destaque && (
                    <span className="text-xs font-bold text-missao-yellow">⭐ DESTAQUE</span>
                  )}
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{noticia.titulo}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{noticia.resumo}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{noticia.fonte}</span>
                  <span>{new Date(noticia.dataPublicacao).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
