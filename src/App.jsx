import { useRef } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Process from './components/Process'
import Footer from './components/Footer'

function App() {
  const shopRef = useRef(null)
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0412] via-[#140a24] to-[#0a0412]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(249,115,22,0.12),transparent_40%)]" />
      <div className="relative">
        <header className="sticky top-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-orange-400" />
              <span className="text-white font-semibold">The Arcane Lab</span>
            </div>
            <nav className="flex items-center gap-4 text-purple-100">
              <a href="#shop" className="hover:text-orange-300">Shop</a>
              <a href="#werkwijze" className="hover:text-orange-300">Werkwijze</a>
              <a href="#contact" className="hover:text-orange-300">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <Hero onShopClick={scrollToShop} />
          <ProductGrid ref={shopRef} />
          <Process />

          <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contact</h2>
                <p className="text-purple-100">Mail: info@thearcanelab.nl</p>
                <p className="text-purple-100">Instagram • TikTok</p>
                <p className="text-purple-100">Adresgegevens (in te vullen)</p>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Nieuwsbrief</h3>
                <p className="text-purple-100 text-sm mb-4">Ontvang updates over nieuwe producten en drops.</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                  <input className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50" placeholder="E-mailadres" />
                  <button className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-semibold">Inschrijven</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
