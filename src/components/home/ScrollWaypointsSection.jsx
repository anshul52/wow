import { destinations } from '../../data/siteContent'
import { useScrollWaypoints } from '../../hooks/useScrollWaypoints'
import '../../styles/scroll-waypoints.css'

export default function ScrollWaypointsSection() {
  const { sectionRef, mainRef, initialRef, secondMarkerRef, thirdMarkerRef } = useScrollWaypoints()

  const [start, second, third] = destinations.waypoints

  return (
    <section
      ref={sectionRef}
      id="section-destinations"
      className="waypoints-section"
      aria-label="Destinations"
    >
      <div className="waypoints-intro">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#c9a227]">
          {destinations.kicker}
        </p>
        <h2 className="font-serif text-3xl font-normal tracking-tight text-[#fffce1] md:text-5xl">
          {destinations.title}
          <br />
          <em className="not-italic text-[#fffce1]/75">{destinations.titleEm}</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#fffce1]/60">{destinations.hint}</p>
      </div>

      <div className="waypoints-spacer">Keep scrolling</div>

      <div ref={mainRef} className="waypoints-main">
        <div ref={initialRef} className="waypoints-container waypoints-container--initial">
          <span className="waypoints-label">{start.label}</span>
          <span className="waypoints-sublabel">{start.sub}</span>
        </div>

        <div className="waypoints-container waypoints-container--second">
          <div ref={secondMarkerRef} className="waypoints-marker" />
          <span className="waypoints-label">{second.label}</span>
          <span className="waypoints-sublabel">{second.sub}</span>
        </div>

        <div className="waypoints-container waypoints-container--third">
          <div ref={thirdMarkerRef} className="waypoints-marker" />
          <span className="waypoints-label">{third.label}</span>
          <span className="waypoints-sublabel">{third.sub}</span>
        </div>
      </div>
    </section>
  )
}
