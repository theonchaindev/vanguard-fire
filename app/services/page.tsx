import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceIcon from "@/components/ServiceIcon";
import { Reveal } from "@/components/Motion";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sprinkler systems, gaseous suppression, fire detection, passive protection, extinguishers and maintenance — engineered to British Standards.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Active & passive fire protection"
        subtitle="One accountable contractor for design, installation, commissioning and maintenance across every discipline of fire safety."
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-28 space-y-6">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className="scroll-mt-28 grid gap-8 rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-12 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-flame/10 text-flame ring-1 ring-flame/20">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </div>
                  <span className="font-display text-5xl font-bold text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-3xl md:text-4xl uppercase tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-2 text-flame font-medium">{s.tagline}</p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {s.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 font-semibold text-white hover:bg-ember transition-colors"
                >
                  Enquire about {s.title.split(" ")[0].toLowerCase()} →
                </Link>
              </div>

              <div className="space-y-5">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ash/70 to-transparent" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
                        <span className="text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
