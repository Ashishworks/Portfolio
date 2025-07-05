import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import { EvervaultCardDemo } from "./ui/evervault-card";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-2xl relative" variants={textVariants}>
            <BlurText
              text="Welcome to my portfolio"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8 text-gray-600 dark:text-gray-400"
            />
            <motion.div className="mb-6 relative z-10" variants={itemVariants}>
              <SplitText
                text="Hi, I'm Ashish"
                className="text-5xl md:text-6xl font-bold"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50, rotationX: -90 }}
                to={{ opacity: 1, y: 0, rotationX: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="left"
              />
            </motion.div>
            
            <motion.h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium" variants={itemVariants}>
              Full Stack Developer | MERN | AI Enthusiast
            </motion.h2>
            
            <motion.p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed" variants={itemVariants}>
              I'm a passionate full stack developer skilled in building modern web applications using the MERN stack and beyond. 
              Always learning, always building.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-12" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const event = new CustomEvent('scrollToSection', { detail: 1 });
                    window.dispatchEvent(event);
                  }}
                >
                  View My Work
                  <ArrowRight size={20} />
                </button>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <a
                  href="https://github.com/Ashishworks"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center relative" variants={itemVariants}>
            <EvervaultCardDemo />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home; 