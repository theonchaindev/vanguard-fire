import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-flame" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
      <Reveal className="max-w-2xl">
        <p className="text-flame font-semibold uppercase tracking-widest text-sm">
          What our clients say
        </p>
        <h2 className="mt-3 font-display font-bold uppercase text-4xl md:text-5xl tracking-tight">
          Trusted, rated &amp; recommended
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <Stars />
              <blockquote className="mt-4 flex-1 text-white/75 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame/15 font-display text-sm text-flame ring-1 ring-flame/20">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="font-display uppercase tracking-tight text-sm">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
