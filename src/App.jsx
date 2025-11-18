import React from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded bg-amber-500" />
            <span className="font-semibold text-white">Saffron & Flame</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#menu" className="text-slate-300 hover:text-white">Menu</a>
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Visit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Saffron & Flame. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Made with seasonal ingredients and lots of heat.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
