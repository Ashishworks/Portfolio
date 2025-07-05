import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/stateful-button';
import { TracingBeam } from './ui/tracing-beam';
import { IconBrandGithub } from '@tabler/icons-react';
import BlurText from "./BlurText";
import { cn } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const [activeContent, setActiveContent] = useState(0);
  const contentPhrases = [
    "ashish061104@gmail.com",
    "Let's connect",
    "Available for freelance projects, full-time opportunities, exciting collaborations, remote roles, and side hustles."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // dummy API call for send button
  const handleSendMessage = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };

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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <TracingBeam className="w-full">
      <section className="py-12 sm:py-16 pt-20 sm:pt-24 min-h-screen bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle text-center mx-auto">
              I'm always interested in new opportunities, collaborations, and hackathons. Feel free to reach out!
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information with TextRevealCard */}
            <motion.div variants={itemVariants} className="h-auto lg:h-[40rem] mb-8 lg:mb-0">
              <div className="h-full flex flex-col items-center justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">Let's collaborate</h3>
                <BlurText
                  text={contentPhrases[activeContent]}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className={
                    (activeContent === 0 || activeContent === 2
                      ? 'text-base sm:text-lg mx-auto'
                      : 'text-xl sm:text-2xl md:text-3xl') +
                    ' font-semibold text-center text-gray-600 dark:text-gray-300 whitespace-pre-line'
                  }
                />
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="shadow-input mx-auto w-full rounded-none bg-white p-3 sm:p-4 md:rounded-2xl md:p-8 dark:bg-black">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200">
                  Send Message
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
                <form className="my-6 sm:my-8" onSubmit={handleSubmit}>
                  <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">First name</Label>
                      <Input
                        id="firstname"
                        name="firstname"
                        placeholder="Tyler"
                        type="text"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-zinc-900"
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname">Last name</Label>
                      <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Durden"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-zinc-900"
                      />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-6 sm:mb-8">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="projectmayhem@fc.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-50 dark:bg-zinc-900"
                    />
                  </LabelInputContainer>
                  <Button onClick={handleSendMessage}>
                    Send message
                  </Button>
                  <div className="my-6 sm:my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <a
                      href="https://github.com/Ashishworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                      type="button">
                      <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        GitHub
                      </span>
                      <BottomGradient />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ashish061104/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                      type="button">
                      <Linkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        LinkedIn
                      </span>
                      <BottomGradient />
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </TracingBeam>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact; 