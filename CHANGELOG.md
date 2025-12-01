# Changelog - Plataforma da Missão

## [0.2.0] - 2024-12-01

### Adicionado
- **Novo tema visual do Partido Missão**
  - Cores principais: Preto (#000), Amarelo (#fcbe26), Azul (#0099ff)
  - Fonte Inter como tipografia principal
  - Fonte Fjalla One para títulos destacados
  - Border-radius padronizado em 20px (estilo Missão)

- **8 candidatos de diferentes regiões do Brasil**
  - Sudeste: 5 candidatos (SP, RJ, MG)
  - Sul: 1 candidato (RS)
  - Nordeste: 2 candidatos (BA, PE)
  - Dados completos de redes sociais e pesquisas IBOPE

- **Mapa de Calor do Brasil**
  - Visualização geográfica por região
  - Intensidade baseada em total de seguidores
  - Tooltips interativos
  - Lista detalhada de candidatos por região
  - Gradiente de cores amarelo → azul

### Alterado
- Título do sistema: "Portal Mitra" → "Plataforma da Missão"
- Header com fundo preto e texto amarelo
- Cards com border-radius de 20px
- Ícones com cores do tema (azul e amarelo)
- Badges de alertas em amarelo com texto preto
- Gradientes dos avatares: amarelo → azul

### Componentes Atualizados

#### Layout Principal
- Header preto com logo amarelo
- Navegação com hover amarelo
- Background branco limpo

#### Cards de Estatísticas
- Classe `card-missao` aplicada
- Ícones em azul e amarelo do Missão
- Hover com shadow-lg

#### Cards de Candidatos
- Gradiente amarelo → azul nos avatares
- Valores IBOPE em azul Missão
- Efeito hover com scale

#### Mapa do Brasil
- Marcadores com cores dinâmicas (amarelo/azul)
- SVG do Brasil em amarelo com borda azul
- Tooltips em preto com título amarelo
- Legenda atualizada com cores do tema

#### Alertas
- Background amarelo claro para não lidos
- Badges arredondados estilo Missão
- Nome do candidato em destaque amarelo

### Técnico
- Tailwind Config atualizado com cores customizadas
- CSS global com fonte Inter do Google Fonts
- Classes utilitárias: `.card-missao`, `.btn-missao-primary`, `.btn-missao-secondary`
- Border-radius customizado: `rounded-missao` (20px)
- Box-shadow customizado: `shadow-missao`

## [0.1.0] - 2024-12-01

### MVP Inicial
- Dashboard com KPIs
- 3 candidatos iniciais (São Paulo)
- Gráficos de engajamento e IBOPE
- Sistema de alertas
- Dados mocados completos
