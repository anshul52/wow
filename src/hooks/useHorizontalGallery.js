import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHorizontalGallery(wrapperRef, stripRef) {
  useLayoutEffect(() => {
    const section = wrapperRef.current
    const strip = stripRef.current
    if (!section || !strip) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let stripWidth = 0
    let scrollLength = 0

    const refresh = () => {
      stripWidth = strip.scrollWidth
      scrollLength = stripWidth - window.innerWidth
    }

    refresh()

    const ctx = gsap.context(() => {
      gsap.to(strip, {
        x: () => -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: true,
          start: 'center center',
          end: () => `+=${stripWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    ScrollTrigger.addEventListener('refreshInit', refresh)

    const images = strip.querySelectorAll('img')
    const onImageLoad = () => {
      refresh()
      ScrollTrigger.refresh()
    }

    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', onImageLoad, { once: true })
    })

    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', refresh)
      images.forEach((img) => img.removeEventListener('load', onImageLoad))
      ctx.revert()
    }
  }, [wrapperRef, stripRef])
}
