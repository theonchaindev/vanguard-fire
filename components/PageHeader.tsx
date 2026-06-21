"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(225,29,42,0.3),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-flame font-semibold uppercase tracking-widest text-sm"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display font-bold uppercase tracking-tight text-5xl md:text-7xl max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-2xl text-lg text-white/60"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
