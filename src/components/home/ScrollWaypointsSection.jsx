import { destinations } from '../../data/siteContent'
import { useScrollWaypoints } from '../../hooks/useScrollWaypoints'
import '../../styles/scroll-waypoints.css'

export default function ScrollWaypointsSection() {
  const { sectionRef, mainRef, initialRef, secondMarkerRef, thirdMarkerRef, cardRef } =
    useScrollWaypoints()

  const [start, second, third] = destinations.waypoints

  return (
    <section
      ref={sectionRef}
      id="section-destinations"
      className="waypoints-section"
      aria-label="Destinations"
    >
      <div className="waypoints-intro">
        <p className="theme-kicker mb-3">{destinations.kicker}</p>
        <h2 className="theme-heading text-3xl md:text-5xl">
          {destinations.title}
          <br />
          <em className="theme-heading-em">{destinations.titleEm}</em>
        </h2>
        <p className="theme-lede mx-auto mt-4 max-w-xl text-base">{destinations.hint}</p>
      </div>

      <div className="waypoints-spacer">Keep scrolling</div>

      <div ref={mainRef} className="waypoints-main">
        <div ref={initialRef} className="waypoints-container waypoints-container--initial">
          <article ref={cardRef} className="waypoints-card" aria-live="polite">
            {destinations.waypoints.map((waypoint, index) => (
              <img
                key={waypoint.label}
                className="waypoints-card__img"
                src={waypoint.image}
                alt={waypoint.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
            <div className="waypoints-card__shade" aria-hidden="true" />
            <div className="waypoints-card__caption">
              <span className="waypoints-card__region" data-caption-region>
                {start.label}
              </span>
              <span className="waypoints-card__spot" data-caption-spot>
                {start.sub}
              </span>
            </div>
          </article>
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
