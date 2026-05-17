import { bentoImages } from '../../data/bentoImages'
import { attractions, hero } from '../../data/siteContent'
import { useScrubbedBentoGallery } from '../../hooks/useScrubbedBentoGallery'
import '../../styles/bento-gallery.css'

export default function ScrubbedBentoHero() {
  const { wrapRef, galleryRef } = useScrubbedBentoGallery(true)

  return (
    <section id="section-hero" className="relative bg-[#080706] pt-20" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-10 pt-28 md:pb-14">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c9a227]">
            <span>{hero.eyebrow}</span>
          </p>
          <h1 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-[#fffce1] md:text-6xl lg:text-7xl">
            {hero.lines[0]}
            <span className="block italic text-[#fffce1]/85">{hero.lines[1]}</span>
            <span className="block">{hero.lines[2]}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-[#fffce1]/60 md:text-lg">{hero.sub}</p>

          <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="rounded-full bg-[#c9a227] px-6 py-2.5 text-sm font-semibold text-[#080706] transition-colors hover:bg-[#dbb84a]"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-full border border-[#fffce1]/20 px-6 py-2.5 text-sm font-medium text-[#fffce1]/80 transition-colors hover:border-[#fffce1]/40 hover:text-[#fffce1]"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-10 md:gap-14" aria-hidden="true">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-serif text-2xl text-[#fffce1] md:text-3xl">{stat.value}</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#fffce1]/45">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fffce1]/40">
            {attractions.kicker} · {attractions.title} {attractions.titleEm}
          </p>
        </div>
      </div>

      <div ref={wrapRef} id="section-bento" className="gallery-wrap" aria-label={attractions.kicker}>
        <div ref={galleryRef} className="gallery gallery--bento gallery--switch">
          {bentoImages.map((image) => (
            <div key={image.src} className="gallery__item">
              <img src={image.src} alt={image.alt} loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
