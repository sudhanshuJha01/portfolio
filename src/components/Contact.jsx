import React from "react";
import SectionHeader from "./SectionHeader";
import { FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contacts = [
  { title: "Resume", icon: <FaFilePdf />, link: "https://drive.google.com/file/d/11zz1j7oDQpDaZiUqVwWZlRi42MdLf0Ap/view" },
  { title: "GitHub", icon: <FaGithub />, link: "https://github.com/sudhanshuJha01" },
  { title: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sudhanshujha01/" },
  { title: "Email", icon: <FaEnvelope />, link: "mailto:sudhanshujha883@gmail.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader title="Get In Touch" />
        <p className="max-w-xl mx-auto mb-10 text-muted">
          Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <div className="flex justify-center items-center gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              title={contact.title}
              className="text-3xl text-muted hover:text-primary transition-transform duration-300 hover:scale-110"
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;