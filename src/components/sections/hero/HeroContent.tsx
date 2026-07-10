import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroData } from "@/data/hero";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center pt-36 pb-16 md:pt-44 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
          {heroData.availability}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mb-4 font-mono text-[13px] uppercase tracking-[0.25em] text-white/40"
      >
        {heroData.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl font-display text-[clamp(3.2rem,12vw,8rem)] leading-[0.88] tracking-[-0.04em]"
      >
        IFEOLUWA
        <br />
        OLAJUBAJE
        <br />
        <span className="text-primary">EMMANUEL</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-8 max-w-2xl text-base leading-[1.8] text-white/55 md:text-lg"
      >
        {heroData.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 flex flex-wrap items-center gap-5"
      >
        <a
          href={heroData.cta.href}
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-primary/90"
        >
          {heroData.cta.label}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href={heroData.secondaryCta.href}
          className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
        >
          {heroData.secondaryCta.label}
        </a>
      </motion.div>
    </div>
  );
}
