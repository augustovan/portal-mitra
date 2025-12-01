'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PesquisaIbope } from '@/types';

interface PesquisasChartProps {
  pesquisas: PesquisaIbope[];
}

export default function PesquisasChart({ pesquisas }: PesquisasChartProps) {
  const dados = pesquisas.map(p => ({
    data: new Date(p.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
    'Intenção de Voto': p.intencaoVoto,
    'Rejeição': p.rejeicao,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Evolução IBOPE - Intenção de Voto vs Rejeição
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(1)}%`}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Area
            type="monotone"
            dataKey="Intenção de Voto"
            stackId="1"
            stroke="#22c55e"
            fill="#86efac"
          />
          <Area
            type="monotone"
            dataKey="Rejeição"
            stackId="2"
            stroke="#ef4444"
            fill="#fca5a5"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Última Pesquisa */}
      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Última Pesquisa</p>
            <p className="text-xs text-gray-500">{pesquisas[pesquisas.length - 1].instituto}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">
              {pesquisas[pesquisas.length - 1].intencaoVoto.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-600">
              Rejeição: {pesquisas[pesquisas.length - 1].rejeicao.toFixed(1)}%
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-4 text-xs text-gray-600">
          <span>Margem: ±{pesquisas[pesquisas.length - 1].margem}%</span>
          <span>Amostra: {pesquisas[pesquisas.length - 1].amostra} entrevistados</span>
          <span>Data: {new Date(pesquisas[pesquisas.length - 1].data).toLocaleDateString('pt-BR')}</span>
        </div>
      </div>
    </div>
  );
}
