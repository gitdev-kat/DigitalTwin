export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🚀 Digital Twin RAG API</h1>
        <p className="text-xl mb-8">Retrieval-Augmented Generation with Upstash & Groq</p>
        
        <div className="bg-gray-100 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
          <div className="text-left max-w-2xl">
            <p className="mb-4"><strong>GET /api/health</strong> - Health check</p>
            <p className="mb-4"><strong>POST /api/query</strong> - Query the knowledge base</p>
            <p className="mb-4"><strong>POST /api/embed</strong> - Add documents</p>
            <p className="mb-4"><strong>POST /api/reindex</strong> - Reindex from JSON</p>
          </div>
        </div>

        <div className="space-y-4">
          <a href="/api/health" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Health Check
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>GitHub: <a href="https://github.com/gitdev-kat/DigitalTwin" className="text-blue-500 hover:underline">gitdev-kat/DigitalTwin</a></p>
        </div>
      </div>
    </main>
  )
}
