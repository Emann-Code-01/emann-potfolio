import Reveal from "@/components/ui/reveal/Reveal";
import SkillCategory from "./SkillCategory";
import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/section-label/SectionLabel";

const skillGroups = [
  {
    title: "Web Frontend",
    skills: [
      { label: "React", highlighted: true },
      { label: "Next.js", highlighted: true },
      { label: "TypeScript", highlighted: true },
      { label: "Vue.js", highlighted: true },
      { label: "JavaScript" },
      { label: "Tailwind CSS" },
      { label: "HTML / CSS" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { label: "PHP", highlighted: true },
      { label: "Node.js", highlighted: true },
      { label: "SQL", highlighted: true },
      { label: "MySQL", highlighted: true },
      { label: "REST APIs" },
      { label: "Supabase" },
      { label: "Database Design" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { label: "React Native", highlighted: true },
      { label: "Expo", highlighted: true },
      { label: "Flutter", highlighted: true },
      { label: "Cross Platform" },
      { label: "Android / iOS" },
    ],
  },
  {
    title: "Animation & 3D",
    skills: [
      { label: "Framer Motion", highlighted: true },
      { label: "GSAP", highlighted: true },
      { label: "Three.js" },
      { label: "Micro Interactions" },
      { label: "Scroll Animations" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { label: "Component Design" },
      { label: "Performance" },
      { label: "State Management" },
      { label: "Reusable Systems" },
      { label: "Real-time Features" },
    ],
  },
  {
    title: "Workflow",
    skills: [
      { label: "Git / GitHub" },
      { label: "Vercel" },
      { label: "Figma" },
      { label: "Problem Solving" },
      { label: "Always Shipping" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionLabel number="03" title="Stack" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.88] tracking-[-0.04em]">
          TECH
          <br />
          STACK
        </h2>
      </Reveal>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCategory
            key={group.title}
            title={group.title}
            skills={group.skills}
            delay={index * 0.06}
          />
        ))}
      </div>
    </Section>
  );
}
