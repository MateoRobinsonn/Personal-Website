import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

/** Fades + slides content in once it scrolls into view. See useReveal(). */
export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal ${className}`} style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}>
      {children}
    </div>
  )
}
