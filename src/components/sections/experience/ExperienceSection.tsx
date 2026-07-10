import Reveal from "@/components/ui/reveal/Reveal";
import ExperienceTimeline from "./ExperienceTimeline";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionLabel number="04" title="Experience" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.04em]">
          WHERE
          <br />
          I HAVE WORKED
        </h2>
      </Reveal>

      <ExperienceTimeline />
    </Section>
  );
}
