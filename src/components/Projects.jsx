import React from "react";
import SectionHeader from "./SectionHeader";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Project Title Coming Soon",
    description: "An exciting project is in development. Details will be available shortly.",
    icon: <FaCode />,
    link: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-surface overflow-hidden">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(to right, var(--color-muted) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader title="Projects" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-6 rounded-lg border border-surface transition-all duration-300 hover:border-primary hover:-translate-y-1"
            >
              <div className="text-3xl text-primary mb-3">{project.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2 font-sans">{project.title}</h3>
              <p className="text-sm text-muted">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;