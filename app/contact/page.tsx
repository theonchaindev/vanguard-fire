"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const services = [
  "Sprinkler Systems",
  "Gas Suppression",
  "Detection & Alarms",
  "Passive Protection",
  "Extinguishers & Risers",
  "Maintenance Contract",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk fire safety"
        subtitle="Tell us about your building and we'll come back within one working day with the right approach — or call our 24/7 line for emergencies."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-flame/15 text-flame ring-1 ring-flame/30 text-3xl">
                  ✓
                </div>
                <h2 className="mt-6 font-display text-2xl uppercase tracking-tight">
                  Enquiry received
                </h2>
                <p className="mt-2 max-w-md text-white/60">
                  Thanks — a fire engineer will be in touch within one working
                  day. For anything urgent, call{" "}
                  <span className="text-flame">0800 000 0000</span>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-flame hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70">
                    Service of interest
                  </label>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none focus:border-flame/60 transition-colors"
                  >
                    <option>Not sure yet</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none focus:border-flame/60 transition-colors"
                    placeholder="Tell us about the building, hazard and what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-flame px-7 py-3.5 font-semibold text-white hover:bg-ember transition-colors glow-ring"
                >
                  Send enquiry →
                </button>
                <p className="text-center text-xs text-white/40">
                  This demo form doesn't submit anywhere — wire it to your CRM or
                  email provider in production.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                t: "24/7 Emergency",
                v: "0800 000 0000",
                d: "Round-the-clock reactive callout",
                href: "tel:+448000000000",
              },
              {
                t: "Email",
                v: "hello@vanguardfire.co.uk",
                d: "General enquiries & quotes",
                href: "mailto:hello@vanguardfire.co.uk",
              },
              {
                t: "Head Office",
                v: "Unit 7, Forge Park",
                d: "Daventry, Northamptonshire",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <p className="text-xs uppercase tracking-widest text-flame">
                  {c.t}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-2 block font-display text-xl uppercase tracking-tight hover:text-flame transition-colors"
                  >
                    {c.v}
                  </a>
                ) : (
                  <p className="mt-2 font-display text-xl uppercase tracking-tight">
                    {c.v}
                  </p>
                )}
                <p className="mt-1 text-sm text-white/50">{c.d}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-flame/20 bg-flame/5 p-6">
              <p className="font-display text-lg uppercase tracking-tight">
                Coverage
              </p>
              <p className="mt-2 text-sm text-white/60">
                Nationwide UK coverage with engineers based across the Midlands,
                North West and South East for rapid response.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-flame"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-white outline-none focus:border-flame/60 transition-colors"
      />
    </div>
  );
}
