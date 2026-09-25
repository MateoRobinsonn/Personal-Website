import { useEffect, useRef } from 'react'

/**
 * Adds `.is-visible` to an element the first time it scrolls into view,
 * triggering the `.reveal` CSS transition (see index.css). Backed by a
 * single shared IntersectionObserver per hook instance instead of scroll
 * listeners, so it stays cheap on lower-end hardware.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Users who've asked for reduced motion just see the content directly.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
