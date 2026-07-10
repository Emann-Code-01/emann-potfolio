import Reveal from "@/components/ui/reveal/Reveal";

type ExperienceCardProps = {
  year: string;
  role: string;
  company: string;
  description: string;
  delay?: number;
};

export default function ExperienceCard({
  year,
  role,
  company,
  description,
  delay,
}: ExperienceCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group relative grid gap-6 border-t border-border py-10 transition-colors duration-300 md:grid-cols-[200px_1fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.15em] text-white/30">
            {year}
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-primary/[0.03] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <h3 className="mb-1 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
              {role}
            </h3>

            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary/80">
              {company}
            </p>

            <p className="max-w-2xl text-sm leading-[1.8] text-white/50">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
