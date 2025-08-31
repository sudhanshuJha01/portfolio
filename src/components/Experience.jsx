import React from "react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Backend Intern",
    company: "Kaagazz",
    period: "Jun 2025 - Present",
    responsibilities: [
      "Built a secure, OTP-based passwordless authentication system.",
      "Implemented rate limiting and security best practices against common threats.",
      "Developed robust product and user management systems.",
      "Integrated Razorpay for seamless payment processing and order management.",
      "Designed and deployed the backend on Railway with CI/CD for scalability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Experience" />
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 py-4 border-l-2 border-surface">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-5 border-4 border-background"></div>
              <h3 className="text-xl font-bold text-primary font-sans">{exp.role}</h3>
              <p className="text-md text-secondary mb-1">{exp.company}</p>
              <p className="text-sm text-muted mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-secondary space-y-2 text-sm">
                {exp.responsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;