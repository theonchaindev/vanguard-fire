import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Fire protection case studies across data centres, warehousing, residential, industrial, retail and healthcare.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Protection that performs"
        subtitle="A selection of recent installations where reliability, programme and compliance mattered most."
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-28">
        <Stagger className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <article
                id={p.slug}
                className="scroll-mt-28 group h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] transition-colors hover:border-flame/40"
              >
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `radial-gradient(120% 130% at 15% 0%, ${p.accent}45, transparent 55%), linear-gradient(160deg,#161616,#0a0a0a)`,
                  }}
                >
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute top-5 left-6 flex gap-2">
                    <span className="rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs font-medium text-white/85">
                      {p.sector}
                    </span>
                    <span className="rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs font-medium text-white/85">
                      {p.year}
                    </span>
                  </div>
                  <span
                    className="absolute bottom-5 left-6 font-display text-2xl uppercase tracking-tight"
                    style={{ color: p.accent }}
                  >
                    {p.scope}
                  </span>
                </div>

                <div className="p-8">
                  <div className="text-xs text-white/45">{p.location}</div>
                  <h2 className="mt-1 font-display text-2xl uppercase tracking-tight group-hover:text-flame transition-colors">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-white/60 leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/8 pt-5">
                    {p.stat.map((st) => (
                      <div key={st.label}>
                        <div className="font-display text-2xl font-bold text-gradient-fire">
                          {st.value}
                        </div>
                        <div className="mt-0.5 text-xs text-white/45">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 text-center">
          <p className="text-white/60">
            Want to discuss a project of your own?
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-semibold text-white hover:bg-ember transition-colors glow-ring"
          >
            Start a conversation →
          </Link>
        </Reveal>
      </div>
    </>
  );
}
