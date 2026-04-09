import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = 
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" 
  | "body" | "body-small" | "caption" | "display";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const variants: Record<TypographyVariant, string> = {
  display: "text-balance font-display font-bold leading-[1.1] tracking-tighter text-4xl sm:text-6xl lg:text-8xl",
  h1: "text-balance font-display font-bold leading-tight tracking-tight text-3xl sm:text-5xl lg:text-6xl",
  h2: "text-balance font-display font-semibold leading-snug tracking-tight text-2xl sm:text-4xl lg:text-5xl",
  h3: "text-pretty font-display font-semibold leading-normal text-xl sm:text-3xl lg:text-4xl",
  h4: "text-pretty font-display font-medium leading-normal text-lg sm:text-2xl lg:text-3xl",
  h5: "text-xl font-display font-medium leading-normal text-pretty",
  h6: "text-lg font-display font-medium leading-normal text-pretty",
  body: "text-base font-body leading-relaxed text-clinical-on-surface/80",
  "body-small": "text-sm font-body leading-relaxed text-clinical-on-surface/70",
  caption: "text-xs font-body font-semibold uppercase tracking-widest text-clinical-blue",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  className,
  children,
  as,
  ...props
}) => {
  const Tag = as || (variant === "display" ? "h1" : variant === "caption" ? "span" : (variant.startsWith("h") ? (variant as React.ElementType) : "p"));

  return (
    <Tag className={cn(variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
