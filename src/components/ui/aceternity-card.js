"use client";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import React from "react";

export const AceternityCard = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group/card relative h-full w-full rounded-xl border border-black/[0.1] bg-white p-6 dark:border-white/[0.2] dark:bg-black",
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background:
            "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 207, 93) 301.88deg, rgb(36, 0, 255) 360deg)",
          borderRadius: "inherit",
        }}
        transition={{ duration: 0.3 }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background:
            "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 207, 93) 301.88deg, rgb(36, 0, 255) 360deg)",
        }}
      />
    </div>
  );
};

export const AceternityButton = ({
  children,
  className,
  icon: Icon,
  text,
  as: Component = motion.button,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "group/btn relative inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="block transition-all duration-300 group-hover/btn:hidden">
          {Icon && <Icon size={20} />}
        </span>
        <span className="hidden transition-all duration-300 group-hover/btn:block">
          {text}
        </span>
      </span>
      <motion.div
        className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
        style={{
          background:
            "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 207, 93) 301.88deg, rgb(36, 0, 255) 360deg)",
        }}
      />
    </Component>
  );
}; 