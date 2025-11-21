import React, { useEffect, useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const nv = !dark
    setDark(nv)
    document.documentElement.classList.toggle('dark', nv)
    localStorage.setItem('theme', nv ? 'dark' : 'light')
  }

  const Item = ({ href, children }) => (
    <a href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-4">
        <div className="mt-4 rounded-2xl bg-white/70 dark:bg-slate-950/60 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight">Vibes</a>
            <div className="hidden md:flex items-center gap-1 text-sm text-slate-700 dark:text-slate-200">
              <Item href="#home">Home</Item>
              <Item href="#sobre">Sobre nós</Item>
              <Item href="#servicos">Serviços</Item>
              <Item href="#projetos">Projetos</Item>
              <Item href="#contato">Contato</Item>
              <button onClick={toggleTheme} className="ml-2 p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5">
              <Menu size={18} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 text-sm text-slate-700 dark:text-slate-200">
              <nav className="grid gap-1">
                <Item href="#home">Home</Item>
                <Item href="#sobre">Sobre nós</Item>
                <Item href="#servicos">Serviços</Item>
                <Item href="#projetos">Projetos</Item>
                <Item href="#contato">Contato</Item>
                <button onClick={toggleTheme} className="mt-2 w-fit px-3 py-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5 flex items-center gap-2">
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                  <span>Tema</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
