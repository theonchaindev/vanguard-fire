import Link from "next/link";
import FlameMark from "./FlameMark";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/services#sprinklers", label: "Sprinkler Systems" },
      { href: "/services#suppression", label: "Gas Suppression" },
      { href: "/services#detection", label: "Detection & Alarms" },
      { href: "/services#passive", label: "Passive Protection" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/projects", label: "Projects" },
      { href: "/calculator", label: "Risk Calculator" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ash/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <FlameMark className="h-8 w-8" />
              <span className="font-display font-bold tracking-tight text-xl uppercase">
                Vanguard<span className="text-flame">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Engineered fire protection for commercial, industrial and
              high-risk environments. Design, installation, commissioning and
              lifetime maintenance — all under one roof.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["BAFE SP203", "FIA Member", "LPCB", "ISO 9001"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display uppercase tracking-wide text-sm text-white/90">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/55 hover:text-flame transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Vanguard Fire Protection Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            24/7 Emergency Callout ·{" "}
            <a href="tel:+448000000000" className="text-flame hover:underline">
              0800 000 0000
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
