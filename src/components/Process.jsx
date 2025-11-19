export default function Process() {
  const steps = [
    {
      title: 'Concept & Referenties',
      text: 'We vertalen je idee naar schetsen en duidelijke requirements.'
    },
    {
      title: '3D / Foam Constructie',
      text: 'Met 3D-print of EVA-foam bouwen we de basis van je prop of decor.'
    },
    {
      title: 'Afwerking & Painting',
      text: 'Priming, weathering en details voor een magische, duurzame look.'
    }
  ]

  return (
    <section id="werkwijze" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Onze werkwijze</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="p-6 rounded-xl bg-black/40 border border-white/10">
            <div className="text-orange-300 text-sm mb-2">Stap {i + 1}</div>
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-purple-100 mt-2">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
