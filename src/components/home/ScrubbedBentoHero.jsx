import { bentoImages } from '../../data/bentoImages'
import { useScrubbedBentoGallery } from '../../hooks/useScrubbedBentoGallery'
import '../../styles/bento-gallery.css'

export default function ScrubbedBentoHero() {
  const { wrapRef, galleryRef } = useScrubbedBentoGallery(true)

  return (
    <section className="relative bg-[#0e100f]" aria-label="Hero gallery">
      <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-10 md:pb-14">
        <div className="max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#0ae448]">
            Scroll to explore
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-[#fffce1] md:text-6xl lg:text-7xl">
            Crafted experiences,
            <span className="block text-[#fffce1]/70">scrubbed into motion</span>
          </h1>
        </div>
      </div>

      <div ref={wrapRef} className="gallery-wrap">
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
