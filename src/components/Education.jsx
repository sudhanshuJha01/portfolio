import React from "react";
import SectionHeader from "./SectionHeader";

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-surface overflow-hidden">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(to right, var(--color-muted) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader title="Education" />
        <div className="max-w-3xl mx-auto p-8 border border-muted/20 rounded-lg bg-surface">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-left flex-1">
              <h3 className="text-xl font-bold text-primary mb-1 font-sans">
                B.Tech in Mathematics and Computing
              </h3>
              <h4 className="text-md text-secondary mb-2">
                Delhi Technological University (DTU)
              </h4>
              <p className="text-sm text-muted mb-4">
                Expected Graduation: 2026
              </p>
              <p className="text-sm leading-relaxed">
                Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Object-Oriented Programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;