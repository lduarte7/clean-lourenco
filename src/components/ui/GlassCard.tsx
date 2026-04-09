import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  className,
  children,
  hoverable = true,
}) => {
  return (
    <div
      className={cn(
        "glass-clinical relative overflow-hidden",
        hoverable && "glass-clinical-hover",
        className
      )}
    >
      {/* Background Tonal Highlight (No Borders) */}
      <div className="absolute inset-0 bg-gradient-to-br from-clinical-blue/[0.03] to-transparent pointer-events-none" />
      
      <div className="relative z-10 p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};
