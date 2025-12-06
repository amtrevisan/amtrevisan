import { useRef, useEffect, useState } from 'react'

export default function Hexacopter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity and transform based on scroll progress
  const opacity = Math.max(0, Math.min(1, scrollProgress * 2))
  const transform = `translateX(${(1 - scrollProgress) * 50}px) scale(${0.8 + scrollProgress * 0.2})`

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <div
        className="w-full h-full transition-all duration-300 ease-out"
        style={{
          opacity,
          transform,
        }}
      >
        <iframe
          title="Hexacopter - Tarot T810"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/d8f7095c811e41dd9430653c981d1f86/embed"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}
