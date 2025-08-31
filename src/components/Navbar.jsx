import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["About", "Experience", "Education", "Projects", "Blog", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <li className="group">
      <a
        href={href}
        onClick={() => setMenuOpen(false)}
        className="capitalize text-sm transition-colors duration-300 group-hover:text-primary relative"
      >
        {children}
        <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-background/80 backdrop-blur-md shadow-[0_2px_10px_rgba(255,255,255,0.05)]" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">
        <a href="#home" className="text-xl font-bold font-mono text-primary transition-transform duration-300 hover:scale-105">
          &lt;SJ.tech /&gt;
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-secondary">
            {navLinks.map(link => <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>)}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-primary">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-surface">
          <ul className="flex flex-col items-center gap-6 py-6 text-secondary">
            {navLinks.map(link => <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>)}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;