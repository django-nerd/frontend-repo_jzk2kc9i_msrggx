import { Sparkles } from 'lucide-react'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-3 bg-black/40 border border-white/10 text-white px-4 py-2 rounded-full mb-6 backdrop-blur">
          <Sparkles className="w-4 h-4 text-orange-300" />
          <span className="text-sm">Fantastische props, handgemaakt in Nederland</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          The Arcane Lab
        </h1>
        <p className="mt-4 text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
          Unieke props, accessoires en decorstukken geïnspireerd door fantasy, games en anime. 
          Met 3D-print, EVA-foam en ambacht brengen we verbeelding tot leven.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onShopClick} className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-semibold shadow-lg shadow-orange-500/20 transition">
            Bekijk producten
          </button>
          <a href="#werkwijze" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition">
            Hoe we werken
          </a>
        </div>
      </div>
    </section>
  )
}
