'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface HeaderProps {
  alertasNaoLidos?: number;
}

export default function Header({ alertasNaoLidos = 0 }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-missao-black text-white shadow-missao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-4">
              <Image
                src="https://framerusercontent.com/images/B3xd7KNHHVS63sxBw8BsJdMzXQ.png"
                alt="Logo Partido Missão"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h1 className="text-4xl font-display font-bold">Plataforma da Missão</h1>
                <p className="text-sm text-missao-yellow mt-1">Análise Política Inteligente</p>
              </div>
            </div>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className={`font-semibold hover:text-missao-yellow transition-colors ${
                isActive('/') ? 'text-missao-yellow' : 'text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/candidatos"
              className={`hover:text-missao-yellow transition-colors ${
                isActive('/candidatos') ? 'text-missao-yellow' : 'text-white'
              }`}
            >
              Candidatos
            </Link>
            <Link
              href="/candidatos-por-estado"
              className={`hover:text-missao-yellow transition-colors ${
                isActive('/candidatos-por-estado') ? 'text-missao-yellow' : 'text-white'
              }`}
            >
              Por Estado
            </Link>
            <Link
              href="/pesquisa-opiniao"
              className={`hover:text-missao-yellow transition-colors ${
                isActive('/pesquisa-opiniao') ? 'text-missao-yellow' : 'text-white'
              }`}
            >
              Opinião Pública
            </Link>
            <Link
              href="/alertas"
              className={`hover:text-missao-yellow transition-colors relative ${
                isActive('/alertas') ? 'text-missao-yellow' : 'text-white'
              }`}
            >
              Alertas {alertasNaoLidos > 0 && (
                <span className="ml-1 bg-missao-yellow text-black text-xs px-2 py-0.5 rounded-full font-semibold">
                  {alertasNaoLidos}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
