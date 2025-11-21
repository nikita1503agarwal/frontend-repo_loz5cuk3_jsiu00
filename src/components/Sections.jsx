import React from 'react'
import GridBackdrop from './GridBackdrop'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="absolute inset-0">
        <GridBackdrop fade="bottom" />
      </div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">Sobre nós</h2>
        <p className="mt-6 max-w-3xl text-slate-700/80 dark:text-slate-200/80">
          Somos um estúdio digital focado em estética, performance e resultado. Utilizamos tecnologia moderna para criar experiências envolventes e eficazes.
        </p>
      </div>
    </section>
  )
}

export function Servicos() {
  const items = [
    { title: 'Branding & UI', desc: 'Identidade visual e interfaces elegantes.' },
    { title: 'Web Apps', desc: 'Aplicações rápidas e responsivas.' },
    { title: 'E-commerce', desc: 'Lojas otimizadas para conversão.' },
    { title: 'Landing Pages', desc: 'Páginas que encantam e performam.' },
  ]
  return (
    <section id="servicos" className="relative py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0">
        <GridBackdrop fade="top" />
      </div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Nossos serviços</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 shadow-sm hover:shadow-md transition">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-white/10" />
              <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Sob medida para o seu negócio</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projetos() {
  const projects = [
    { name: 'Aurora', tag: 'UI/UX', tone: 'from-rose-500/20 to-rose-500/0' },
    { name: 'Nebula', tag: 'Web App', tone: 'from-sky-500/20 to-sky-500/0' },
    { name: 'Eclipse', tag: 'E-commerce', tone: 'from-violet-500/20 to-violet-500/0' },
  ]
  return (
    <section id="projetos" className="relative py-28">
      <div className="absolute inset-0">
        <GridBackdrop fade="bottom" />
      </div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Nossos projetos</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
              <div className={`h-40 bg-gradient-to-b ${p.tone}`} />
              <div className="p-6">
                <div className="text-sm text-slate-500 dark:text-slate-400">{p.tag}</div>
                <div className="text-lg font-semibold mt-1">{p.name}</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Projeto focado em estética clean, microinterações e alta performance.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contato() {
  return (
    <section id="contato" className="relative py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Contato</h2>
        <p className="mt-4 text-slate-700/80 dark:text-slate-200/80 max-w-2xl">Pronto para elevar sua presença digital? Conte um pouco sobre seu projeto.</p>
        <form className="mt-10 grid gap-4 max-w-2xl">
          <input className="rounded-xl px-4 py-3 bg-white/80 dark:bg-slate-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 outline-none focus:ring-sky-500/40" placeholder="Seu nome" />
          <input className="rounded-xl px-4 py-3 bg-white/80 dark:bg-slate-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 outline-none focus:ring-sky-500/40" placeholder="Seu e-mail" />
          <textarea rows={5} className="rounded-xl px-4 py-3 bg-white/80 dark:bg-slate-900/60 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 outline-none focus:ring-sky-500/40" placeholder="Conte-nos sobre seu projeto" />
          <button className="mt-2 inline-flex justify-center rounded-xl px-5 py-3 text-sm font-medium bg-slate-900 text-white shadow hover:opacity-90 transition dark:bg-white dark:text-slate-900">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
