import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    year: "04/2025 — 12/2025",
    role: "Frontend Developer",
    company: "Thegigs.co",
    description:
      "Built scalable frontend systems and premium user experiences using React, Next.js, TypeScript, and modern component architecture in a fast-paced startup environment.",
  },
  {
    year: "11/2025 — Present",
    role: "Frontend & Backend Engineer",
    company: "Rouvoo",
    description:
      "Owned full-stack product development — from APIs and database architecture to UI systems and production-ready application engineering across the stack.",
  },
  {
    year: "04/2025 — Present",
    role: "Frontend Engineer",
    company: "Browpay (Fintech)",
    description:
      "Developed responsive, accessible fintech interfaces. Collaborated closely with backend systems and product teams to ship financial tools that users trust.",
  },
  {
    year: "2022 — Present",
    role: "Freelance Developer",
    company: "Self Employed",
    description:
      "Building web apps, admin dashboards, landing pages, mobile applications, and scalable frontend systems for clients and personal products across industries.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.role}
            {...experience}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  );
}
