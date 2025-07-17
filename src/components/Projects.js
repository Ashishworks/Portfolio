import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { Button } from './ui/moving-border';


const truncate = (str, n) => (str.length > n ? str.slice(0, n) + '...' : str);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Wanderlust",
      description: "Wanderlust is a full-stack travel platform that allows users to explore over 40 curated destinations, book unique experiences, and list their own properties. Users can post, edit, and delete reviews, upload images up to 5 MB via Cloudinary, and enjoy interactive maps that enhance the overall discovery and booking experience. The platform includes secure user authentication, session management, and seamless payments through Razorpay. Built using the MVC architecture with modular routing, it ensures scalability, maintainability, and a clean codebase. Wanderlust delivers a dynamic, user-friendly travel experience with a focus on real-time interactivity and engagement.",
      image: "/wanderlust-cover.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      liveUrl: "https://wanderlust-91l7.onrender.com/",
      demoVideoUrl: "https://youtu.be/K0YKv8h57BI",
      githubUrl: "https://github.com/Ashishworks/Wanderlust",
      featured: true
    },
    {
      id: 2,
      title: "PodPeek",
      description: "PodPeek is an AI-powered podcast research assistant designed to help hosts and creators prepare smarter, more engaging interviews. It enables users to search for any well-known personality and instantly gathers real-time insights, including their biography, family background, controversial topics, recent updates, current projects, and even contact details like social media or official websites. PodPeek also generates a personalized, categorized podcast script with questions labeled as light, insightful, or controversial, which can be downloaded as a PDF. Additionally, users can enter any question number to generate three alternative phrasings using Together.ai, allowing for flexible and refined interview preparation.",
      image: "/PodPeek.png",
      category: "fullstack",
      technologies: ["React", "Together AI", "Node.js", "Serper API", "Express.js"],
      liveUrl: "https://pod-peek.vercel.app",
      githubUrl: "https://github.com/Ashishworks/PodPeek.git",
      featured: false
    },
    {
      id: 3,
      title: "Planza",
      description: "Planza is an AI-powered project management and documentation tool that helps users plan, track, and organize their projects more efficiently. It allows individuals or teams to list project features, challenges, tasks, and risks in a structured format, then automatically generates clear and interpretable flowcharts using AI. Users can collaborate in real-time, manage documentation centrally, and visualize project architecture with ease. The platform is built using React, React Bits, and Aceternity UI for a clean and responsive frontend, with Firebase for authentication and MongoDB Atlas for storing project data securely. Planza simplifies complex planning and boosts productivity through intelligent automation and an intuitive interface.",
      image: "/Planza.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "Mermaid.js", "Together AI", "jsPDF"],
      liveUrl: "https://planza-beta.vercel.app/",
      demoVideoUrl: "https://youtu.be/Bd790G0opE0",
      githubUrl: "https://github.com/Ashishworks/PlanzaBeta",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };



  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 pt-24 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle text-center mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                borderRadius="1.75rem"
                className="text-black dark:text-white"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-6 sm:gap-8 px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              layout
              className={`h-full w-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:border-red-500 hover:border-2 rounded-[1.5rem] cursor-pointer flex-shrink-0
                ${expandedId === project.id ? 'lg:flex-[2]' : 'lg:flex-1'}
              `}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <SpotlightCard 
                className={`group relative overflow-hidden h-full`}
                spotlightColor="rgba(220, 38, 38, 0.3)"
              >
              <div className="relative h-44 sm:h-56 overflow-hidden bg-white dark:bg-black flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {index === filteredProjects.length - 1 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded text-xs font-semibold z-10 shadow">building</div>
                )}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden px-3 py-1.5 border border-red-500 text-red-500 rounded-md text-sm font-medium flex justify-center group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="group-hover/btn:translate-x-32 text-center transition duration-500">
                        Live Demo
                      </span>
                      <div className="-translate-x-32 group-hover/btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-red-500 z-20">
                        <Eye size={16} />
                      </div>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden px-3 py-1.5 border border-red-500 text-red-500 rounded-md text-sm font-medium flex justify-center group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="group-hover/btn:translate-x-32 text-center transition duration-500">
                        Code
                      </span>
                      <div className="-translate-x-32 group-hover/btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-red-500 z-20">
                        <Github size={16} />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-1 sm:p-2">
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 leading-relaxed px-0 sm:px-1">
                  {expandedId === project.id
                    ? project.description
                    : truncate(project.description, 140)}
                </p>
                {project.description.length > 140 && (
                  <button
                    className="text-blue-600 dark:text-blue-400 underline text-xs sm:text-sm mb-1 sm:mb-2 px-0 sm:px-1 focus:outline-none"
                    onClick={e => { e.stopPropagation(); setExpandedId(expandedId === project.id ? null : project.id); }}
                  >
                    {expandedId === project.id ? 'Hide description' : 'View full description'}
                  </button>
                )}
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4 px-0 sm:px-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <motion.a
                    href={project.id === 1 || project.id === 3 ? project.demoVideoUrl : project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={16} />
                    Quick Demo Video
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                </div>
              </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 