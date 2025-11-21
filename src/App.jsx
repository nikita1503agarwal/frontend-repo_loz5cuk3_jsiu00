import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Sobre, Servicos, Projetos, Contato } from './components/Sections'
import MouseAura from './components/MouseAura'

function App() {
  return (
    <div id="home" className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <MouseAura />

      <main className="pt-24">
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Contato />
      </main>

      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Vibes — estética e performance.
      </footer>
    </div>
  )
}

export default App
