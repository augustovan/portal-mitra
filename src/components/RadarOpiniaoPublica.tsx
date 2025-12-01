'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

interface RadarOpiniaoPublicaProps {
  dados?: Array<{
    assunto: string;
    aprovacao: number;
    reprovacao: number;
    indiferente: number;
  }>;
}

const dadosPadrao = [
  {
    assunto: 'Segurança Pública',
    aprovacao: 45,
    reprovacao: 40,
    indiferente: 15,
  },
  {
    assunto: 'Saúde',
    aprovacao: 35,
    reprovacao: 50,
    indiferente: 15,
  },
  {
    assunto: 'Educação',
    aprovacao: 55,
    reprovacao: 30,
    indiferente: 15,
  },
  {
    assunto: 'Economia',
    aprovacao: 40,
    reprovacao: 45,
    indiferente: 15,
  },
  {
    assunto: 'Infraestrutura',
    aprovacao: 50,
    reprovacao: 35,
    indiferente: 15,
  },
  {
    assunto: 'Meio Ambiente',
    aprovacao: 60,
    reprovacao: 25,
    indiferente: 15,
  },
  {
    assunto: 'Emprego',
    aprovacao: 38,
    reprovacao: 48,
    indiferente: 14,
  },
];

export default function RadarOpiniaoPublica({ dados = dadosPadrao }: RadarOpiniaoPublicaProps) {
  return (
    <div className="card-missao p-6">
      <h2 className="text-2xl font-display font-bold text-missao-black mb-6">
        Avaliação por Área de Governo
      </h2>

      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={dados}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="assunto"
            tick={{ fill: '#374151', fontSize: 12, fontWeight: 500 }}
            className="font-sans"
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#6b7280', fontSize: 10 }}
          />
          <Radar
            name="Aprovação"
            dataKey="aprovacao"
            stroke="#0066CC"
            fill="#0066CC"
            fillOpacity={0.6}
            strokeWidth={2}
          />
          <Radar
            name="Reprovação"
            dataKey="reprovacao"
            stroke="#dc2626"
            fill="#dc2626"
            fillOpacity={0.5}
            strokeWidth={2}
          />
          <Radar
            name="Indiferente"
            dataKey="indiferente"
            stroke="#FFCC00"
            fill="#FFCC00"
            fillOpacity={0.4}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '8px',
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Legend
            wrapperStyle={{
              paddingTop: '20px',
            }}
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
          <div className="w-4 h-4 rounded-full bg-[#0066CC]" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Aprovação</p>
            <p className="text-xs text-gray-600">Avaliação positiva</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
          <div className="w-4 h-4 rounded-full bg-[#dc2626]" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Reprovação</p>
            <p className="text-xs text-gray-600">Avaliação negativa</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
          <div className="w-4 h-4 rounded-full bg-[#FFCC00]" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Indiferente</p>
            <p className="text-xs text-gray-600">Sem opinião formada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
