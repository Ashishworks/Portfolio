"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const Button = ({ 
  children, 
  onClick, 
  className, 
  disabled, 
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true);
      try {
        await onClick();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/90",
        className
      )}
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      ) : (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
        >
          {children}
        </motion.span>
      )}
    </motion.button>
  );
}; 