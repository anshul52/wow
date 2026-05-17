import { useRef } from 'react'
import { galleryImages } from '../../data/galleryImages'
import { useHorizontalGallery } from '../../hooks/useHorizontalGallery'
import '../../styles/horizontal-gallery.css'

export default function HorizontalGallerySection() {
  const wrapperRef = useRef(null)
  const stripRef = useRef(null)

  useHorizontalGallery(wrapperRef, stripRef)

  return (
    <section className="h-gallery-section" aria-label="Horizontal scrolling gallery">
      <div className="h-gallery-intro">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#0ae448]">
          Gallery
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-[#fffce1] md:text-5xl">
          Scroll the collection
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#fffce1]/65">
          Keep scrolling — the gallery pins in place while panels glide horizontally, scrubbed to
          your scroll position.
        </p>
      </div>

      <div className="h-gallery-container">
        <div ref={wrapperRef} className="h-gallery-wrapper">
          <div ref={stripRef} className="h-gallery-strip">
            {galleryImages.map((image) => (
              <div key={image.src} className="h-gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-gallery-outro">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fffce1]/50">
          End of gallery
        </p>
      </div>
    </section>
  )
}
