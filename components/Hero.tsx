"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { heroImage } from "@/lib/data";

function Embers() {
  const embers = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 80,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute bottom-0 rounded-full bg-ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px 1px rgba(255,59,31,0.7)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -560,
            x: e.drift,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* background layers */}
      {/* photographic fire backdrop */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-55"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(225,29,42,0.35),transparent_60%)]" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-flame/20 blur-[120px]" />
      <Embers />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-flame">
            <span className="h-1.5 w-1.5 rounded-full bg-flame animate-pulse" />
            BAFE & FIA Accredited
          </span>

          <h1 className="mt-6 font-display font-bold uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl">
            Fire protection,
            <br />
            <span className="text-gradient-fire">engineered to endure.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/65 leading-relaxed">
            We design, install and maintain life-safety systems that protect
            people, property and continuity — from data centres to high-bay
            warehouses across the UK.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href="/calculator"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-flame px-7 py-3.5 font-semibold text-white hover:bg-ember transition-colors glow-ring"
            >
              Try the Risk Calculator
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/90 hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
