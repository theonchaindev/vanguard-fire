"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlameMark from "./FlameMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/calculator", label: "Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <FlameMark className="h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="font-display font-bold tracking-tight text-lg md:text-xl uppercase">
            Vanguard
            <span className="text-flame">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-0.5 bg-gradient-to-r from-ember to-flame rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-semibold text-white hover:bg-ember transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-3 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 text-center rounded-full bg-flame px-5 py-3 font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
