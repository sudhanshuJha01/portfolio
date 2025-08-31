import React from "react";
import SectionHeader from "./SectionHeader";
import { SiNodedotjs, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiCplusplus } from "react-icons/si";
import { FaAws } from "react-icons/fa";
const skills = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "AWS", icon: <FaAws /> },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="About & Skills" />
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-6 text-md">
            I'm <strong>Sudhanshu Jha</strong>, a final-year B.Tech student in
            <strong> Mathematics and Computing</strong> at Delhi Technological University (DTU),
            working as a <strong>Backend Intern at Kaagazz</strong>. I build scalable and secure web applications using Node.js, TypeScript, and MongoDB.
          </p>
          <p className="text-muted text-md">
            Beyond backend, I enjoy full-stack development and exploring AI to create real-world products. I'm passionate about problem-solving and constantly learning to bridge the gap between ideas and impactful technology.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6 max-w-4xl mx-auto mt-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-4 bg-surface rounded-lg border border-surface transition-all duration-300 hover:border-primary hover:-translate-y-1"
            >
              <div className="text-4xl text-muted group-hover:text-primary transition-colors">{skill.icon}</div>
              <h4 className="text-xs mt-2 text-muted group-hover:text-primary transition-colors">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;