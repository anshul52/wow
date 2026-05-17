import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { EasePack } from 'gsap/EasePack'

gsap.registerPlugin(ScrollTrigger, Flip, EasePack)

export function useScrubbedBentoGallery(enabled = true) {
  const wrapRef = useRef(null)
  const galleryRef = useRef(null)

  useLayoutEffect(() => {
    if (!enabled) return undefined

    const galleryElement = galleryRef.current
    const wrapElement = wrapRef.current
    if (!galleryElement || !wrapElement) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let flipCtx
    let resizeTimer

    const createTween = () => {
      const galleryItems = galleryElement.querySelectorAll('.gallery__item')

      flipCtx?.revert()
      galleryElement.classList.remove('gallery--final')

      flipCtx = gsap.context(() => {
        galleryElement.classList.add('gallery--final')
        const flipState = Flip.getState(galleryItems)
        galleryElement.classList.remove('gallery--final')

        const flip = Flip.to(flipState, {
          simple: true,
          ease: 'expoScale(1, 5)',
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: 'center center',
            end: '+=100%',
            scrub: true,
            pin: wrapElement,
            invalidateOnRefresh: true,
          },
        })

        tl.add(flip)

        return () => gsap.set(galleryItems, { clearProps: 'all' })
      }, wrapElement)
    }

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
        createTween()
      }, 150)
    }

    const images = galleryElement.querySelectorAll('img')
    const onImageLoad = () => ScrollTrigger.refresh()

    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', onImageLoad, { once: true })
    })

    createTween()

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      images.forEach((img) => img.removeEventListener('load', onImageLoad))
      flipCtx?.revert()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === galleryElement || st.pin === wrapElement) st.kill()
      })
    }
  }, [enabled])

  return { wrapRef, galleryRef }
}
