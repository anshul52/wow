import { useScrollWaypoints } from '../../hooks/useScrollWaypoints'
import '../../styles/scroll-waypoints.css'

export default function ScrollWaypointsSection() {
  const { sectionRef, mainRef, initialRef, secondMarkerRef, thirdMarkerRef } = useScrollWaypoints()

  return (
    <section ref={sectionRef} className="waypoints-section" aria-label="Scroll waypoints">
      <div className="waypoints-intro">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#0ae448]">
          Three.js × Flip
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-[#fffce1] md:text-5xl">
          Scroll waypoints
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#fffce1]/65">
          A 3D cube hops between markers as you scroll — scrubbed motion with synchronized rotation,
          matching the GSAP demo feel.
        </p>
      </div>

      <div className="waypoints-spacer">Keep scrolling</div>

      <div ref={mainRef} className="waypoints-main">
        <div ref={initialRef} className="waypoints-container waypoints-container--initial">
          <span className="waypoints-label">Start</span>
        </div>

        <div className="waypoints-container waypoints-container--second">
          <div ref={secondMarkerRef} className="waypoints-marker" />
          <span className="waypoints-label">Waypoint 01</span>
        </div>

        <div className="waypoints-container waypoints-container--third">
          <div ref={thirdMarkerRef} className="waypoints-marker" />
          <span className="waypoints-label">Waypoint 02</span>
        </div>
      </div>
    </section>
  )
}
