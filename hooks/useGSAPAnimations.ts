'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useGSAPAnimations() {
  useEffect(() => {
    // Create a timeline for smooth section reveals
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section, index) => {
      // Main section container animation
      gsap.fromTo(
        section,
        { 
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Stagger reveal for direct children elements
      const children = section.querySelectorAll('.animate-on-scroll')
      
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { 
            opacity: 0, 
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })

    // Add a subtle scale effect for cards on scroll
    const cards = document.querySelectorAll('.bento-card')
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { 
          scale: 0.95,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
}
