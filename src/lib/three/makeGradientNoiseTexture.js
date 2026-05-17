import * as THREE from 'three'
import { gsap } from 'gsap'

export function makeGradientNoiseTexture(colorA = '#0ae448', colorB = '#7c3aed') {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 256
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createLinearGradient(0, 0, 230, 384)
  gradient.addColorStop(0, colorA)
  gradient.addColorStop(1, colorB)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 256)

  for (let i = 0; i < 4000; i++) {
    const x = Math.floor(gsap.utils.random(0, 256))
    const y = Math.floor(gsap.utils.random(0, 256))
    const alpha = gsap.utils.random(0.02, 0.1)
    ctx.fillStyle = `rgba(0,0,0,${alpha})`
    ctx.fillRect(x, y, 3, 3)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}
