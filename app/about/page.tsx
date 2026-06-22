import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Surtur Fire are trusted UK experts in the supply, maintenance and design of fire safety systems, operating at the highest standards of safety and service.",
};

const values = [
  {
    t: "Highest standards",
    d: "We operate at the highest standards of safety and service, so our clients have the peace of mind and ongoing support their organisation demands.",
  },
  {
    t: "Expertly designed",
    d: "We are experts in the supply, maintenance and design of fire safety systems, tailored to safeguard your premises against the dangers of fire.",
  },
  {
    t: "BAFE qualified",
    d: "Our engineers are BAFE qualified to install, service and maintain your systems — fully certificated and compliant.",
  },
  {
    t: "Ongoing support",
    d: "We don't disappear at handover. We service and maintain your systems to keep you protected and compliant year after year.",
  },
];

const accreditations = ["BAFE", "Safe Contractor", "LPCG", "FIA"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About Surtur Fire"
        subtitle="Protecting people and businesses across the UK — trusted experts in the supply, maintenance and design of fire safety systems."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
              Your safety is our priority
            </h2>
            <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
              <p>
                Trusted by clients across the UK, Surtur Fire are experts in the
                supply, maintenance and design of fire safety systems to
                safeguard against the dangers of fire.
              </p>
              <p>
                From fire suppression and detection to extinguishers and
                emergency lighting, we deliver a complete fire protection service
                for businesses and homes — installing, servicing and maintaining
                systems that suit every type of premises.
              </p>
              <p>
                We operate at the highest standards of safety and service, to
                ensure that our clients have the peace of mind and ongoing
                support that their organisation demands.
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
