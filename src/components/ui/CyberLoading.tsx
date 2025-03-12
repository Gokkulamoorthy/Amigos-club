import React from 'react';

interface CyberLoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CyberLoading({ text = 'LOADING', size = 'md' }: CyberLoadingProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-neon-blue/20 rounded-full animate-spin-slow"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-2 border-2 border-neon-pink/30 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Inner Ring */}
        <div className="absolute inset-4 border border-neon-purple/40 rounded-full animate-spin-slow"></div>
        
        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
              style={{ transform: `rotate(${i * 45}deg)` }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-neon-blue font-gaming tracking-wider loading-dots">
        {text}
      </div>
    </div>
  );
} 