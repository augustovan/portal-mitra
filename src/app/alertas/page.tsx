import Header from '@/components/Header';
import { alertasMock } from '@/data/mockCandidatos';
import { getCorPorSeveridade } from '@/lib/utils';
import { AlertTriangle, Bell, CheckCircle } from 'lucide-react';

export default function AlertasPage() {
  const alertasNaoLidos = alertasMock.filter(a => !a.lido);
  const alertasLidos = alertasMock.filter(a => a.lido);

  const getIconePorTipo = (tipo: string) => {
    switch (tipo) {
      case 'discrepancia':
        return <AlertTriangle size={20} />;
      case 'baixo-engajamento':
        return <Bell size={20} />;
      case 'fake-followers':
        return <AlertTriangle size={20} />;
      case 'oportunidade':
        return <CheckCircle size={20} />;
      default:
        return <Bell size={20} />;
    }
  };

  const getTituloTipo = (tipo: string) => {
    const tipos: Record<string, string> = {
      'discrepancia': 'Discrepância',
      'baixo-engajamento': 'Baixo Engajamento',
      'fake-followers': 'Seguidores Falsos',
      'oportunidade': 'Oportunidade'
    };
    return tipos[tipo] || tipo;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header alertasNaoLidos={alertasNaoLidos.length} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Alertas</h1>
          <p className="text-gray-600">
            Acompanhe alertas importantes sobre os candidatos
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-missao shadow-missao p-6">
            <p className="text-sm text-gray-600 mb-1">Total de Alertas</p>
            <p className="text-3xl font-bold">{alertasMock.length}</p>
          </div>
          <div className="bg-yellow-50 rounded-missao shadow-missao p-6 border-2 border-missao-yellow">
            <p className="text-sm text-gray-600 mb-1">Não Lidos</p>
            <p className="text-3xl font-bold text-yellow-600">{alertasNaoLidos.length}</p>
          </div>
          <div className="bg-red-50 rounded-missao shadow-missao p-6">
            <p className="text-sm text-gray-600 mb-1">Alta Prioridade</p>
            <p className="text-3xl font-bold text-red-600">
              {alertasMock.filter(a => a.severidade === 'alta').length}
            </p>
          </div>
          <div className="bg-green-50 rounded-missao shadow-missao p-6">
            <p className="text-sm text-gray-600 mb-1">Oportunidades</p>
            <p className="text-3xl font-bold text-green-600">
              {alertasMock.filter(a => a.tipo === 'oportunidade').length}
            </p>
          </div>
        </div>

        {/* Alertas Não Lidos */}
        {alertasNaoLidos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Bell className="text-missao-yellow" />
              Não Lidos ({alertasNaoLidos.length})
            </h2>
            <div className="space-y-4">
              {alertasNaoLidos.map(alerta => (
                <div
                  key={alerta.id}
                  className="bg-white rounded-missao shadow-missao p-6 border-l-4"
                  style={{ borderColor: getCorPorSeveridade(alerta.severidade) }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${getCorPorSeveridade(alerta.severidade)}20`,
                          color: getCorPorSeveridade(alerta.severidade)
                        }}
                      >
                        {getIconePorTipo(alerta.tipo)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{alerta.titulo}</h3>
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${getCorPorSeveridade(alerta.severidade)}20`,
                              color: getCorPorSeveridade(alerta.severidade)
                            }}
                          >
                            {alerta.severidade.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {getTituloTipo(alerta.tipo)} • {new Date(alerta.data).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{alerta.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alertas Lidos */}
        {alertasLidos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="text-gray-400" />
              Lidos ({alertasLidos.length})
            </h2>
            <div className="space-y-4">
              {alertasLidos.map(alerta => (
                <div
                  key={alerta.id}
                  className="bg-gray-50 rounded-missao shadow-sm p-6 border-l-4 border-gray-300 opacity-75"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-200 text-gray-500">
                        {getIconePorTipo(alerta.tipo)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-gray-700">{alerta.titulo}</h3>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 text-gray-600">
                            {alerta.severidade.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {getTituloTipo(alerta.tipo)} • {new Date(alerta.data).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{alerta.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
