import React from "react";
import SectionHeader from "./SectionHeader";
import ScrollFadeIn from "./ScrollFadeIn";
import { FaPenAlt } from "react-icons/fa";

const blogPosts = [
  {
    title: "Blog Post Coming Soon",
    description: "Insights on backend development, AI, and tech are on the way. Stay tuned!",
    icon: <FaPenAlt />,
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <ScrollFadeIn>
        <div className="container mx-auto px-4">
          <SectionHeader title="Blog" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface p-6 rounded-lg border border-surface transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                <div className="text-3xl text-primary mb-3">{post.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2 font-sans">{post.title}</h3>
                <p className="text-sm text-muted font-sans">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default Blog;