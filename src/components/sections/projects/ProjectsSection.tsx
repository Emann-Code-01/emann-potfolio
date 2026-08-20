import { ArrowUpRight } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import Reveal from "@/components/ui/reveal/Reveal";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-32 h-80 w-80 md:h-125 md:w-125 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(190,255,0,0.05)" }}
      />

      <Reveal>
        <SectionLabel number="02" title="Work" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.04em]">
          SELECTED
          <br />
          PROJECTS
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
          A cross-section of products, platforms, and experiences I have built
          — from cross-platform apps to cinematic web interfaces.
        </p>
      </Reveal>

      <div className="relative z-10 mt-16">
        <ProjectGrid />
      </div>

      <Reveal delay={0.3}>
        <div className="relative z-10 mt-16 flex justify-center">
          <a
            href="https://github.com/emanncode?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-border bg-transparent px-8 py-4 font-display text-lg uppercase tracking-[0.2em] text-text transition-all duration-300 hover:border-primary hover:text-primary"
          >
            View All Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
