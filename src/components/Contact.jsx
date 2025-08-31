import React from "react";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-surface overflow-hidden">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(to right, var(--color-muted) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <SectionHeader title="Get In Touch" />
        <p className="max-w-xl mx-auto mb-8 text-secondary font-sans text-lg">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        {/* Main Contact Button */}
        <a 
          href="mailto:sudhanshujha883@gmail.com"
          className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 text-lg"
        >
          Say Hello
        </a>

        {/* Secondary Social Links */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <a
            href="https://github.com/sudhanshuJha01"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-3xl text-muted hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhanshujha01/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-3xl text-muted hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;













