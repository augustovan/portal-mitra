'use client';

import { useState } from 'react';
import { Candidato } from '@/types';

interface MapaBrasilEleitoralProps {
  candidatos: Candidato[];
}

interface EstadoInfo {
  sigla: string;
  nome: string;
  cor: string;
  partido?: string;
  percentual?: number;
  // Coordenadas relativas para posicionar o label (0-100%)
  x: number;
  y: number;
}

export default function MapaBrasilEleitoral({ candidatos }: MapaBrasilEleitoralProps) {
  const [estadoHover, setEstadoHover] = useState<string | null>(null);

  // Cores dos partidos (baseado no mapa do G1)
  const coresPartidos: Record<string, string> = {
    'PT': '#e01a22',
    'PSDB': '#0080ff',
    'PL': '#003d82',
    'PSOL': '#e2007a',
    'MDB': '#22a03c',
    'PDT': '#ff6600',
    'PODE': '#0066cc',
    'REDE': '#00a859',
    'UNIÃO': '#4682b4',
    'PP': '#1e7ba3',
    'PSB': '#ff4500',
    'NOVO': '#ff8c00',
    'MISSÃO': '#fcbe26',
  };

  // Mapear resultados por estado com posições aproximadas
  const estadosInfo: Record<string, EstadoInfo> = {
    'AC': { sigla: 'AC', nome: 'Acre', cor: '#93c47d', x: 15, y: 30 },
    'AL': { sigla: 'AL', nome: 'Alagoas', cor: '#6fa8dc', x: 87, y: 52 },
    'AP': { sigla: 'AP', nome: 'Amapá', cor: '#93c47d', x: 62, y: 10 },
    'AM': { sigla: 'AM', nome: 'Amazonas', cor: '#3d85c6', x: 25, y: 20 },
    'BA': { sigla: 'BA', nome: 'Bahia', cor: '#e06666', x: 68, y: 50 },
    'CE': { sigla: 'CE', nome: 'Ceará', cor: '#f6b26b', x: 80, y: 35 },
    'DF': { sigla: 'DF', nome: 'Distrito Federal', cor: '#93c47d', x: 55, y: 60 },
    'ES': { sigla: 'ES', nome: 'Espírito Santo', cor: '#8e7cc3', x: 78, y: 72 },
    'GO': { sigla: 'GO', nome: 'Goiás', cor: '#f9cb9c', x: 52, y: 60 },
    'MA': { sigla: 'MA', nome: 'Maranhão', cor: '#6fa8dc', x: 70, y: 32 },
    'MT': { sigla: 'MT', nome: 'Mato Grosso', cor: '#b4a7d6', x: 38, y: 45 },
    'MS': { sigla: 'MS', nome: 'Mato Grosso do Sul', cor: '#ff9900', x: 38, y: 68 },
    'MG': { sigla: 'MG', nome: 'Minas Gerais', cor: '#6fa8dc', x: 62, y: 70 },
    'PA': { sigla: 'PA', nome: 'Pará', cor: '#f1c232', x: 48, y: 25 },
    'PB': { sigla: 'PB', nome: 'Paraíba', cor: '#e06666', x: 88, y: 44 },
    'PR': { sigla: 'PR', nome: 'Paraná', cor: '#3d85c6', x: 48, y: 83 },
    'PE': { sigla: 'PE', nome: 'Pernambuco', cor: '#e06666', x: 83, y: 45 },
    'PI': { sigla: 'PI', nome: 'Piauí', cor: '#6fa8dc', x: 72, y: 40 },
    'RJ': { sigla: 'RJ', nome: 'Rio de Janeiro', cor: '#8e7cc3', x: 72, y: 78 },
    'RN': { sigla: 'RN', nome: 'Rio Grande do Norte', cor: '#76a5af', x: 87, y: 40 },
    'RS': { sigla: 'RS', nome: 'Rio Grande do Sul', cor: '#e06666', x: 42, y: 95 },
    'RO': { sigla: 'RO', nome: 'Rondônia', cor: '#6fa8dc', x: 25, y: 38 },
    'RR': { sigla: 'RR', nome: 'Roraima', cor: '#e06666', x: 38, y: 6 },
    'SC': { sigla: 'SC', nome: 'Santa Catarina', cor: '#3d85c6', x: 48, y: 90 },
    'SP': { sigla: 'SP', nome: 'São Paulo', cor: '#fcbe26', x: 55, y: 77 },
    'SE': { sigla: 'SE', nome: 'Sergipe', cor: '#93c47d', x: 83, y: 57 },
    'TO': { sigla: 'TO', nome: 'Tocantins', cor: '#6fa8dc', x: 58, y: 42 },
  };

  // Atualizar cores baseado nos candidatos
  candidatos.forEach(candidato => {
    const estado = candidato.estado;
    if (estadosInfo[estado]) {
      const ultimaPesquisa = candidato.pesquisasIbope[candidato.pesquisasIbope.length - 1];
      estadosInfo[estado].partido = candidato.partido;
      estadosInfo[estado].percentual = ultimaPesquisa.intencaoVoto;
      estadosInfo[estado].cor = coresPartidos[candidato.partido] || '#999999';
    }
  });

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 to-black rounded-missao p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Mapa Eleitoral do Brasil</h2>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Container do Mapa com proporção fixa */}
        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
          {/* Mapa SVG como background */}
          <svg
            viewBox="0 0 600 720"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Estados como paths SVG simplificados em formato de mapa real do Brasil */}

            {/* Região Norte */}
            <path d="M 210 45 L 240 40 L 265 50 L 270 75 L 255 95 L 225 98 L 205 80 Z"
              fill={estadosInfo['RR'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('RR')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'RR' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 360 72 L 385 68 L 400 82 L 398 105 L 378 112 L 358 100 Z"
              fill={estadosInfo['AP'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('AP')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'AP' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 60 130 L 135 125 L 195 132 L 218 155 L 235 190 L 220 225 L 180 245 L 135 238 L 90 215 L 65 180 Z"
              fill={estadosInfo['AM'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('AM')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'AM' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 235 150 L 293 147 L 348 155 L 377 175 L 393 205 L 385 240 L 360 265 L 315 277 L 270 270 L 235 248 L 220 210 Z"
              fill={estadosInfo['PA'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('PA')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'PA' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 108 265 L 162 260 L 192 275 L 195 305 L 177 330 L 139 333 L 112 315 Z"
              fill={estadosInfo['RO'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('RO')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'RO' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 52 210 L 102 207 L 125 220 L 128 252 L 108 275 L 75 275 L 52 255 Z"
              fill={estadosInfo['AC'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('AC')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'AC' ? 'url(#glow)' : 'none' }}
            />

            {/* Região Nordeste */}
            <path d="M 393 228 L 430 224 L 463 235 L 478 258 L 473 288 L 450 308 L 413 312 L 385 298 Z"
              fill={estadosInfo['MA'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('MA')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'MA' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 470 263 L 503 260 L 522 275 L 518 300 L 495 317 L 465 313 L 458 288 Z"
              fill={estadosInfo['CE'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('CE')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'CE' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 515 305 L 540 305 L 548 320 L 537 335 L 515 332 L 508 318 Z"
              fill={estadosInfo['RN'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('RN')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'RN' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 528 340 L 548 340 L 553 355 L 542 368 L 520 365 L 515 350 Z"
              fill={estadosInfo['PB'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('PB')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'PB' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 498 335 L 530 340 L 542 368 L 530 392 L 495 388 L 475 368 Z"
              fill={estadosInfo['PE'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('PE')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'PE' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 518 398 L 533 398 L 537 418 L 525 432 L 508 428 L 503 413 Z"
              fill={estadosInfo['AL'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('AL')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'AL' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 502 438 L 518 438 L 522 453 L 510 465 L 495 462 L 490 448 Z"
              fill={estadosInfo['SE'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('SE')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'SE' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 408 330 L 450 327 L 483 340 L 500 370 L 505 410 L 495 448 L 468 472 L 430 483 L 392 480 L 360 460 L 345 425 L 348 380 Z"
              fill={estadosInfo['BA'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('BA')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'BA' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 418 315 L 453 312 L 470 325 L 468 355 L 445 375 L 415 372 L 400 352 Z"
              fill={estadosInfo['PI'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('PI')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'PI' ? 'url(#glow)' : 'none' }}
            />

            {/* Região Centro-Oeste */}
            <path d="M 188 280 L 263 277 L 315 288 L 338 315 L 340 360 L 315 395 L 270 410 L 225 408 L 195 385 L 180 345 Z"
              fill={estadosInfo['MT'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('MT')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'MT' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 278 418 L 338 413 L 362 435 L 372 470 L 352 500 L 312 510 L 270 505 L 240 485 Z"
              fill={estadosInfo['GO'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('GO')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'GO' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 203 425 L 260 422 L 290 440 L 295 485 L 280 520 L 240 535 L 202 528 L 180 500 Z"
              fill={estadosInfo['MS'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('MS')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'MS' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 355 465 L 385 462 L 425 475 L 460 505 L 465 540 L 445 570 L 405 585 L 360 582 L 325 560 L 310 525 Z"
              fill={estadosInfo['MG'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('MG')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'MG' ? 'url(#glow)' : 'none' }}
            />

            {/* Região Sudeste */}
            {/* São Paulo - formato realista baseado na imagem */}
            <path d="M 280 540 L 310 537 L 340 535 L 365 538 L 385 545 L 398 555 L 408 568 L 413 580 L 412 592 L 406 603 L 395 610 L 380 615 L 362 618 L 342 617 L 322 614 L 305 610 L 290 603 L 278 595 L 270 585 L 268 572 L 270 558 L 275 548 Z"
              fill={estadosInfo['SP'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('SP')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'SP' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 418 565 L 450 562 L 470 580 L 465 605 L 440 617 L 410 612 L 405 590 Z"
              fill={estadosInfo['RJ'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('RJ')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'RJ' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 468 520 L 487 518 L 495 540 L 488 562 L 465 565 L 458 545 Z"
              fill={estadosInfo['ES'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('ES')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'ES' ? 'url(#glow)' : 'none' }}
            />

            {/* Região Sul */}
            <path d="M 248 580 L 298 577 L 343 588 L 365 612 L 354 642 L 315 652 L 270 642 L 240 620 Z"
              fill={estadosInfo['PR'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('PR')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'PR' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 248 648 L 310 645 L 345 655 L 342 680 L 308 692 L 263 685 L 240 668 Z"
              fill={estadosInfo['SC'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('SC')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'SC' ? 'url(#glow)' : 'none' }}
            />

            <path d="M 218 678 L 270 675 L 308 685 L 315 705 L 305 725 L 270 738 L 230 733 L 202 715 L 198 690 Z"
              fill={estadosInfo['RS'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('RS')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'RS' ? 'url(#glow)' : 'none' }}
            />

            {/* Tocantins */}
            <path d="M 338 290 L 385 287 L 413 305 L 415 340 L 395 365 L 358 370 L 330 350 Z"
              fill={estadosInfo['TO'].cor} stroke="white" strokeWidth="1.5" opacity="0.85"
              onMouseEnter={() => setEstadoHover('TO')} onMouseLeave={() => setEstadoHover(null)}
              className="cursor-pointer transition-all hover:opacity-100"
              style={{ filter: estadoHover === 'TO' ? 'url(#glow)' : 'none' }}
            />

            {/* Labels dos estados */}
            {Object.values(estadosInfo).map(estado => (
              <text
                key={estado.sigla}
                x={estado.x * 6}
                y={estado.y * 7.2}
                fontSize={estado.sigla === 'SP' || estado.sigla === 'MG' || estado.sigla === 'BA' || estado.sigla === 'AM' || estado.sigla === 'PA' ? '18' : '14'}
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
                className="pointer-events-none select-none"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  filter: estadoHover === estado.sigla ? 'url(#glow)' : 'none'
                }}
              >
                {estado.sigla}
              </text>
            ))}
          </svg>
        </div>

        {/* Tooltip */}
        {estadoHover && estadosInfo[estadoHover] && (
          <div className="absolute top-4 right-4 bg-white rounded-missao shadow-2xl p-4 min-w-[220px] border-2 border-yellow-400 z-10 animate-fade-in">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{estadosInfo[estadoHover].nome}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: estadosInfo[estadoHover].cor }}
              />
              {estadosInfo[estadoHover].partido && (
                <span className="font-bold text-gray-700">{estadosInfo[estadoHover].partido}</span>
              )}
            </div>
            {estadosInfo[estadoHover].percentual && (
              <p className="text-sm text-gray-600">
                Intenção de voto: <span className="font-bold text-gray-900">{estadosInfo[estadoHover].percentual}%</span>
              </p>
            )}
            {!estadosInfo[estadoHover].partido && (
              <p className="text-sm text-gray-500 italic">Sem dados disponíveis</p>
            )}
          </div>
        )}
      </div>

      {/* Legenda */}
      <div className="mt-6">
        <h3 className="text-white font-bold text-base mb-2">Legenda de Partidos</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {Object.entries(coresPartidos).map(([partido, cor]) => (
            <div key={partido} className="flex items-center gap-2 bg-white/10 rounded px-2 py-1">
              <div
                className="w-4 h-4 rounded shadow-md"
                style={{ backgroundColor: cor }}
              />
              <span className="text-white font-medium text-xs">{partido}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
