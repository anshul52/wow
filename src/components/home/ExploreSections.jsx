import { brand, categories, emirates, packages } from '../../data/siteContent'

function SectionHeading({ kicker, title, titleEm, lede, id }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#c9a227]">{kicker}</p>
      <h2 id={id} className="font-serif text-3xl font-normal tracking-tight text-[#fffce1] md:text-5xl">
        {title}
        <br />
        <em className="not-italic text-[#fffce1]/75">{titleEm}</em>
      </h2>
      {lede && <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#fffce1]/60">{lede}</p>}
    </div>
  )
}

export default function ExploreSections() {
  return (
    <>
      <section
        id="section-stacked"
        className="border-t border-[#fffce1]/10 bg-[#0a0908] px-6 py-20 md:px-10 md:py-28"
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
            <article
              key={item.title}
              className="group overflow-hidden rounded-xl border border-[#fffce1]/10 bg-[#121110]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#080706]/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#c9a227] backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#c9a227]">
                  {item.badge}
                </span>
                <h3 className="mt-2 font-serif text-xl text-[#fffce1]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#fffce1]/55">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="section-packages"
        className="border-t border-[#fffce1]/10 bg-[#16171d] px-6 py-20 md:px-10 md:py-28"
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
            <article
              key={pkg.title}
              className="flex flex-col rounded-xl border border-[#fffce1]/10 bg-[#0e100f] p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#c9a227]/15 px-3 py-1 text-xs font-semibold text-[#c9a227]">
                  {pkg.badge}
                </span>
                <span className="text-sm text-[#fffce1]/45">{pkg.days} days</span>
              </div>
              <h3 className="font-serif text-2xl text-[#fffce1]">{pkg.title}</h3>
              <p className="mt-2 text-lg font-medium text-[#c9a227]">{pkg.price}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-[#fffce1]/10 pt-5">
                {pkg.stops.map((stop) => (
                  <li key={stop} className="flex gap-2 text-sm text-[#fffce1]/60">
                    <span className="text-[#c9a227]" aria-hidden="true">
                      →
                    </span>
                    {stop}
                  </li>
                ))}
              </ul>
              <a
                href="#section-packages"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a227] px-5 py-2.5 text-sm font-semibold text-[#080706] transition-colors hover:bg-[#dbb84a]"
              >
                {brand.bookCta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="section-uae"
        className="border-t border-[#fffce1]/10 bg-[#0a0908] px-6 py-20 md:px-10 md:py-28"
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
              className="rounded-xl border border-[#fffce1]/10 bg-[#121110] p-6 transition-colors hover:border-[#c9a227]/30"
            >
              <h3 className="font-serif text-2xl text-[#fffce1]">{item.name}</h3>
              <p className="mt-1 text-sm text-[#fffce1]/55">{item.tagline}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[#c9a227]">
                Best time · {item.bestTime}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-[#fffce1]/10 px-2.5 py-1 text-xs text-[#fffce1]/65"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-md text-center text-sm tracking-wide text-[#fffce1]/40">
          {brand.tagline}
        </p>
      </section>
    </>
  )
}
