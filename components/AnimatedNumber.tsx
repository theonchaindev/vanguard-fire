"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";

export default function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    const n = decimals
      ? v.toFixed(decimals)
      : Math.round(v).toLocaleString("en-GB");
    return `${prefix}${n}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [value, mv]);

  return <motion.span>{rounded}</motion.span>;
}
