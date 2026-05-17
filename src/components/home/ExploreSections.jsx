import { brand, categories, emirates, packages } from '../../data/siteContent'

function SectionHeading({ kicker, title, titleEm, lede, id }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="theme-kicker mb-3">{kicker}</p>
      <h2 id={id} className="theme-heading text-3xl md:text-5xl">
        {title}
        <br />
        <em className="theme-heading-em">{titleEm}</em>
      </h2>
      {lede && <p className="theme-lede mx-auto mt-4 max-w-xl text-base">{lede}</p>}
    </div>
  )
}

export default function ExploreSections() {
  return (
    <>
      <section
        id="section-stacked"
        className="theme-section theme-section--alt px-6 py-20 md:px-10 md:py-28"
        aria-label="Journey categories"
      >
        <SectionHeading
          id="stacked-heading"
          kicker={categories.kicker}
          title={categories.title}
          titleEm={categories.titleEm}
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.items.map((item, index) => (
            <article key={item.title} className="theme-card group overflow-hidden rounded-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-accent)] shadow-sm backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {item.badge}
                </span>
                <h3 className="theme-heading mt-2 text-xl">{item.title}</h3>
                <p className="theme-lede mt-2 text-sm">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="section-packages"
        className="theme-section px-6 py-20 md:px-10 md:py-28"
        aria-label="Travel packages"
      >
        <SectionHeading
          id="pkg-heading"
          kicker={packages.kicker}
          title={packages.title}
          titleEm={packages.titleEm}
          lede={packages.lede}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {packages.items.map((pkg) => (
            <article key={pkg.title} className="theme-card flex flex-col rounded-xl p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[var(--color-accent-bright)]/12 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                  {pkg.badge}
                </span>
                <span className="text-sm text-[var(--color-text-subtle)]">{pkg.days} days</span>
              </div>
              <h3 className="theme-heading text-2xl">{pkg.title}</h3>
              <p className="mt-2 text-lg font-medium text-[var(--color-accent)]">{pkg.price}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-[var(--color-border)] pt-5">
                {pkg.stops.map((stop) => (
                  <li key={stop} className="theme-lede flex gap-2 text-sm">
                    <span className="text-[var(--color-accent)]" aria-hidden="true">
                      →
                    </span>
                    {stop}
                  </li>
                ))}
              </ul>
              <a href="#section-packages" className="btn-primary mt-6 px-5 py-2.5">
                {brand.bookCta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="section-uae"
        className="theme-section theme-section--muted px-6 py-20 md:px-10 md:py-28"
        aria-label="UAE emirates"
      >
        <SectionHeading
          id="uae-heading"
          kicker={emirates.kicker}
          title={emirates.title}
          titleEm={emirates.titleEm}
          lede={emirates.lede}
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {emirates.items.map((item) => (
            <article
              key={item.name}
              className="theme-card rounded-xl p-6 transition-colors hover:border-[var(--color-accent)]/35"
            >
              <h3 className="theme-heading text-2xl">{item.name}</h3>
              <p className="theme-lede mt-1 text-sm">{item.tagline}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
                Best time · {item.bestTime}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-md text-center text-sm tracking-wide text-[var(--color-text-subtle)]">
          {brand.tagline}
        </p>
      </section>
    </>
  )
}
