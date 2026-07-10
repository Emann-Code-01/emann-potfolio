import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import Reveal from "@/components/ui/reveal/Reveal";
import AboutText from "./AboutText";
import AboutFacts from "./AboutFacts";

export default function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel number="01" title="About" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.04em]">
          ENGINEERING
          <br />
          WITH INTENT
        </h2>
      </Reveal>

      <div className="grid gap-16 md:grid-cols-2">
        <AboutText />
        <AboutFacts />
      </div>
    </Section>
  );
}
