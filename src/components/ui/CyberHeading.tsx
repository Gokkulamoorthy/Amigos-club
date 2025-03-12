"use client";

import React from 'react';

interface CyberHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  glitch?: boolean;
  gradient?: boolean;
}

export default function CyberHeading({
  children,
  level = 1,
  className = "",
  glitch = false,
  gradient = false,
}: CyberHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = "font-cyber-display font-bold tracking-wider";
  
  const sizeStyles = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
    5: "text-lg md:text-xl lg:text-2xl",
    6: "text-base md:text-lg lg:text-xl",
  }[level];

  const gradientStyles = gradient ? "text-gradient" : "text-white";
  
  const glitchStyles = glitch ? "relative" : "";

  return (
    <Tag className={`${baseStyles} ${sizeStyles} ${gradientStyles} ${glitchStyles} ${className}`}>
      {children}
      
      {/* Glitch Effect */}
      {glitch && (
        <>
          <span
            className="absolute -inset-0.5 text-neon-blue opacity-30 animate-glitch-1"
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="absolute -inset-0.5 text-neon-pink opacity-30 animate-glitch-2"
            aria-hidden="true"
          >
            {children}
          </span>
          {/* Text Shadow for better visibility */}
          <span className="absolute inset-0 text-white mix-blend-overlay">
            {children}
          </span>
        </>
      )}
    </Tag>
  );
} 