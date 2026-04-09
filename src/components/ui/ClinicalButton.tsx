"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ClinicalButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "error";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}


const variants = {
  primary: "bg-clinical-blue text-white shadow-xl shadow-clinical-blue/20 hover:bg-clinical-container",
  secondary: "bg-clinical-surface text-clinical-blue border border-clinical-blue/10 hover:bg-clinical-blue/5",
  ghost: "bg-transparent text-clinical-blue hover:bg-clinical-blue/5",
  error: "bg-clinical-red text-white shadow-xl shadow-clinical-red/20 hover:bg-clinical-magenta",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg font-semibold",
  xl: "px-10 py-5 text-xl font-bold tracking-tight",
};

export const ClinicalButton: React.FC<ClinicalButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-clinical-blue focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
