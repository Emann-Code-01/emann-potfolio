"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

import ProjectGlow from "./ProjectGlow";
import ProjectTag from "./ProjectTag";
import ProjectMedia from "./ProjectMedia";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  index: number;
  number: string;
  image: string;
  link?: string;
  comingSoon?: boolean;
  delay?: number;
  role?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  index,
  number,
  image,
  link,
  comingSoon,
  delay,
  role,
}: ProjectCardProps) {
  const content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group relative overflow-hidden
        rounded-2xl border border-border bg-surface
        p-6 transition-all duration-500
        md:p-8
        hover:border-border-light hover:bg-surface-2
      "
    >
      <ProjectGlow />

      <div className="relative z-10 mb-6 flex items-start justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {comingSoon ? "Coming Soon" : `Featured Work ${number}`}
            </p>
            {role && (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                / {role}
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl tracking-tight transition-all duration-500 group-hover:-translate-y-[2px] md:text-3xl">
            {title}
          </h3>
        </div>

        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.35 }}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border border-border bg-white/3
            text-white/50 transition-all duration-500
            group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary
          "
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>

      {image && (
        <div className="relative z-10 mb-6">
          <ProjectMedia image={image} title={title} />
        </div>
      )}

      <p className="relative z-10 max-w-2xl text-sm leading-[1.8] text-white/55 md:text-[15px]">
        {description}
      </p>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <ProjectTag key={tag} label={tag} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );

  return (
    <Reveal delay={(delay ?? index) * 0.08}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </Reveal>
  );
}
