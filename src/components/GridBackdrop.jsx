import React from 'react'

// Subtle modern grid background with optional gradient fade-out
export default function GridBackdrop({ fade="bottom" }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%),_linear-gradient(transparent,transparent),_linear-gradient(#e5e7eb_1px,transparent_1px),_linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:100%_100%,100%_100%,24px_24px,24px_24px] [background-position:center_center,center_center,center_center,center_center] dark:[background:radial-gradient(circle_at_center,rgba(30,41,59,0.35),transparent_40%),_linear-gradient(transparent,transparent),_linear-gradient(#1f2937_1px,transparent_1px),_linear-gradient(90deg,#1f2937_1px,transparent_1px)]" />

      {/* Fade mask to transition into clean matte area */}
      {fade === 'bottom' && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />
      )}
      {fade === 'top' && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-t from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />
      )}
    </div>
  )
}
