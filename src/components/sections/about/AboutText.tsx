import Reveal from "@/components/ui/reveal/Reveal";

export default function AboutText() {
  return (
    <div className="space-y-7 text-[15px] leading-[1.9] text-white/55 md:text-base">
      <Reveal delay={0.1}>
        <p>
          I create digital products that balance precision engineering with
          thoughtful design. Every interface I build starts with the question:
          <span className="text-white"> how will this feel to use?</span>
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p>
          My work spans the full frontend spectrum — from web apps in React and
          Next.js to mobile experiences in React Native and Flutter. I also work
          across the stack with PHP and SQL when the product needs a full-circle
          approach.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p>
          I care deeply about craft: clean component architecture, intentional
          micro-interactions, and systems that scale without accumulating debt.
          When I am not coding, I am probably playing saxophone, exploring game
          design, or pushing a side project further than it needs to go.
        </p>
      </Reveal>
    </div>
  );
}
