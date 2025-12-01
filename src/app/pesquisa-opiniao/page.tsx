import Header from '@/components/Header';
import RadarOpiniaoPublica from '@/components/RadarOpiniaoPublica';
import { BarChart3, TrendingUp, TrendingDown, Users, Calendar } from 'lucide-react';

export default function PesquisaOpiniaoPage() {
  const estatisticas = [
    {
      titulo: 'Participantes',
      valor: '12.543',
      icone: Users,
      cor: 'text-missao-blue',
      bgCor: 'bg-blue-50',
    },
    {
      titulo: 'Aprovação Geral',
      valor: '47%',
      icone: TrendingUp,
      cor: 'text-green-600',
      bgCor: 'bg-green-50',
    },
    {
      titulo: 'Reprovação Geral',
      valor: '39%',
      icone: TrendingDown,
      cor: 'text-red-600',
      bgCor: 'bg-red-50',
    },
    {
      titulo: 'Última Atualização',
      valor: '28/11/2024',
      icone: Calendar,
      cor: 'text-missao-yellow',
      bgCor: 'bg-yellow-50',
    },
  ];

  const detalhamentoPorArea = [
    {
      area: 'Segurança Pública',
      aprovacao: 45,
      reprovacao: 40,
      indiferente: 15,
      principais_acoes: ['Aumento do policiamento', 'Instalação de câmeras', 'Programa Ronda no Bairro'],
      cor: 'bg-orange-500',
    },
    {
      area: 'Saúde',
      aprovacao: 35,
      reprovacao: 50,
      indiferente: 15,
      principais_acoes: ['Construção de UPAs', 'Programa Médico da Família', 'Vacinação'],
      cor: 'bg-red-500',
    },
    {
      area: 'Educação',
      aprovacao: 55,
      reprovacao: 30,
      indiferente: 15,
      principais_acoes: ['Reforma de escolas', 'Tablets para alunos', 'Capacitação de professores'],
      cor: 'bg-green-500',
    },
    {
      area: 'Economia',
      aprovacao: 40,
      reprovacao: 45,
      indiferente: 15,
      principais_acoes: ['Incentivo fiscal', 'Programa de microcrédito', 'Feiras de emprego'],
      cor: 'bg-blue-500',
    },
    {
      area: 'Infraestrutura',
      aprovacao: 50,
      reprovacao: 35,
      indiferente: 15,
      principais_acoes: ['Pavimentação de ruas', 'Obras de drenagem', 'Iluminação LED'],
      cor: 'bg-purple-500',
    },
    {
      area: 'Meio Ambiente',
      aprovacao: 60,
      reprovacao: 25,
      indiferente: 15,
      principais_acoes: ['Plantio de árvores', 'Coleta seletiva', 'Parques urbanos'],
      cor: 'bg-emerald-500',
    },
    {
      area: 'Emprego',
      aprovacao: 38,
      reprovacao: 48,
      indiferente: 14,
      principais_acoes: ['Qualificação profissional', 'Atração de empresas', 'Programa Jovem Aprendiz'],
      cor: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header alertasNaoLidos={0} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-missao-black mb-3">
            Pesquisa e Opinião Pública
          </h1>
          <p className="text-gray-600 text-lg">
            Avaliação da população sobre as principais áreas de atuação do governo
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {estatisticas.map((stat) => {
            const Icone = stat.icone;
            return (
              <div key={stat.titulo} className="card-missao p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.titulo}</p>
                    <p className="text-3xl font-bold text-missao-black">{stat.valor}</p>
                  </div>
                  <div className={`${stat.bgCor} p-3 rounded-full`}>
                    <Icone className={`w-8 h-8 ${stat.cor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gráfico de Radar */}
        <div className="mb-8">
          <RadarOpiniaoPublica />
        </div>

        {/* Detalhamento por Área */}
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-missao-black mb-6">
            Detalhamento por Área
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {detalhamentoPorArea.map((area) => (
              <div key={area.area} className="card-missao p-6 hover:shadow-lg transition-shadow">
                {/* Cabeçalho da área */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-12 ${area.cor} rounded-full`} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-missao-black">{area.area}</h3>
                  </div>
                </div>

                {/* Barras de aprovação */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Aprovação</span>
                      <span className="text-sm font-bold text-green-600">{area.aprovacao}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${area.aprovacao}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Reprovação</span>
                      <span className="text-sm font-bold text-red-600">{area.reprovacao}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full transition-all"
                        style={{ width: `${area.reprovacao}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Indiferente</span>
                      <span className="text-sm font-bold text-yellow-600">{area.indiferente}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all"
                        style={{ width: `${area.indiferente}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Principais ações */}
                <div className="pt-4 border-t">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Principais Ações
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.principais_acoes.map((acao, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {acao}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metodologia */}
        <div className="card-missao p-6">
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-missao-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-missao-black mb-2">Metodologia da Pesquisa</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  <strong>Período de coleta:</strong> 01/11/2024 a 28/11/2024
                </p>
                <p>
                  <strong>Amostra:</strong> 12.543 entrevistas com eleitores distribuídos proporcionalmente
                  por região, gênero, idade e escolaridade
                </p>
                <p>
                  <strong>Margem de erro:</strong> ±2,5 pontos percentuais
                </p>
                <p>
                  <strong>Nível de confiança:</strong> 95%
                </p>
                <p>
                  <strong>Método:</strong> Entrevistas telefônicas e presenciais, com questionário estruturado
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
