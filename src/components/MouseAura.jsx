import React, { useEffect, useRef } from 'react'

// Mouse-following aura: shadow in light mode, glow in dark mode
export default function MouseAura() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (el) {
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
      }
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 [--mx:50%] [--my:50%]"
    >
      {/* Light mode: soft shadow */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 left-[var(--mx)] top-[var(--my)] size-[36vmin] rounded-full blur-2xl bg-black/10 mix-blend-multiply dark:hidden"
      />
      {/* Dark mode: glow */}
      <div
        className="hidden dark:block absolute -translate-x-1/2 -translate-y-1/2 left-[var(--mx)] top-[var(--my)] size-[36vmin] rounded-full blur-3xl bg-gradient-to-br from-rose-500/25 via-fuchsia-500/20 to-sky-500/25"
      />
    </div>
  )
}
