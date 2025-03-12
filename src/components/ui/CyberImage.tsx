import React from 'react';
import Image from 'next/image';

interface CyberImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  glitch?: boolean;
  hologram?: boolean;
}

export default function CyberImage({
  src,
  alt,
  width,
  height,
  className = '',
  glitch = false,
  hologram = false,
}: CyberImageProps) {
  const baseStyles = "relative overflow-hidden";
  const glitchClass = glitch ? 'group-hover:animate-glitch' : '';
  const hologramClass = hologram ? 'animate-hologram' : '';
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {/* Border Frame */}
      <div className="absolute inset-0 border border-cyber-blue/50 z-10 pointer-events-none">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-blue"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue"></div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scanline z-20 pointer-events-none"></div>

      {/* Image */}
      <div className={`relative ${glitchClass} ${hologramClass}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>

      {/* Hologram Overlay */}
      {hologram && (
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 via-transparent to-cyber-blue/20 mix-blend-overlay"></div>
      )}
    </div>
  );
} 