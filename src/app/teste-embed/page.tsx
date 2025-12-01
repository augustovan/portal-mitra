export default function TesteEmbed() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-2xl mb-4">Teste de Embed do Mapa G1</h1>

      <div className="bg-white rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Se você não ver o mapa abaixo, significa que o G1 bloqueia embedding.
        </p>
      </div>

      <iframe
        src="https://g1.globo.com/politica/eleicoes/2024/mapas/mapa-de-apuracao/brasil.ghtml"
        className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
        title="Mapa G1"
        sandbox="allow-scripts allow-same-origin"
      />

      <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-4">
        <p className="text-sm text-gray-800">
          ⚠️ <strong>Nota:</strong> Mesmo que funcione, usar conteúdo de terceiros pode:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
          <li>Violar direitos autorais</li>
          <li>Deixar seu site lento</li>
          <li>Quebrar sem aviso se o G1 mudar algo</li>
          <li>Não funcionar em produção</li>
        </ul>
      </div>
    </div>
  );
}
