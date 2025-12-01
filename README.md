# Portal Mitra 🗳️

Plataforma completa de análise de candidatos políticos, correlacionando dados de redes sociais, resultados eleitorais e pesquisas de intenção de voto (IBOPE).

## 🚀 Tecnologias

- **Framework**: Next.js 15 + TypeScript
- **Estilização**: Tailwind CSS
- **Gráficos**: Recharts
- **Mapas**: Leaflet + React Leaflet
- **Ícones**: Lucide React
- **Utilitários**: date-fns

## 📁 Estrutura do Projeto

```
portal-mitra/
├── src/
│   ├── app/              # Pages e layouts (App Router)
│   │   ├── candidatos/   # Rotas de candidatos
│   │   │   └── [id]/     # Página de detalhes dinâmica
│   │   ├── globals.css   # Estilos globais
│   │   ├── layout.tsx    # Layout raiz
│   │   └── page.tsx      # Dashboard principal
│   ├── components/       # Componentes reutilizáveis
│   │   ├── EngajamentoChart.tsx
│   │   ├── HeatMap.tsx
│   │   └── PesquisasChart.tsx
│   ├── data/            # Dados mocados
│   │   └── mockCandidatos.ts
│   ├── lib/             # Utilitários
│   │   └── utils.ts
│   └── types/           # Tipos TypeScript
│       └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## ✨ Funcionalidades Implementadas (MVP)

### 1. Dashboard Principal
- Visão geral com KPIs principais
- Cards com estatísticas de candidatos
- Lista de candidatos monitorados
- Alertas recentes em tempo real

### 2. Análise de Candidatos
- Perfil completo do candidato
- Métricas detalhadas de redes sociais (Instagram, Facebook, Twitter, TikTok)
- Gráficos de evolução de seguidores
- Comparação IBOPE vs performance digital
- Taxa de conversão (seguidores → votos)

### 3. Visualização de Dados
- **Gráfico de Engajamento**: Evolução de seguidores nas redes sociais
- **Gráfico IBOPE**: Intenção de voto vs Rejeição ao longo do tempo
- **Mapa de Calor**: Distribuição geográfica de votos por zona eleitoral
- **Métricas Comparativas**: Digital vs Eleitoral

### 4. Dados Mocados
- 3 candidatos completos com:
  - Dados pessoais e políticos
  - Métricas de 4 redes sociais principais
  - Histórico de pesquisas IBOPE (4 semanas)
  - Resultados eleitorais 2020 por zona/seção
  - Coordenadas geográficas para mapeamento
- Sistema de alertas com 4 tipos diferentes

## 🎯 Tipos de Dados

### Candidato
```typescript
{
  id, nome, partido, cargo, municipio, estado,
  redesSociais: { instagram, facebook, twitter, tiktok },
  dadosEleitorais: { eleicaoAtual, eleicaoAnterior },
  pesquisasIbope: [...]
}
```

### Métricas de Redes Sociais
```typescript
{
  seguidores, engajamento, curtidas, comentarios,
  compartilhamentos, alcance, taxaEngajamento,
  crescimentoSemanal, historico: [...]
}
```

### Pesquisas IBOPE
```typescript
{
  data, instituto, intencaoVoto, rejeicao,
  margem, amostra
}
```

### Dados Eleitorais
```typescript
{
  ano, totalVotos, percentual, posicao, eleito,
  votosPorZona: [{ zona, secao, votos, latitude, longitude, bairro }]
}
```

## 🏃 Como Executar

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📊 Funcionalidades Principais

### Dashboard
- Total de candidatos monitorados
- Soma de seguidores em todas as redes
- Taxa média de engajamento
- Alertas ativos

### Página do Candidato
- **KPIs**: Total seguidores, Intenção de voto, Engajamento, Taxa conversão
- **Redes Sociais**: Cards detalhados para cada plataforma
- **Gráficos**:
  - Evolução de seguidores (linha)
  - IBOPE ao longo do tempo (área)
- **Mapa de Calor**: Visualização de votos por zona eleitoral
- **Análise Comparativa**: Digital vs Eleitoral com insights automáticos

### Sistema de Alertas
- **Discrepância**: Crescimento digital ≠ crescimento IBOPE
- **Oportunidade**: Alto engajamento em região com baixa votação anterior
- **Baixo Engajamento**: Regiões sub-exploradas
- **Fake Followers**: Detecção de padrões suspeitos

## 🎨 Design

- Gradientes modernos (blue-50 to indigo-100)
- Cards com shadow e hover effects
- Cores específicas por rede social
- Responsive design (mobile-first)
- Ícones Lucide React
- Tailwind CSS utilities

## 📈 Próximas Fases

### Fase 2
- [ ] Automação de coleta de dados das redes sociais (APIs)
- [ ] Importação real de dados TSE
- [ ] Dashboard completo com filtros avançados
- [ ] Comparação entre candidatos
- [ ] Exportação de relatórios

### Fase 3
- [ ] IA para predição de resultados
- [ ] Análise de sentimento em comentários
- [ ] Detecção avançada de fake followers
- [ ] Relatórios automatizados
- [ ] Sistema de recomendações estratégicas

## 🔐 Considerações Legais

- ✅ Dados públicos de candidatos (TSE)
- ✅ Conformidade com termos de uso das APIs
- ✅ LGPD: dados de fontes oficiais
- ✅ Fonte oficial: TSE para dados eleitorais

## 📝 Licença

Projeto educacional - Portal Mitra

---

**Status**: MVP Completo ✅
**Versão**: 0.1.0
**Última Atualização**: Dezembro 2024
