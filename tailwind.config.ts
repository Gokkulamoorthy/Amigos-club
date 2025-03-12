import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cyberpunk': ['Rajdhani', 'sans-serif'],
        'cyber-display': ['Orbitron', 'sans-serif'],
        'gaming': ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      colors: {
        'neon': {
          blue: '#00F0FF',
          pink: '#FF006C',
          yellow: '#F9F002',
          purple: '#7B00FF',
          red: '#FF003C',
          green: '#00FF9F',
        },
        'cyber': {
          black: '#0D0D0D',
          darker: '#000000',
          dark: '#1A1A1A',
          light: '#FCEE0A',
          gray: {
            100: '#ECEDEE',
            200: '#DCDDDE',
            300: '#B9BBBE',
            400: '#959697',
            500: '#727374',
            600: '#5C5E60',
            700: '#454749',
            800: '#2E3033',
            900: '#18191C',
          },
        },
      },
      animation: {
        'glitch-1': 'glitch1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch2 3s infinite linear alternate-reverse',
        'glitch-text': 'glitchText 3s infinite linear',
        'glitch-skew': 'glitchSkew 2s infinite linear alternate-reverse',
        'scan': 'scan 2s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'flicker': 'flicker 0.5s infinite',
        'cyber-glow': 'glow 2s ease-in-out infinite alternate',
        'data-flow': 'dataFlow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'text-blur-out': 'textBlurOut 1.2s ease-out forwards',
        'text-blur-in': 'textBlurIn 1.2s ease-in forwards',
        'hologram': 'hologram 2s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'digital-noise': 'digitalNoise 0.5s steps(3) infinite',
        'power-pulse': 'powerPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 2s infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'energy-field': 'energyField 3s ease-in-out infinite',
        'hover-float': 'hoverFloat 3s ease-in-out infinite',
      },
      keyframes: {
        powerPulse: {
          '0%, 100%': {
            boxShadow: '0 0 15px #00F0FF, 0 0 30px #00F0FF, 0 0 45px #00F0FF',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 20px #FF006C, 0 0 40px #FF006C, 0 0 60px #FF006C',
            transform: 'scale(1.05)',
          },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '10%': { opacity: '0.8', filter: 'brightness(0.8)' },
          '20%': { opacity: '1', filter: 'brightness(1.2)' },
          '30%': { opacity: '0.6', filter: 'brightness(0.6)' },
          '40%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.9', filter: 'brightness(0.9)' },
          '60%': { opacity: '1', filter: 'brightness(1.1)' },
          '70%': { opacity: '0.7', filter: 'brightness(0.7)' },
          '80%': { opacity: '1', filter: 'brightness(1)' },
          '90%': { opacity: '0.8', filter: 'brightness(0.8)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        energyField: {
          '0%, 100%': {
            filter: 'hue-rotate(0deg) brightness(1)',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.2)',
            transform: 'scale(1.1)',
          },
        },
        hoverFloat: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.05)',
            filter: 'brightness(1.2)',
          },
        },
        glitch1: {
          '0%, 100%': { transform: 'none' },
          '20%': { transform: 'skewX(4deg) translateX(-2px)' },
          '40%': { transform: 'skewX(-4deg) translateX(2px)' },
          '60%': { transform: 'skewX(2deg) translateY(2px)' },
          '80%': { transform: 'skewX(-2deg) translateY(-2px)' },
        },
        glitch2: {
          '0%, 100%': { transform: 'none' },
          '25%': { transform: 'skewY(4deg) translateY(-2px)' },
          '50%': { transform: 'skewY(-4deg) translateY(2px)' },
          '75%': { transform: 'skewY(2deg) translateX(2px)' },
        },
        glitchText: {
          '0%, 100%': { 
            textShadow: '2px 0 #00F0FF, -2px 0 #FF006C',
            transform: 'translate(0)',
          },
          '25%': {
            textShadow: '-2px 0 #00F0FF, 2px 0 #FF006C',
            transform: 'translate(-2px,2px)',
          },
          '50%': {
            textShadow: '2px 0 #00F0FF, -2px 0 #FF006C',
            transform: 'translate(2px,-2px)',
          },
          '75%': {
            textShadow: '-2px 0 #00F0FF, 2px 0 #FF006C',
            transform: 'translate(-2px,2px)',
          },
        },
        glitchSkew: {
          '0%': { transform: 'skew(0)' },
          '10%': { transform: 'skew(2deg)' },
          '20%': { transform: 'skew(0)' },
          '30%': { transform: 'skew(-2deg)' },
          '40%': { transform: 'skew(0)' },
          '100%': { transform: 'skew(0)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% -100%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '33%': { opacity: '0.8' },
          '66%': { opacity: '0.4' },
          '77%': { opacity: '0.7' },
          '88%': { opacity: '0.9' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 4px #00F0FF, 0 0 8px #00F0FF, 0 0 12px #00F0FF',
            boxShadow: '0 0 4px #00F0FF, 0 0 8px #00F0FF',
          },
          '50%': {
            textShadow: '0 0 8px #FF006C, 0 0 16px #FF006C, 0 0 24px #FF006C',
            boxShadow: '0 0 8px #FF006C, 0 0 16px #FF006C',
          },
          '100%': {
            textShadow: '0 0 4px #00F0FF, 0 0 8px #00F0FF, 0 0 12px #00F0FF',
            boxShadow: '0 0 4px #00F0FF, 0 0 8px #00F0FF',
          },
        },
        dataFlow: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        textBlurOut: {
          '0%': { filter: 'blur(0)', opacity: '1' },
          '100%': { filter: 'blur(12px)', opacity: '0' },
        },
        textBlurIn: {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        hologram: {
          '0%, 100%': {
            opacity: '1',
            filter: 'hue-rotate(0deg) brightness(1) saturate(1)',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'hue-rotate(45deg) brightness(1.2) saturate(1.2)',
            transform: 'scale(1.02)',
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        digitalNoise: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(5px, -5px)' },
          '66%': { transform: 'translate(-5px, 5px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
        `,
        'cyber-scan': `
          repeating-linear-gradient(
            to bottom,
            transparent 0%,
            transparent 45%,
            rgba(0, 240, 255, 0.1) 45%,
            rgba(0, 240, 255, 0.1) 55%,
            transparent 55%,
            transparent 100%
          )
        `,
        'cyber-lines': `
          repeating-linear-gradient(
            90deg,
            rgba(0, 240, 255, 0.05) 0px,
            rgba(0, 240, 255, 0.05) 1px,
            transparent 1px,
            transparent 20px
          )
        `,
        'cyber-noise': 'url("/noise.png")',
        'matrix-bg': `
          repeating-linear-gradient(
            0deg,
            rgba(0, 240, 255, 0.1) 0px,
            rgba(0, 240, 255, 0) 2px,
            rgba(0, 240, 255, 0.1) 4px
          )
        `,
        'energy-field': `
          radial-gradient(
            circle at center,
            rgba(0, 240, 255, 0.2) 0%,
            rgba(255, 0, 108, 0.1) 50%,
            transparent 100%
          )
        `,
      },
    },
  },
  plugins: [],
};

export default config; 
}; 