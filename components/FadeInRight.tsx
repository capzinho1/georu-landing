'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FadeInRightProps {
  children: React.ReactNode
  delay?: number
}

export function FadeInRight({ children, delay = 0 }: FadeInRightProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(ref.current, 
      { 
        opacity: 0, 
        x: 50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [delay])

  return <div ref={ref}>{children}</div>
}
