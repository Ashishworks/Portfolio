"use client";
import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({
  borderRadius = "0.5rem",
  children,
  as: Component = "button",
  className,
  ...otherProps
}) => {
  return (
    <Component
      className={cn(
        "relative text-sm h-10 w-32 font-medium border-2 border-red-500 bg-transparent",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {children}
    </Component>
  );
}; 