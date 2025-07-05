"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

export const TracingBeam = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full", className)}
    >
      <div className="absolute -left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "inset -1px 1px 0px rgba(255,255,255,0.185), inset 1px -1px 0px rgba(255,255,255,0.185)",
          }}
          className="relative left-0 h-4 w-4 rounded-full border border-netural-200 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)] dark:border-white/[0.2] border-white/[0.2]"
        />
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="absolute left-[7px] top-4 overflow-visible"
        >
          <motion.path
            d={`M 1 0 V ${y1}`}
            fill="none"
            stroke="rgba(255,255,255,0.185)"
            strokeWidth="2"
            className="path"
          />
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}; 