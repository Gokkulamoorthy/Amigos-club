"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md',
    glitch = false,
    loading = false,
    icon,
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = "relative font-gaming tracking-wider transition-all duration-300 flex items-center justify-center";
    
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantStyles = {
      primary: "bg-cyber-black border-2 border-neon-blue/50 hover:border-neon-blue text-neon-blue hover:text-white hover:bg-neon-blue/10",
      secondary: "bg-cyber-black border-2 border-neon-purple/50 hover:border-neon-purple text-neon-purple hover:text-white hover:bg-neon-purple/10",
      danger: "bg-cyber-black border-2 border-neon-red/50 hover:border-neon-red text-neon-red hover:text-white hover:bg-neon-red/10",
      success: "bg-cyber-black border-2 border-neon-green/50 hover:border-neon-green text-neon-green hover:text-white hover:bg-neon-green/10",
    };

    const glitchAnimation = glitch ? "hover:animate-glitch" : "";
    const isDisabled = disabled || loading;
    const disabledStyles = isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    return (
      <button
        ref={ref}
        className={twMerge(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          glitchAnimation,
          disabledStyles,
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {/* Button Content */}
        <div className="relative z-10 flex items-center gap-2">
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
              <span>PROCESSING</span>
            </>
          ) : (
            <>
              {icon && <span className="flex-shrink-0">{icon}</span>}
              {children}
            </>
          )}
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 hover:opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-current via-transparent to-current"></div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50"></div>
      </button>
    );
  }
);

CyberButton.displayName = 'CyberButton';

export default CyberButton; 