import { useEffect, useState } from 'react'

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async (params = {}) => {
    setLoading(true)
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const q = new URLSearchParams(params).toString()
    const res = await fetch(`${baseUrl}/api/products${q ? `?${q}` : ''}`)
    const data = await res.json()
    setItems(data.items || [])
    setLoading(false)
  }

  const onSearch = (e) => {
    e.preventDefault()
    const params = {}
    if (query) params.q = query
    if (category) params.category = category
    fetchProducts(params)
  }

  return (
    <section id="shop" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Shop</h2>
          <p className="text-purple-100">Bekijk onze nieuwste creaties</p>
        </div>

        <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50"
            placeholder="Zoek op titel, tags..."
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white">
            <option value="">Alle categorieën</option>
            <option value="props">Props</option>
            <option value="accessoires">Accessoires</option>
            <option value="decor">Decor</option>
          </select>
          <button type="submit" className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-semibold">Zoek</button>
        </form>
      </div>

      {loading ? (
        <p className="text-purple-100">Laden...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length === 0 && (
            <p className="col-span-full text-purple-200">Nog geen producten. Kom snel terug!</p>
          )}
          {items.map((p) => (
            <a key={p.id} href={`/#product-${p.id}`} className="group rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-orange-400/50 transition">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/40 to-black flex items-center justify-center text-purple-200">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-sm">Placeholder afbeelding</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold group-hover:text-orange-300 transition">{p.title}</h3>
                <p className="text-purple-200 text-sm line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-bold">€ {p.price?.toFixed ? p.price.toFixed(2) : p.price}</span>
                  <span className={`text-xs px-2 py-1 rounded ${p.in_stock ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>{p.in_stock ? 'Op voorraad' : 'Uitverkocht'}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
