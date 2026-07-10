import Reveal from "@/components/ui/reveal/Reveal";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";

export default function ContactSection() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionLabel number="05" title="Contact" />
      </Reveal>

      <div className="grid gap-20 xl:grid-cols-2 xl:gap-28">
        <div>
          <Reveal>
            <h2 className="mb-10 font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.88] tracking-tight">
              LET&apos;S
              <br />
              BUILD
              <br />
              <span className="text-primary">TOGETHER</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-white/50">
              Whether you have a project in mind, an open role, or just want
              to connect — I will reply within a day.
            </p>
          </Reveal>

          <ContactLinks />
        </div>

        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
