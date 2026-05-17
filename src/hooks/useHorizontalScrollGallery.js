import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHorizontalScrollGallery() {
  const sectionRef = useRef(null)
  const galleryRef = useRef(null)
  const stripRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const gallery = galleryRef.current
    const strip = stripRef.current

    if (!section || !gallery || !strip) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let pinWrapWidth = 0
    let horizontalScrollLength = 0

    const refresh = () => {
      pinWrapWidth = strip.scrollWidth
      horizontalScrollLength = pinWrapWidth - window.innerWidth
    }

    refresh()

    const ctx = gsap.context(() => {
      gsap.to(strip, {
        x: () => -horizontalScrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: gallery,
          pin: gallery,
          scrub: true,
          start: 'center center',
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    ScrollTrigger.addEventListener('refreshInit', refresh)

    const onImageLoad = () => ScrollTrigger.refresh()
    const images = strip.querySelectorAll('img')
    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', onImageLoad, { once: true })
    })

    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150)
    }

    window.addEventListener('resize', handleResize)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.removeEventListener('refreshInit', refresh)
      images.forEach((img) => img.removeEventListener('load', onImageLoad))
      ctx.revert()
    }
  }, [])

  return { sectionRef, galleryRef, stripRef }
}
