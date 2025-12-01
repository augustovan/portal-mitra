import Link from 'next/link';
import Header from '@/components/Header';
import { candidatosMock } from '@/data/mockCandidatos';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function CandidatosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold mb-2">Candidatos</h1>
        <p className="text-gray-600 mb-8">Clique em um candidato para ver detalhes completos</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidatosMock.map(candidato => {
            const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];

            return (
              <Link
                key={candidato.id}
                href={`/candidatos/${candidato.id}`}
                className="bg-white rounded-missao shadow-missao p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={candidato.foto}
                    alt={candidato.nome}
                    className="w-20 h-20 rounded-full object-cover border-2 border-missao-yellow"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-missao-yellow text-black font-bold text-lg px-3 py-1 rounded-missao">
                        {candidato.numeroPartido}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl">{candidato.nome}</h3>
                    <p className="text-sm text-gray-600">{candidato.partido}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">{candidato.cargo}</p>
                  <p className="text-xs text-gray-500">{candidato.municipio}, {candidato.estado}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600 mb-1">Intenção</p>
                    <p className="text-xl font-bold text-green-600">{ultimaPesquisa.intencaoVoto}%</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600 mb-1">Rejeição</p>
                    <p className="text-xl font-bold text-red-600">{ultimaPesquisa.rejeicao}%</p>
                  </div>
                </div>

                <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                  {candidato.redesSociais.instagram && (
                    <div className="flex items-center gap-1 text-purple-600">
                      <Instagram size={16} />
                      <span className="text-xs font-medium">
                        {(candidato.redesSociais.instagram.seguidores / 1000).toFixed(1)}k
                      </span>
                    </div>
                  )}
                  {candidato.redesSociais.facebook && (
                    <div className="flex items-center gap-1 text-blue-600">
                      <Facebook size={16} />
                      <span className="text-xs font-medium">
                        {(candidato.redesSociais.facebook.seguidores / 1000).toFixed(1)}k
                      </span>
                    </div>
                  )}
                  {candidato.redesSociais.twitter && (
                    <div className="flex items-center gap-1 text-sky-500">
                      <Twitter size={16} />
                      <span className="text-xs font-medium">
                        {(candidato.redesSociais.twitter.seguidores / 1000).toFixed(1)}k
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
