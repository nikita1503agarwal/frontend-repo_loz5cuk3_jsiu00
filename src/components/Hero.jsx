import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm">
              Soluções digitais com estética moderna
            </h1>
            <p className="mt-5 text-slate-700/80 dark:text-slate-200/80 text-lg">
              Criamos experiências elegantes e performáticas — do conceito ao lançamento.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#servicos" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium bg-slate-900 text-white shadow hover:opacity-90 transition dark:bg-white dark:text-slate-900">
                Nossos serviços
              </a>
              <a href="#projetos" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium bg-white/70 backdrop-blur-md text-slate-900 ring-1 ring-black/10 hover:bg-white transition dark:bg-slate-900/70 dark:text-white dark:ring-white/10">
                Ver projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
