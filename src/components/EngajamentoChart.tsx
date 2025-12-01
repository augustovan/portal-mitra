'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RedesSociais } from '@/types';
import { formatNumber } from '@/lib/utils';

interface EngajamentoChartProps {
  redesSociais: RedesSociais;
}

export default function EngajamentoChart({ redesSociais }: EngajamentoChartProps) {
  // Combinar históricos de todas as redes sociais
  const historicoCombinado = redesSociais.instagram?.historico.map((item, idx) => ({
    data: new Date(item.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }),
    Instagram: redesSociais.instagram?.historico[idx]?.valor || 0,
    Facebook: redesSociais.facebook?.historico[idx]?.valor || 0,
    Twitter: redesSociais.twitter?.historico[idx]?.valor || 0,
    TikTok: redesSociais.tiktok?.historico[idx]?.valor || 0,
  })) || [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Evolução de Seguidores (Últimas 4 Semanas)
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={historicoCombinado}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis tickFormatter={(value) => formatNumber(value)} />
          <Tooltip
            formatter={(value: number) => formatNumber(value)}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
          />
          <Legend />
          {redesSociais.instagram && (
            <Line
              type="monotone"
              dataKey="Instagram"
              stroke="#E4405F"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
          {redesSociais.facebook && (
            <Line
              type="monotone"
              dataKey="Facebook"
              stroke="#1877F2"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
          {redesSociais.twitter && (
            <Line
              type="monotone"
              dataKey="Twitter"
              stroke="#1DA1F2"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
          {redesSociais.tiktok && (
            <Line
              type="monotone"
              dataKey="TikTok"
              stroke="#000000"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      {/* Métricas de Engajamento */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {redesSociais.instagram && (
          <div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Instagram</p>
            <p className="text-lg font-bold text-gray-900">
              {formatNumber(redesSociais.instagram.seguidores)}
            </p>
            <p className="text-xs text-green-600">
              +{redesSociais.instagram.crescimentoSemanal}% sem.
            </p>
          </div>
        )}

        {redesSociais.facebook && (
          <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Facebook</p>
            <p className="text-lg font-bold text-gray-900">
              {formatNumber(redesSociais.facebook.seguidores)}
            </p>
            <p className="text-xs text-green-600">
              +{redesSociais.facebook.crescimentoSemanal}% sem.
            </p>
          </div>
        )}

        {redesSociais.twitter && (
          <div className="p-3 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Twitter</p>
            <p className="text-lg font-bold text-gray-900">
              {formatNumber(redesSociais.twitter.seguidores)}
            </p>
            <p className="text-xs text-green-600">
              +{redesSociais.twitter.crescimentoSemanal}% sem.
            </p>
          </div>
        )}

        {redesSociais.tiktok && (
          <div className="p-3 bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">TikTok</p>
            <p className="text-lg font-bold text-gray-900">
              {formatNumber(redesSociais.tiktok.seguidores)}
            </p>
            <p className="text-xs text-green-600">
              +{redesSociais.tiktok.crescimentoSemanal}% sem.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
