'use client';

import { useEffect, useRef } from 'react';
import { VotosPorZona } from '@/types';

interface HeatMapProps {
  dados: VotosPorZona[];
  tipo: 'votos' | 'engajamento';
}

export default function HeatMap({ dados, tipo }: HeatMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mapa será renderizado aqui quando Leaflet for carregado
    // Por enquanto, mostramos uma visualização simplificada
  }, [dados, tipo]);

  const getColor = (percentual: number) => {
    if (percentual >= 50) return '#22c55e';
    if (percentual >= 40) return '#84cc16';
    if (percentual >= 30) return '#eab308';
    if (percentual >= 20) return '#f59e0b';
    return '#ef4444';
  };

  const maxVotos = Math.max(...dados.map(d => d.votos));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          Mapa de Calor - {tipo === 'votos' ? 'Votação' : 'Engajamento Digital'}
        </h3>
        <div className="flex items-center gap-2 text-xs">
          <span>Baixo</span>
          <div className="flex gap-1">
            <div className="w-6 h-4 bg-red-500 rounded"></div>
            <div className="w-6 h-4 bg-orange-500 rounded"></div>
            <div className="w-6 h-4 bg-yellow-500 rounded"></div>
            <div className="w-6 h-4 bg-lime-500 rounded"></div>
            <div className="w-6 h-4 bg-green-500 rounded"></div>
          </div>
          <span>Alto</span>
        </div>
      </div>

      {/* Visualização Simplificada - Grid de Zonas */}
      <div className="space-y-2">
        {dados.map((zona, idx) => {
          const intensidade = (zona.votos / maxVotos) * 100;
          const cor = getColor(zona.percentual);

          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              style={{ borderLeft: `4px solid ${cor}` }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900">
                    Zona {zona.zona} - Seção {zona.secao}
                  </span>
                  <span className="text-sm text-gray-600">{zona.bairro || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{zona.votos} votos</span>
                  <span>{zona.percentual.toFixed(1)}%</span>
                  <span>{zona.totalEleitores} eleitores</span>
                </div>
              </div>

              {/* Barra de intensidade */}
              <div className="w-32">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${intensidade}%`,
                      backgroundColor: cor
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder para mapa real */}
      <div className="mt-6 p-8 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-600">
          📍 Mapa interativo com Leaflet será renderizado aqui
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Coordenadas: {dados[0]?.latitude.toFixed(4)}, {dados[0]?.longitude.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
