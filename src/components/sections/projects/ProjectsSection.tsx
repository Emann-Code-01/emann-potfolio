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
    </Section>
  );
}
