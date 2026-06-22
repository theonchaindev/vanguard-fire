import Link from "next/link";
import Hero from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import ServiceIcon from "@/components/ServiceIcon";
import { services, projects, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-ash/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-fire">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-flame font-semibold uppercase tracking-widest text-sm">
            What we do
          </p>
          <h2 className="mt-3 font-display font-bold uppercase text-4xl md:text-5xl tracking-tight">
            A complete fire safety partner
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Active and passive protection under a single accountable contractor —
            designed, installed and maintained to the latest British Standards.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:border-flame/40 hover:bg-white/[0.05]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ash via-ash/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-flame text-white ring-1 ring-white/20 shadow-lg">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flame opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process — light smoke band */}
      <section className="section-smoke">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-flame font-semibold uppercase tracking-widest text-sm">
              How we work
            </p>
            <h2 className="mt-3 font-display font-bold uppercase text-4xl md:text-5xl tracking-tight text-[#16171b]">
              From survey to certification
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              {
                n: "01",
                t: "Survey & Assess",
                d: "Site survey, fire risk assessment and a clear scope mapped to your building's hazard class.",
              },
              {
                n: "02",
                t: "Engineer & Design",
                d: "Hydraulic calculations, cause-and-effect and fully detailed drawings to British Standards.",
              },
              {
                n: "03",
                t: "Install & Commission",
                d: "Directly employed engineers install and witness-test every system before handover.",
              },
              {
                n: "04",
                t: "Maintain & Certify",
                d: "Planned maintenance, digital records and 24/7 callout keep you compliant year-round.",
              },
            ].map((step) => (
              <StaggerItem key={step.n}>
                <div className="relative h-full rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
                  <span className="font-display text-5xl font-bold text-flame/30">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-tight text-[#16171b]">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52555e]">
                    {step.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-flame font-semibold uppercase tracking-widest text-sm">
              Selected work
            </p>
            <h2 className="mt-3 font-display font-bold uppercase text-4xl md:text-5xl tracking-tight">
              Trusted on critical sites
            </h2>
          </Reveal>
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold hover:border-flame/50 hover:text-flame transition-colors"
            >
              All projects →
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/projects#${p.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-all hover:border-flame/40"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ash/95 via-ash/30 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs font-medium text-white/90">
                    {p.scope}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-white/45">
                    <span>{p.sector}</span>
                    <span>·</span>
                    <span>{p.location}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl uppercase tracking-tight group-hover:text-flame transition-colors">
                    {p.name}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-flame/20 px-8 py-16 md:px-16 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_120%,rgba(225,29,42,0.4),transparent_60%)]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative max-w-2xl">
              <h2 className="font-display font-bold uppercase text-4xl md:text-5xl tracking-tight">
                Know your fire risk in minutes
              </h2>
              <p className="mt-4 text-lg text-white/65">
                Use our in-depth fire protection calculator to estimate water
                demand, detector coverage, suppression agent volume and indicative
                cost for your building.
              </p>
              <Link
                href="/calculator"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-semibold text-white hover:bg-ember transition-colors glow-ring"
              >
                Launch the Calculator →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
