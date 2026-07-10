"use client";

import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/SocialIcons";
import Reveal from "@/components/ui/reveal/Reveal";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-24 md:px-10 md:py-32 xl:px-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(190,255,0,0.05)" }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Final Transmission
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.88] tracking-[-0.06em]">
                LET&apos;S
                <br />
                BUILD
                <br />
                SOMETHING
                <br />
                REAL.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
                Frontend & mobile engineer focused on premium interfaces,
                scalable products, and smooth cross-platform experiences.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a
              href="mailto:olajubajeifeoluwa93@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full border border-border bg-white/[0.03] px-6 py-4 text-sm text-white/70 transition-all duration-500 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              Start a conversation
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary/30">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </Reveal>
        </div>

        <div className="my-16 h-px w-full bg-border" />

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <Reveal delay={0.2}>
            <div>
              <h3 className="font-display text-2xl tracking-tighter">
                EmannCode
              </h3>
              <p className="mt-2 text-sm text-white/35">
                Designing and building premium digital experiences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/Emann-Code-01", Icon: GitHubIcon },
                { href: "https://linkedin.com", Icon: LinkedInIcon },
                { href: "mailto:olajubajeifeoluwa93@gmail.com", Icon: ArrowUpRight },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/[0.03] text-white/50 transition-all duration-500 hover:-translate-y-[2px] hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-[11px] uppercase tracking-[0.2em] text-white/25 md:flex-row md:items-center md:justify-between">
            <p>© 2026 EmannCode</p>
            <p>Built with React · TypeScript · Tailwind · Framer Motion</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
