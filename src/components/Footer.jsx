export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-purple-100">
        <div>
          <p className="font-semibold text-white">The Arcane Lab</p>
          <p className="text-sm">KVK / Adres (invullen) • info@thearcanelab.nl</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/" target="_blank" className="hover:text-orange-300">Instagram</a>
          <a href="https://tiktok.com/@" target="_blank" className="hover:text-orange-300">TikTok</a>
          <a href="mailto:info@thearcanelab.nl" className="hover:text-orange-300">E-mail</a>
        </div>
      </div>
    </footer>
  )
}
