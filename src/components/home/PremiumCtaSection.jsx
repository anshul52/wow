import { ctaBanner } from '../../data/siteContent'
import { usePremiumCtaReveal } from '../../hooks/usePremiumCtaReveal'
import '../../styles/premium-cta.css'

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path
        d="M1 5.5h9M6 1.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PremiumCtaSection() {
  const sectionRef = usePremiumCtaReveal()
  const { kicker, lede, primary, secondary, stats, title, titleEm } = ctaBanner

  return (
    <section
      ref={sectionRef}
      id="section-cta"
      className="premium-cta"
      aria-labelledby="cta-heading"
    >
      <div className="premium-cta__wrap">
        <div className="premium-cta__card">
          <div className="premium-cta__glow" aria-hidden="true" />

          <div className="premium-cta__content">
            <p className="theme-kicker mb-3" data-cta-reveal>
              {kicker}
            </p>
            <h2 id="cta-heading" className="theme-heading text-3xl md:text-5xl" data-cta-reveal>
              {title}
              <br />
              <em className="theme-heading-em">{titleEm}</em>
            </h2>
            <p className="theme-lede mx-auto mt-4 max-w-lg text-base" data-cta-reveal>
              {lede}
            </p>

            <div className="premium-cta__actions" data-cta-reveal>
              <a href={primary.href} className="btn-primary premium-cta__btn premium-cta__btn--primary">
                {primary.label}
                <ArrowIcon />
              </a>
              <a href={secondary.href} className="btn-ghost premium-cta__btn premium-cta__btn--secondary">
                {secondary.label}
              </a>
            </div>

            <ul className="premium-cta__stats" aria-label="Highlights" data-cta-reveal>
              {stats.map((stat) => (
                <li key={stat.label} className="premium-cta__stat">
                  <span className="premium-cta__stat-value">{stat.value}</span>
                  <span className="premium-cta__stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
