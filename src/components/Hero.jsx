import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { FaAws, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Hero = () => {
  const typedTitle = useTypewriter("Backend Developer & Full Stack Enthusiast", 80);

  return (
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden bg-background">
      
      <div className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div 
          className="absolute w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30"
          style={{ 
            filter: 'blur(150px)',
            animation: 'aurora-glow 25s ease-in-out infinite'
          }}
        />
      </div>

      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(to right, var(--color-muted) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'pan-grid 20s linear infinite'
        }}
      />
      
      <style>{`@keyframes pan-grid { from { background-position: 0 0; } to { background-position: -40px -40px; } }`}</style>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-sans mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Sudhanshu Jha
            </h1>
            <p className="text-lg md:text-xl text-secondary h-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {typedTitle}
              <span className="inline-block w-1 h-6 bg-primary ml-1 animate-ping"></span>
            </p>
            
            <p className="max-w-lg mx-auto md:mx-0 text-sm text-muted mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Final-year B.Tech student at DTU specializing in scalable backend systems and passionate about turning complex problems into elegant software solutions.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com/sudhanshuJha01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-3 bg-primary text-background font-bold rounded-md hover:bg-opacity-90 transition-all duration-300">
                <FaGithub className="mr-2" /> View on GitHub
              </a>
              <a href="https://drive.google.com/file/d/11zz1j7oDQpDaZiUqVwWZlRi42MdLf0Ap/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-3 bg-surface border border-surface text-secondary hover:text-primary hover:border-primary rounded-md transition-all duration-300">
                <FaFilePdf className="mr-2" /> Download Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <a href="https://www.linkedin.com/in/sudhanshujha01/" target="_blank" rel="noopener noreferrer" className="text-2xl text-muted hover:text-primary transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
              <a href="mailto:sudhanshujha883@gmail.com" className="text-2xl text-muted hover:text-primary transition-all duration-300 hover:scale-110"><FaEnvelope /></a>
            </div>
          </div>

          {/* This container is now hidden on mobile and shown on medium screens and up */}
          <div className="hidden md:flex items-center justify-center h-full">
            <div className="w-64 h-64 perspective-1000">
              <div className="relative w-full h-full cube">
                <CubeFace position="front"><SiReact /></CubeFace>
                <CubeFace position="back"><SiNodedotjs /></CubeFace>
                <CubeFace position="right"><SiTypescript /></CubeFace>
                <CubeFace position="left"><SiNextdotjs /></CubeFace>
                <CubeFace position="top"><FaAws /></CubeFace>
                <CubeFace position="bottom"><SiMongodb /></CubeFace>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// The CubeFace component no longer needs responsive classes, so we can simplify it
const CubeFace = ({ children, position }) => {
  const getTransform = () => {
    switch (position) {
      case 'front': return 'rotateY(0deg) translateZ(8rem)';
      case 'back': return 'rotateY(180deg) translateZ(8rem)';
      case 'right': return 'rotateY(90deg) translateZ(8rem)';
      case 'left': return 'rotateY(-90deg) translateZ(8rem)';
      case 'top': return 'rotateX(90deg) translateZ(8rem)';
      case 'bottom': return 'rotateX(-90deg) translateZ(8rem)';
      default: return '';
    }
  };

  return (
    <div
      className="absolute w-64 h-64 flex items-center justify-center bg-surface/80 border border-muted/20 text-7xl text-primary backdrop-blur-sm"
      style={{ transform: getTransform() }}
    >
      {children}
    </div>
  );
};

const PerspectiveStyles = () => (<style>{`.perspective-1000 { perspective: 1000px; }`}</style>);

export default Hero;








