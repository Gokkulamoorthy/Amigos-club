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
        sans: ["var(--font-sans)"],
        gaming: ["var(--font-gaming)"],
        cyber: ["var(--font-cyber)"],
        'cyberpunk': ['Rajdhani', 'sans-serif'],
        'cyber-display': ['Orbitron', 'sans-serif'],
      },
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-darker': '#050505',
        'cyber-gray': {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b0b0b0',
          500: '#888888',
          600: '#6d6d6d',
          700: '#5d5d5d',
          800: '#4f4f4f',
          900: '#454545',
          950: '#2d2d2d',
        },
        'neon-blue': '#00f0ff',
        'neon-pink': '#ff006c',
        'neon-purple': '#9d00ff',
        'neon-red': '#ff003c',
        'neon-green': '#00ff9d',
        'neon-yellow': '#ffd700',
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
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'power-pulse': 'power-pulse 2s ease-in-out infinite',
        'hover-float': 'hover-float 3s ease-in-out infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.5s ease-in-out infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'power-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'hover-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0,240,255,0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0,240,255,0.8)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.1) 1px, transparent 1px)',
        'cyber-lines': 'repeating-linear-gradient(45deg, rgba(0,240,255,0.1) 0px, rgba(0,240,255,0.1) 1px, transparent 1px, transparent 10px)',
      },
    },
  },
  plugins: [],
};

export default config; 