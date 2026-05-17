import { scrollGallery } from '../../data/siteContent'
import { useHorizontalScrollGallery } from '../../hooks/useHorizontalScrollGallery'
import '../../styles/horizontal-scroll-gallery.css'

export default function HorizontalScrollGallery() {
  const { sectionRef, galleryRef, stripRef } = useHorizontalScrollGallery()

  return (
    <section
      ref={sectionRef}
      id="section-gallery"
      className="horizontal-gallery theme-section px-0"
      aria-label="Photo gallery"
    >
      <div className="horizontal-gallery__intro px-6 md:px-10">
        <p className="theme-kicker mb-3">{scrollGallery.kicker}</p>
        <h2 className="theme-heading text-3xl md:text-5xl">
          {scrollGallery.title}
          <br />
          <em className="theme-heading-em">{scrollGallery.titleEm}</em>
        </h2>
        <p className="theme-lede mx-auto mt-4 max-w-xl text-base">{scrollGallery.lede}</p>
      </div>

      <p className="horizontal-gallery__scroll-hint" aria-hidden="true">
        {scrollGallery.scrollHint}
      </p>

      <div ref={galleryRef} className="horiz-gallery-wrapper" id="portfolio">
        <div ref={stripRef} className="horiz-gallery-strip">
          {scrollGallery.items.map((item, index) => (
            <article key={item.label} className="horiz-gallery-item">
              <div className="horiz-gallery-item__frame">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </div>
              <div className="horiz-gallery-item__caption">
                <h3 className="horiz-gallery-item__label">{item.label}</h3>
                <p className="horiz-gallery-item__meta">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="horizontal-gallery__outro theme-lede text-sm">{scrollGallery.outro}</p>
    </section>
  )
}
