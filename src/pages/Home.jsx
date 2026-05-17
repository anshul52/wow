import ScrubbedBentoHero from "../components/home/ScrubbedBentoHero";
import ScrollWaypointsSection from "../components/home/ScrollWaypointsSection";
import HorizontalGallerySection from "../components/home/HorizontalGallerySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e100f] text-[#fffce1]">
      <ScrubbedBentoHero />
      <ScrollWaypointsSection />
      <HorizontalGallerySection />

      <section className="border-t border-[#fffce1]/10 bg-[#16171d] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-medium tracking-tight md:text-4xl">
            Ready for your next chapter
          </h2>
          <p className="text-lg leading-relaxed text-[#fffce1]/70">
            The homepage foundation is in place — hero bento scrub, Three.js
            waypoint hops, and room for product stories, CTAs, and navigation.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3">
          {[
            {
              title: "Scroll-scrubbed",
              body: "Animation progress is tied directly to scroll position for precise control.",
            },
            {
              title: "Flip morphing",
              body: "Tiles and canvases transition between layout states without jank.",
            },
            {
              title: "Performance-first",
              body: "GPU-friendly transforms, debounced resize, and scoped ScrollTriggers.",
            },
          ].map((item) => (
            <article key={item.title}>
              <h3 className="mb-3 text-xl font-medium text-[#0ae448]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[#fffce1]/70">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
