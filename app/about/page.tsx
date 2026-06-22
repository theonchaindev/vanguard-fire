import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "27 years of engineered fire protection. Directly employed engineers, third-party accreditation and a safety-first culture.",
};

const values = [
  {
    t: "Life safety first",
    d: "Every decision is measured against one question: does this keep people safe? Compliance is the floor, not the ceiling.",
  },
  {
    t: "Engineered, not estimated",
    d: "Systems are hydraulically calculated and fully designed in-house — never specified by guesswork or rule of thumb.",
  },
  {
    t: "Directly employed",
    d: "Our engineers are on our payroll, not subcontracted, so accountability and quality stay with us from survey to sign-off.",
  },
  {
    t: "Whole-life support",
    d: "We don't disappear at handover. Planned maintenance and 24/7 callout keep your systems reliable for decades.",
  },
];

const accreditations = ["BAFE SP203", "FIA", "LPCB", "ISO 9001", "ISO 45001", "SafeContractor"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="SurturFire Fire Protection"
        subtitle="A specialist fire engineering contractor protecting UK commercial, industrial and high-risk assets since 1997."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
              Built around reliability
            </h2>
            <div className="mt-5 space-y-4 text-white/60 leading-relaxed">
              <p>
                SurturFire was founded on a simple frustration: too many fire
                systems were installed to tick a box and never thought about
                again. We set out to be the contractor that engineers protection
                properly and stands behind it for the life of the building.
              </p>
              <p>
                Today we deliver active and passive fire protection across data
                centres, logistics, healthcare, residential and heavy industry —
                from a single accountable team that designs, installs,
                commissions and maintains everything we touch.
              </p>
              <p>
                Our work is third-party certificated and independently audited,
                so the certificate on your wall actually means something.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
                >
                  <div className="font-display text-4xl font-bold text-gradient-fire">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
            What we stand for
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <StaggerItem key={v.t}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-8">
                <h3 className="font-display text-xl uppercase tracking-tight text-flame">
                  {v.t}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-smoke">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          <Reveal className="text-center">
            <p className="text-flame font-semibold uppercase tracking-widest text-sm">
              Accreditations
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-[#16171b]">
              Independently certificated
            </h2>
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
            {accreditations.map((a) => (
              <StaggerItem key={a}>
                <span className="rounded-full border border-black/10 bg-white px-6 py-3 font-display uppercase tracking-wide text-[#16171b] shadow-sm">
                  {a}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
            Let's protect what matters
          </h2>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-semibold text-white hover:bg-ember transition-colors glow-ring"
          >
            Get in touch →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
