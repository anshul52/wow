import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { makeGradientNoiseTexture } from '../lib/three/makeGradientNoiseTexture'

gsap.registerPlugin(ScrollTrigger, Flip)

export function useScrollWaypoints() {
  const sectionRef = useRef(null)
  const mainRef = useRef(null)
  const initialRef = useRef(null)
  const secondMarkerRef = useRef(null)
  const thirdMarkerRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const main = mainRef.current
    const initial = initialRef.current
    const secondMarker = secondMarkerRef.current
    const thirdMarker = thirdMarkerRef.current

    if (!section || !main || !initial || !secondMarker || !thirdMarker) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let flipCtx
    let resizeTimer
    let renderer
    let scene
    let camera
    let mesh
    let canvasEl

    const render = () => {
      if (!renderer) return
      renderer.render(scene, camera)
    }

    const onResize = () => {
      if (!renderer || !canvasEl) return
      const rect = canvasEl.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      renderer.setPixelRatio(1)
      renderer.setSize(Math.max(1, rect.width * dpr), Math.max(1, rect.height * dpr), false)
      camera.aspect = (rect.width || 1) / (rect.height || 1)
      camera.updateProjectionMatrix()
    }

    const buildTimeline = () => {
      if (!canvasEl || !mesh) return

      flipCtx?.revert()

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
          },
        })

        tl.add(Flip.fit(canvasEl, stateSecond, { duration: 1, ease: 'none' }), 0)
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI}`, duration: 1, ease: 'none' }, '<')
          .addLabel('mid', '+=0.5')
          .add(Flip.fit(canvasEl, stateThird, { duration: 1, ease: 'none' }), 'mid')
          .to(mesh.rotation, { x: `+=${Math.PI}`, y: `+=${Math.PI}`, duration: 1, ease: 'none' }, '<')
      }, section)
    }

    const initThree = (canvas) => {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.outputColorSpace = THREE.SRGBColorSpace

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
      camera.position.set(0, 0, 3)

      const material = new THREE.MeshBasicMaterial({
        map: makeGradientNoiseTexture('#c9a227', '#7c3aed'),
      })
      mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
      scene.add(mesh)

      gsap.ticker.add(render)
      onResize()
      buildTimeline()
    }

    canvasEl = document.createElement('canvas')
    canvasEl.className = 'waypoints-box'
    initial.appendChild(canvasEl)
    initThree(canvasEl)
    requestAnimationFrame(() => ScrollTrigger.refresh())

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        onResize()
        ScrollTrigger.refresh()
        buildTimeline()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      flipCtx?.revert()
      gsap.ticker.remove(render)

      if (mesh) {
        mesh.geometry?.dispose()
        mesh.material?.map?.dispose()
        mesh.material?.dispose()
      }

      renderer?.dispose()
      canvasEl?.remove()
    }
  }, [])

  return {
    sectionRef,
    mainRef,
    initialRef,
    secondMarkerRef,
    thirdMarkerRef,
  }
}
