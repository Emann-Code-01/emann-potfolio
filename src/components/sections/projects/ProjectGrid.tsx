import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "UNIFLOW",
    link: "https://uniflow-ebon.vercel.app",
    description: "A full cross-platform solution with a Next.js admin dashboard and React Native mobile application — engineered for seamless data flow across devices.",
    tags: ["Next.js", "React Native", "Expo", "TypeScript", "Supabase"],
    image: "/uniflow.png",
    role: "Full-stack development",
  },
  {
    title: "MIFI MANAGER",
    comingSoon: true,
    description: "A mobile app for managing MiFi devices with a clean, intuitive interface. Real-time device monitoring and data usage tracking at your fingertips.",
    tags: ["React Native", "Expo", "TypeScript"],
    role: "Mobile development",
  },
  {
    title: "FILMRITZ",
    link: "https://filmritz.vercel.app",
    description: "A cinematic film discovery platform featuring rich browsing experiences, curated collections, and smooth UI interactions across every device.",
    tags: ["React", "TypeScript", "Tailwind", "API Integration"],
    image: "/filmritz.png",
    role: "Frontend development",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          index={index}
          number={`0${index + 1}`}
          title={project.title}
          description={project.description}
          tags={project.tags}
          link={project.link}
          image={project.image || ""}
          comingSoon={"comingSoon" in project ? project.comingSoon : undefined}
          role={"role" in project ? project.role : undefined}
        />
      ))}
    </div>
  );
}
