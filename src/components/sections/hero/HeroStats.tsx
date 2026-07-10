import { motion } from "framer-motion";

interface HeroStatsProps {
  stats: { value: string; label: string }[];
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      className="flex gap-10 md:gap-16"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <span className="block font-display text-4xl leading-none tracking-tight md:text-5xl">
            {stat.value}
          </span>
          <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.15em] text-white/40">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
