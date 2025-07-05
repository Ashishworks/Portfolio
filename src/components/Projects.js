import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { Button } from './ui/moving-border';


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Wanderlust",
      description: "A full-featured travel booking web app where users can explore, create, and review destinations. Built using MERN stack with authentication, search filters, and user reviews.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      liveUrl: "https://wanderlust-91l7.onrender.com/",
      githubUrl: "https://github.com/Ashishworks/Wanderlust",
      featured: true
    },
    {
      id: 2,
      title: "PodNexus",
      description: "A podcast discovery platform that helps users explore trending podcasts by category. Uses iTunes API to fetch real-time podcast data with smooth user experience.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "JavaScript", "Tailwind CSS", "iTunes API"],
      liveUrl: "https://github.com/Ashishworks/PodNexus",
      githubUrl: "https://github.com/Ashishworks/PodNexus",
      featured: false
    },
    {
      id: 3,
      title: "Planza",
      description: "An AI-powered project management and documentation tool. Users can describe their software project, and Planza generates Mermaid.js flowcharts and structured breakdowns using AI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "Mermaid.js", "Together AI", "jsPDF"],
      liveUrl: "https://planza-beta.vercel.app/",
      githubUrl: "https://github.com/Ashishworks/PlanzaBeta",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' }
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4"
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
              className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:border-red-500 hover:border-2 rounded-[1.5rem]"
            >
              <SpotlightCard 
                className={`group relative overflow-hidden h-full`}
                spotlightColor="rgba(220, 38, 38, 0.3)"
              >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed px-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 px-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={16} />
                    View Live
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