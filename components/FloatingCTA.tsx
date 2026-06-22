"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const pathname = usePathname();
  // Hide on the contact page itself
  if (pathname.startsWith("/contact")) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="fixed right-4 sm:right-5 top-1/2 -translate-y-1/2 z-40"
      >
        <Link
          href="/contact"
          aria-label="Get in touch"
          className="group flex flex-col items-center gap-2 rounded-full bg-flame px-3 py-5 text-white shadow-[0_10px_40px_-8px_rgba(225,29,42,0.6)] ring-1 ring-white/20 transition-all hover:bg-ember hover:px-4"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M4 4h16v12H7l-3 3V4Z" />
            <path d="M8 9h8M8 12h5" />
          </svg>
          <span
            className="font-display text-xs font-semibold uppercase tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            Get in touch
          </span>
          <span className="h-2 w-2 rounded-full bg-white/90 animate-pulse" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
