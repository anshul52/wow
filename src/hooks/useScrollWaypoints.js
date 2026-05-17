import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { destinations } from '../data/siteContent'

gsap.registerPlugin(ScrollTrigger, Flip)

export function useScrollWaypoints() {
  const sectionRef = useRef(null)
  const mainRef = useRef(null)
  const initialRef = useRef(null)
  const secondMarkerRef = useRef(null)
  const thirdMarkerRef = useRef(null)
  const cardRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const main = mainRef.current
    const initial = initialRef.current
    const secondMarker = secondMarkerRef.current
    const thirdMarker = thirdMarkerRef.current
    const card = cardRef.current

    if (!section || !main || !initial || !secondMarker || !thirdMarker || !card) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const images = card.querySelectorAll('.waypoints-card__img')
    const captionRegion = card.querySelector('[data-caption-region]')
    const captionSpot = card.querySelector('[data-caption-spot]')
    if (images.length < 3) return undefined

    const waypoints = destinations.waypoints
    const setCaption = (index) => {
      if (!captionRegion || !captionSpot) return
      captionRegion.textContent = waypoints[index].label
      captionSpot.textContent = waypoints[index].sub
    }

    let flipCtx
    let resizeTimer

    const buildTimeline = () => {
      flipCtx?.revert()

      gsap.set(images, { opacity: 0 })
      gsap.set(images[0], { opacity: 1 })
      setCaption(0)

      flipCtx = gsap.context(() => {
        const stateSecond = Flip.getState(secondMarker)
        const stateThird = Flip.getState(thirdMarker)

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: main,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = self.progress > 0.58 ? 2 : self.progress > 0.24 ? 1 : 0
              setCaption(index)
            },
          },
        })

        tl.add(Flip.fit(card, stateSecond, { duration: 1, ease: 'none' }), 0)
          .to(card, { scale: 0.92, duration: 0.35, ease: 'power1.in' }, 0)
          .to(card, { scale: 1, duration: 0.35, ease: 'power1.out' }, 0.65)
          .to(images[0], { opacity: 0, duration: 0.4, ease: 'none' }, 0.45)
          .to(images[1], { opacity: 1, duration: 0.4, ease: 'none' }, 0.45)
          .addLabel('mid', '+=0.5')
          .add(Flip.fit(card, stateThird, { duration: 1, ease: 'none' }), 'mid')
          .to(card, { scale: 0.92, duration: 0.35, ease: 'power1.in' }, 'mid')
          .to(card, { scale: 1, duration: 0.35, ease: 'power1.out' }, 'mid+=0.65')
          .to(images[1], { opacity: 0, duration: 0.4, ease: 'none' }, 'mid+=0.45')
          .to(images[2], { opacity: 1, duration: 0.4, ease: 'none' }, 'mid+=0.45')
      }, section)
    }

    buildTimeline()
    requestAnimationFrame(() => ScrollTrigger.refresh())

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
        buildTimeline()
      }, 150)
    }

    const onImageLoad = () => ScrollTrigger.refresh()
    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', onImageLoad, { once: true })
    })

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      images.forEach((img) => img.removeEventListener('load', onImageLoad))
      flipCtx?.revert()
      gsap.set(card, { clearProps: 'transform' })
    }
  }, [])

  return {
    sectionRef,
    mainRef,
    initialRef,
    secondMarkerRef,
    thirdMarkerRef,
    cardRef,
  }
}
