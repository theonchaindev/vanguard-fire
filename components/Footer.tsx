import Link from "next/link";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/services#suppression", label: "Fire Suppression" },
      { href: "/services#detection", label: "Fire Detection" },
      { href: "/services#extinguishers", label: "Fire Extinguishers" },
      { href: "/services#emergency-lighting", label: "Emergency Lighting" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/projects", label: "Projects" },
      { href: "/calculator", label: "Fire Calculator" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ash/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="/brand/surturfire-logo.png"
                alt="Surtur Fire"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Trusted UK experts in the supply, maintenance and design of fire
              safety systems — fire suppression, detection, extinguishers and
              emergency lighting — to safeguard against the dangers of fire.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["BAFE", "Safe Contractor", "LPCG", "FIA"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                >
                  {b}
                </span>
              ))}
            </div>
            <address className="mt-5 not-italic text-sm text-white/60 space-y-1">
              <p>22-24 Harborough Road, Northampton, NN2 7AZ</p>
              <p>
                <a href="tel:+447843841219" className="hover:text-flame">
                  +44 7843 841219
                </a>{" "}
                ·{" "}
                <a href="mailto:sales@surturfire.com" className="hover:text-flame">
                  sales@surturfire.com
                </a>
              </p>
            </address>
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
            © {new Date().getFullYear()} Surtur Fire Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Company Registration No: 14030343 · VAT Registration No: 410913924
          </p>
        </div>
      </div>
    </footer>
  );
}
