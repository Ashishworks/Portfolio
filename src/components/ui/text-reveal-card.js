"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  // Always revealed
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Let's collaborate", content: "Email: ashish061104@gmail.com\n\nLocation: New Delhi, India" },
    { title: "Let's collaborate", content: "Let's connect" },
    { title: "Let's collaborate", content: "Available for freelance projects, full-time opportunities, and exciting collaborations." },
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % steps.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, steps.length]);

  // Always show reveal
  return (
    <div
      className={cn(
        "relative w-full h-full bg-black border border-white/[0.08] rounded-2xl overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key="revealText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center px-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">{steps[currentStep].title}</h3>
            <div className="text-lg text-white/80 leading-relaxed">
              {steps[currentStep].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => {
  return (
    <h4 className={cn("text-xl font-semibold text-white/80", className)}>
      {children}
    </h4>
  );
};

export const TextRevealCardDescription = ({ children, className }) => {
  return (
    <p className={cn("text-base text-white/60 mt-2 leading-relaxed", className)}>
      {children}
    </p>
  );
}; 