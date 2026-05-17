import { bentoImages } from "../../data/bentoImages";
import { attractions, hero } from "../../data/siteContent";
import { useScrubbedBentoGallery } from "../../hooks/useScrubbedBentoGallery";
import "../../styles/bento-gallery.css";

export default function ScrubbedBentoHero() {
  const { wrapRef, galleryRef } = useScrubbedBentoGallery(true);

  return (
    <section
      id="section-hero"
      className="relative bg-[var(--color-bg-hero)] pt-20"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-10 pt-28 md:pb-14">
        {/* <div className="hero-scrim absolute inset-0" aria-hidden="true" /> */}
        <div className="relative max-w-4xl text-center">
          <p className="theme-kicker mb-4">
            <span>{hero.eyebrow}</span>
          </p>
          <h1 className="theme-heading text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            {hero.lines[0]}
            <span className="block italic text-[var(--color-text-muted)]">
              {hero.lines[1]}
            </span>
            <span className="block">{hero.lines[2]}</span>
          </h1>
          <p className="theme-lede mx-auto mt-5 max-w-lg text-base md:text-lg">
            {hero.sub}
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={hero.ctaPrimary.href} className="btn-primary px-6 py-2.5">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn-ghost px-6 py-2.5">
              {hero.ctaSecondary.label}
            </a>
          </div>

          <div
            className="mt-10 flex justify-center gap-10 md:gap-14"
            aria-hidden="true"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="theme-heading block text-2xl md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
            {attractions.kicker} · {attractions.title} {attractions.titleEm}
          </p>
        </div>
      </div>

      <div
        ref={wrapRef}
        id="section-bento"
        className="gallery-wrap"
        aria-label={attractions.kicker}
      >
        <div
          ref={galleryRef}
          className="gallery gallery--bento gallery--switch"
        >
          {bentoImages.map((image) => (
            <div key={image.src} className="gallery__item">
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
