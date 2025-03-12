import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export default function CyberCard({ children, variant = 'primary', className = '' }: CyberCardProps) {
  const baseStyles = "relative overflow-hidden rounded-lg p-6 backdrop-blur-sm";
  const variantStyles = {
    primary: "bg-black/40 border border-cyber-blue/50 shadow-[0_0_15px_rgba(5,217,232,0.3)]",
    secondary: "bg-black/40 border border-cyber-pink/50 shadow-[0_0_15px_rgba(255,42,109,0.3)]",
    danger: "bg-black/40 border border-cyber-red/50 shadow-[0_0_15px_rgba(255,0,60,0.3)]"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className} group`}>
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-blue group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scanline pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 