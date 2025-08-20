import { useState } from "react";

const cards = [
  { title: "Violência Física", text: "Agressões físicas, tapas, socos, empurrões ou qualquer ato que cause dor e ferimentos." },
  { title: "Violência Psicológica", text: "Humilhações, ameaças, isolamento e manipulação que abalam a saúde emocional." },
  { title: "Violência Sexual", text: "Estupro, assédio ou qualquer ato sexual sem consentimento." },
  { title: "Violência Patrimonial", text: "Controle ou destruição de bens, documentos, dinheiro e objetos pessoais." },
  { title: "Violência Moral", text: "Difamação, calúnia, injúria e ataques verbais que ferem a honra da mulher." },
  { title: "Assédio e Perseguição", text: "Ato de perseguir, vigiar, ameaçar ou assediar em ambientes públicos ou privados." },
  { title: "Abandono e Negligência", text: "Deixar de prover cuidados básicos à mulher em situação de dependência." },
  { title: "Violência Digital", text: "Ameaças, exposição íntima e perseguições realizadas em ambientes virtuais." },
  { title: "Rede de Proteção", text: "Conjunto de serviços, leis e instituições que garantem apoio à mulher." }
];

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-purple-800">Juntas Contra a Violência</h1>
        <p className="text-lg mt-2 text-gray-600">Informação, acolhimento e caminhos para uma vida sem violência.</p>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg p-6 hover:shadow-xl transition bg-white">
            <h2 className="text-xl font-semibold text-purple-700">{card.title}</h2>
            <p className="mt-2 text-gray-600 text-sm">{card.text}</p>
          </div>
        ))}
      </main>

      <section className="max-w-4xl mx-auto mt-12 p-6 bg-purple-50 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Onde Buscar Ajuda no Espírito Santo</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Delegacias da Mulher (DEAMs)</li>
          <li>Centros de Referência da Mulher</li>
          <li>Casas de acolhimento</li>
          <li>Hospitais de referência</li>
          <li>Telefones úteis: 180, 190, 181, 156</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mt-12 p-6 bg-purple-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Acolhimento e Recuperação</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Serviços de apoio psicológico</li>
          <li>Casas de passagem</li>
          <li>Terapias de grupo</li>
          <li>Programas sociais</li>
        </ul>
      </section>

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white p-4"
      >
        💬
      </button>

      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-purple-600 text-white p-3 font-semibold">Assistente de Apoio</div>
          <div className="p-4 h-64 overflow-y-auto text-sm text-gray-700">
            <p>Olá, eu sou sua assistente de apoio. 🚀</p>
            <p>Posso indicar os serviços mais próximos a você no Espírito Santo, além de contatos de emergência (180, 190, 181).</p>
            <p>Digite sua cidade ou bairro para eu ajudar melhor.</p>
          </div>
          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
