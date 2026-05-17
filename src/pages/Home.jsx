import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteHeader from '../components/layout/SiteHeader'
import ScrubbedBentoHero from '../components/home/ScrubbedBentoHero'
import ScrollWaypointsSection from '../components/home/ScrollWaypointsSection'
import ExploreSections from '../components/home/ExploreSections'

export default function Home() {
  useLayoutEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    const onLoad = () => {
      requestAnimationFrame(() => requestAnimationFrame(refresh))
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad, { once: true })
    }

    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <ScrubbedBentoHero />
        <ScrollWaypointsSection />
        <ExploreSections />
      </main>
    </>
  )
}
