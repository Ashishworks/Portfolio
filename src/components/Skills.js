import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {
  const projects = [
    // Frontend
    { title: "JavaScript", link: "#" },
    { title: "React.js", link: "#" },
    { title: "Vite", link: "#" },
    { title: "Tailwind CSS", link: "#" },
    { title: "Bootstrap", link: "#" },
    { title: "Material UI", link: "#" },
    { title: "Redux", link: "#" },
    { title: "Zustand", link: "#" },
    // Backend
    { title: "Node.js", link: "#" },
    { title: "Express.js", link: "#" },
    { title: "REST APIs", link: "#" },
    { title: "Authentication", link: "#" },
    { title: "MongoDB", link: "#" },
    { title: "MySQL", link: "#" },
    { title: "Atlas", link: "#" },
    // Tools
    { title: "Axios", link: "#" },
    { title: "Git & GitHub", link: "#" },
    { title: "LangChain", link: "#" },
    { title: "Vercel", link: "#" },
    { title: "Render", link: "#" },
    { title: "Netlify", link: "#" },
    { title: "VS Code", link: "#" },
    { title: "Cloudinary", link: "#" },
    { title: "Mermaid.js", link: "#" },
    { title: "Together AI", link: "#" },
    { title: "html2canvas", link: "#" },
    { title: "jsPDF", link: "#" },
  ];

  return (
    <section className="py-12 sm:py-16 pt-20 sm:pt-24 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Skills & Expertise</h1>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a breakdown of my technical skills.
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto w-full px-2 sm:px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 