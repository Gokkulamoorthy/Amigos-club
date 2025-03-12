/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#000913',
        'cyber-darker': '#0A0F1B',
        'cyber-dark': '#141B2D',
        'neon-blue': '#00F0FF',
        'neon-pink': '#FF00E5',
        'neon-purple': '#BD00FF',
        'neon-green': '#00FF9E',
        'neon-yellow': '#FFE600',
        'neon-red': '#FF0055',
        'cyber-gray': {
          300: '#9BA1AC',
          400: '#7A8190',
          500: '#5C6270',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(transparent 0%, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, transparent 0%, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
        'cyber-lines': 'repeating-linear-gradient(90deg, rgba(0, 240, 255, 0.05) 0px, rgba(0, 240, 255, 0.05) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.05) 0px, rgba(0, 240, 255, 0.05) 1px, transparent 1px, transparent 30px)',
      },
      animation: {
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'hover-float': 'hover-float 3s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'power-pulse': 'power-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'glitch-1': 'glitch-1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
        'glitch-skew': 'glitch-skew 1s infinite linear alternate-reverse',
      },
      keyframes: {
        'text-glow': {
          '0%': {
            textShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
          },
          '100%': {
            textShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 30px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
          },
        },
        'hover-float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'matrix-rain': {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(100%)',
          },
        },
        'power-pulse': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        'glitch-1': {
          '0%': {
            transform: 'none',
            opacity: '0.25',
          },
          '7%': {
            transform: 'translate(-2px, -3px)',
            opacity: '0.5',
          },
          '10%': {
            transform: 'none',
            opacity: '0.25',
          },
          '27%': {
            transform: 'none',
            opacity: '0.25',
          },
          '30%': {
            transform: 'translate(-5px, -2px)',
            opacity: '0.5',
          },
          '35%': {
            transform: 'none',
            opacity: '0.25',
          },
          '50%': {
            transform: 'none',
            opacity: '0.25',
          },
          '55%': {
            transform: 'translate(-5px, -1px)',
            opacity: '0.5',
          },
          '72%': {
            transform: 'none',
            opacity: '0.25',
          },
          '75%': {
            transform: 'translate(-2px, -6px)',
            opacity: '0.5',
          },
          '80%': {
            transform: 'none',
            opacity: '0.25',
          },
          '100%': {
            transform: 'none',
            opacity: '0.25',
          },
        },
        'glitch-2': {
          '0%': {
            transform: 'none',
            opacity: '0.25',
          },
          '7%': {
            transform: 'translate(2px, 3px)',
            opacity: '0.5',
          },
          '10%': {
            transform: 'none',
            opacity: '0.25',
          },
          '27%': {
            transform: 'none',
            opacity: '0.25',
          },
          '30%': {
            transform: 'translate(5px, 2px)',
            opacity: '0.5',
          },
          '35%': {
            transform: 'none',
            opacity: '0.25',
          },
          '50%': {
            transform: 'none',
            opacity: '0.25',
          },
          '55%': {
            transform: 'translate(5px, 1px)',
            opacity: '0.5',
          },
          '72%': {
            transform: 'none',
            opacity: '0.25',
          },
          '75%': {
            transform: 'translate(2px, 6px)',
            opacity: '0.5',
          },
          '80%': {
            transform: 'none',
            opacity: '0.25',
          },
          '100%': {
            transform: 'none',
            opacity: '0.25',
          },
        },
        'glitch-skew': {
          '0%': {
            transform: 'skew(0deg)',
          },
          '20%': {
            transform: 'skew(2deg)',
          },
          '40%': {
            transform: 'skew(0deg)',
          },
          '60%': {
            transform: 'skew(-2deg)',
          },
          '80%': {
            transform: 'skew(0deg)',
          },
          '100%': {
            transform: 'skew(0deg)',
          },
        },
      },
      backgroundSize: {
        'cyber-grid': '30px 30px',
      },
      fontFamily: {
        'gaming': ['var(--font-gaming)', 'monospace'],
        'cyber-display': ['var(--font-cyber)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}