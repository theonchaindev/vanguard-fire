"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const services = [
  "Fire Suppression",
  "Fire Detection",
  "Fire Extinguishers",
  "Emergency Lighting",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk fire safety"
        subtitle="Stay protected with Surtur Fire. Tell us about your premises and we'll come back within one working day — your safety is our priority."
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
                  <span className="text-flame">+44 7843 841219</span>.
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
                t: "Call us",
                v: "+44 7843 841219",
                d: "Speak to our team direct",
                href: "tel:+447843841219",
              },
              {
                t: "Email",
                v: "sales@surturfire.com",
                d: "General enquiries & quotes",
                href: "mailto:sales@surturfire.com",
              },
              {
                t: "Office",
                v: "22-24 Harborough Road",
                d: "Northampton, NN2 7AZ",
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
                Trusted by clients across the UK, with engineers operating
                nationwide from our Northampton base.
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
